import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
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
      html: emailLayout({
        variant: "investor",
        eyebrow: "Investor request",
        title: "Nowe zgłoszenie inwestorskie",
        subtitle: "Potencjalna współpraca lub inwestycja w StageUp.",
        content: `
          <p style="margin:0 0 18px;">
            Otrzymano nowe zgłoszenie z formularza inwestorskiego.
          </p>

          ${infoBox([
            { label: "Imię i nazwisko", value: fullName },
            { label: "Email", value: email },
            { label: "Firma", value: company || "Brak" },
            { label: "Źródło", value: "contact_page" },
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
          label: "Odpowiedz na wiadomość",
          href: `mailto:${email}`,
        },
        footerNote:
          "To zgłoszenie dotyczy potencjalnej współpracy, partnerstwa lub inwestycji.",
      }),
    });

    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "Otrzymaliśmy zgłoszenie inwestorskie — StageUp",
      html: emailLayout({
        variant: "investor",
        eyebrow: "StageUp",
        title: "Dziękujemy za zainteresowanie",
        subtitle: "Otrzymaliśmy Twoje zgłoszenie dotyczące współpracy lub inwestycji.",
        content: `
          <p style="margin:0 0 18px;">Cześć <strong>${escapeHtml(fullName)}</strong>,</p>

          <p style="margin:0 0 18px;">
            dziękujemy za kontakt i zainteresowanie StageUp. Otrzymaliśmy Twoje zgłoszenie
            dotyczące współpracy, partnerstwa lub inwestycji.
          </p>

          <p style="margin:0 0 18px;">
            Zapoznamy się z wiadomością i odezwiemy się możliwie najszybciej.
          </p>

          <div style="margin:24px 0;padding:20px;border-radius:22px;background:#F7F3FF;border:1px solid #E9DDFD;">
            <p style="margin:0 0 12px;font-size:15px;font-weight:900;color:#111111;">
              Co możesz otrzymać dalej?
            </p>
            <p style="margin:0 0 8px;">✓ informacje o kierunku rozwoju StageUp</p>
            <p style="margin:0 0 8px;">✓ szczegóły dotyczące projektu i rynku</p>
            <p style="margin:0;">✓ możliwość rozmowy o współpracy</p>
          </div>
        `,
        cta: {
          label: "Zobacz StageUp",
          href: "https://stageup.pl",
        },
        footerNote:
          "Dziękujemy za zainteresowanie projektem. StageUp powstaje jako platforma dla sceny muzycznej.",
      }),
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