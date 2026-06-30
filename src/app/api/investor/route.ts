import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { resend, EMAIL_FROM, NOTIFY_EMAIL, emailLayout } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();
    const accepted = Boolean(body.accepted);

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "Uzupełnij imię i nazwisko, e-mail oraz wiadomość." },
        { status: 400 }
      );
    }

    if (!accepted) {
      return NextResponse.json(
        { message: "Musisz zaakceptować regulamin i politykę prywatności." },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from("investor_requests").insert({
      full_name: fullName,
      email,
      company,
      message,
      accepted_terms: accepted,
      source: "contact_page",
    });

    if (error) {
      return NextResponse.json(
        { message: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFY_EMAIL,
      subject: "Nowe zgłoszenie inwestorskie — StageUp",
      replyTo: email,
      html: emailLayout(
        "Nowe zgłoszenie inwestorskie",
        `
          <p><strong>Imię i nazwisko:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Firma:</strong> ${company || "Brak"}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `
      ),
    });

    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Otrzymaliśmy zgłoszenie inwestorskie — StageUp",
      html: emailLayout(
        "Dziękujemy za zainteresowanie StageUp",
        `
          <p>Cześć ${fullName},</p>
          <p>Otrzymaliśmy Twoje zgłoszenie dotyczące współpracy lub inwestycji.</p>
          <p>Zapoznamy się z wiadomością i odezwiemy się możliwie najszybciej.</p>
        `
      ),
    });

    return NextResponse.json(
      { message: "Zgłoszenie inwestorskie zostało wysłane." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}