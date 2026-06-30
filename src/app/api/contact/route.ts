import { NextResponse } from "next/server";
import {
  resend,
  EMAIL_FROM,
  NOTIFY_EMAIL,
  emailLayout,
  escapeHtml,
  infoBox,
  nl2br,
} from "@/lib/email";

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
      subject: `Nowa wiadomość — ${subject}`,
      replyTo: email,
      html: emailLayout({
        variant: "admin",
        eyebrow: "Formularz kontaktowy",
        title: "Nowa wiadomość z formularza",
        subtitle: "Ktoś skontaktował się ze StageUp przez stronę.",
        content: `
          <p style="margin:0 0 18px;">
            Otrzymano nową wiadomość z formularza kontaktowego.
          </p>

          ${infoBox([
            { label: "Imię", value: name },
            { label: "Email", value: email },
            { label: "Temat", value: subject },
          ])}

          <div style="margin-top:24px;">
            <p style="margin:0 0 10px;font-size:15px;font-weight:900;color:#111111;">
              Wiadomość:
            </p>

            <div style="padding:20px;border-radius:20px;background:#FAFAFA;border:1px solid #ECE8F4;font-size:15px;line-height:1.75;color:#4B4654;">
              ${nl2br(message)}
            </div>
          </div>
        `,
        cta: {
          label: "Odpowiedz użytkownikowi",
          href: `mailto:${email}`,
        },
        footerNote:
          "To powiadomienie administracyjne z formularza kontaktowego StageUp.",
      }),
    });

    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Otrzymaliśmy Twoją wiadomość — StageUp",
      html: emailLayout({
        variant: "user",
        eyebrow: "Kontakt",
        title: "Dziękujemy za wiadomość",
        subtitle: "Otrzymaliśmy Twoją wiadomość i wrócimy z odpowiedzią.",
        content: `
          <p style="margin:0 0 18px;">Cześć <strong>${escapeHtml(name)}</strong>,</p>

          <p style="margin:0 0 18px;">
            dziękujemy za kontakt ze StageUp. Twoja wiadomość dotarła do naszego zespołu.
          </p>

          <p style="margin:0 0 18px;">
            Odpowiemy tak szybko, jak będzie to możliwe. Jeśli temat wymaga dodatkowych
            informacji, odezwiemy się na adres e-mail podany w formularzu.
          </p>

          <div style="margin:24px 0;padding:20px;border-radius:22px;background:#F7F3FF;border:1px solid #E9DDFD;">
            <p style="margin:0 0 12px;font-size:15px;font-weight:900;color:#111111;">
              Twoje zgłoszenie:
            </p>
            <p style="margin:0;color:#4B4654;">
              ${escapeHtml(subject)}
            </p>
          </div>
        `,
        cta: {
          label: "Wróć na StageUp",
          href: "https://stageup.pl",
        },
        footerNote:
          "Dziękujemy za zainteresowanie StageUp. To miejsce dla artystów, zespołów i organizatorów wydarzeń muzycznych.",
      }),
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