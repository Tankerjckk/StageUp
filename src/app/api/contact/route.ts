import { NextResponse } from "next/server";
import { resend, EMAIL_FROM, NOTIFY_EMAIL, emailLayout } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();
    const accepted = Boolean(body.accepted);

    if (!name || !email || !subject || !message) {
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

    await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFY_EMAIL,
      subject: `Nowa wiadomość: ${subject}`,
      replyTo: email,
      html: emailLayout(
        "Nowa wiadomość z formularza",
        `
          <p><strong>Imię:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Temat:</strong> ${subject}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `
      ),
    });

    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Otrzymaliśmy Twoją wiadomość — StageUp",
      html: emailLayout(
        "Dziękujemy za kontakt",
        `
          <p>Cześć ${name},</p>
          <p>Otrzymaliśmy Twoją wiadomość i odpowiemy tak szybko, jak będzie to możliwe.</p>
          <p>Dziękujemy za zainteresowanie StageUp.</p>
        `
      ),
    });

    return NextResponse.json(
      { message: "Wiadomość została wysłana. Dzięki!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Nie udało się wysłać wiadomości. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}