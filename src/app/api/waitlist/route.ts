import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { resend, EMAIL_FROM, NOTIFY_EMAIL, emailLayout } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const city = String(body.city || "").trim();
    const userType = String(body.userType || "").trim();
    const accepted = Boolean(body.accepted);

    if (!name || !email || !city || !userType) {
      return NextResponse.json(
        { message: "Uzupełnij wszystkie pola formularza." },
        { status: 400 }
      );
    }

    if (!accepted) {
      return NextResponse.json(
        { message: "Musisz zaakceptować regulamin i politykę prywatności." },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from("waitlist").insert({
      email,
      full_name: name,
      city,
      user_type: userType,
      accepted_terms: accepted,
      source: "landing_waitlist",
      status: "new",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "Ten adres jest już zapisany na listę." },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { message: "Nie udało się zapisać na listę." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Dziękujemy za zapisanie się do StageUp",
      html: emailLayout(
        "Jesteś na liście StageUp",
        `
          <p>Cześć ${name},</p>
          <p>Dziękujemy za dołączenie do listy oczekujących StageUp.</p>
          <p>Damy Ci znać, gdy ruszy pierwsza wersja platformy.</p>
        `
      ),
    });

    await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFY_EMAIL,
      subject: "Nowy zapis na listę StageUp",
      html: emailLayout(
        "Nowy zapis na listę",
        `
          <p><strong>Imię:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Miasto:</strong> ${city}</p>
          <p><strong>Typ:</strong> ${userType}</p>
        `
      ),
    });

    return NextResponse.json(
      { message: "Jesteś zapisany na listę oczekujących StageUp!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Wystąpił błąd. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}