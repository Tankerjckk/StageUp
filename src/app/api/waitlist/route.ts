import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import {
  resend,
  EMAIL_FROM,
  NOTIFY_EMAIL,
  emailLayout,
  escapeHtml,
  infoBox,
} from "@/lib/email";

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
      subject: "Jesteś na liście oczekujących StageUp",
      html: emailLayout({
        variant: "user",
        eyebrow: "Lista oczekujących",
        title: "Jesteś na liście StageUp",
        subtitle: "Dziękujemy za dołączenie do pierwszych użytkowników platformy.",
        content: `
          <p style="margin:0 0 18px;">Cześć <strong>${escapeHtml(name)}</strong>,</p>

          <p style="margin:0 0 18px;">
            dzięki za zapisanie się na listę oczekujących StageUp. To dopiero początek,
            ale właśnie budujemy miejsce, które ma realnie ułatwić artystom, zespołom
            i organizatorom wydarzeń muzycznych nawiązywanie współpracy.
          </p>

          <p style="margin:0 0 18px;">
            Gdy ruszy pierwsza wersja platformy, damy Ci znać jako jednej z pierwszych osób.
          </p>

          <div style="margin:24px 0;padding:20px;border-radius:22px;background:#F7F3FF;border:1px solid #E9DDFD;">
            <p style="margin:0 0 12px;font-size:15px;font-weight:900;color:#111111;">Co dalej?</p>
            <p style="margin:0 0 8px;">✓ otrzymasz informację o starcie platformy</p>
            <p style="margin:0 0 8px;">✓ poznasz nowe funkcje przed oficjalną premierą</p>
            <p style="margin:0;">✓ będziesz bliżej pierwszej społeczności StageUp</p>
          </div>

          <p style="margin:0;">
            Do zobaczenia po drugiej stronie sceny.
          </p>
        `,
        cta: {
          label: "Odwiedź StageUp",
          href: "https://stageup.pl",
        },
        footerNote:
          "Masz pytania albo chcesz opowiedzieć nam, czego potrzebujesz jako artysta lub organizator? Napisz na support@stageup.pl.",
      }),
    });

    await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFY_EMAIL,
      subject: "Nowy zapis na listę StageUp",
      html: emailLayout({
        variant: "admin",
        eyebrow: "Nowy lead",
        title: "Nowy zapis na listę",
        subtitle: "Ktoś właśnie dołączył do listy oczekujących StageUp.",
        content: `
          <p style="margin:0 0 18px;">
            Nowy użytkownik zapisał się przez landing page.
          </p>

          ${infoBox([
            { label: "Imię", value: name },
            { label: "Email", value: email },
            { label: "Miasto", value: city },
            { label: "Typ", value: userType },
            { label: "Źródło", value: "landing_waitlist" },
          ])}
        `,
        cta: {
          label: "Otwórz panel / bazę",
          href: "https://supabase.com",
        },
        footerNote:
          "Ten mail jest powiadomieniem administracyjnym. Dane użytkownika zostały zapisane w tabeli waitlist.",
      }),
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