import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

export const resend = new Resend(resendApiKey);

export const EMAIL_FROM = "StageUp <noreply@stageup.pl>";
export const NOTIFY_EMAIL =
  process.env.STAGEUP_NOTIFY_EMAIL || "stageuppolska@gmail.com";

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function nl2br(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

type EmailLayoutOptions = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  content: string;
  variant?: "user" | "admin" | "investor";
  cta?: {
    label: string;
    href: string;
  };
  footerNote?: string;
};

export function emailLayout({
  title,
  eyebrow = "StageUp",
  subtitle = "Twoja droga na scenę zaczyna się tutaj.",
  content,
  variant = "user",
  cta,
  footerNote,
}: EmailLayoutOptions) {
  const accent =
    variant === "admin"
      ? "#111827"
      : variant === "investor"
        ? "#5B21B6"
        : "#7C3AED";

  const gradient =
    variant === "admin"
      ? "linear-gradient(135deg,#111827,#312E81)"
      : variant === "investor"
        ? "linear-gradient(135deg,#4C1D95,#7C3AED,#A855F7)"
        : "linear-gradient(135deg,#6D28D9,#9333EA,#C026D3)";

  return `
  <!doctype html>
  <html lang="pl">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>${escapeHtml(title)}</title>
    </head>

    <body style="margin:0;padding:0;background:#F7F3FF;font-family:Arial,Helvetica,sans-serif;color:#111111;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
        ${escapeHtml(subtitle)}
      </div>

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F3FF;padding:36px 14px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #E9DDFD;border-radius:30px;overflow:hidden;box-shadow:0 28px 90px rgba(80,35,140,0.13);">
              
              <tr>
                <td style="padding:34px 34px 30px;background:${gradient};">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <div style="display:inline-block;background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.22);border-radius:999px;padding:8px 13px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:900;color:#ffffff;">
                          ${escapeHtml(eyebrow)}
                        </div>

                        <h1 style="margin:18px 0 0;font-size:34px;line-height:1.08;letter-spacing:-0.055em;font-weight:900;color:#ffffff;">
                          ${escapeHtml(title)}
                        </h1>

                        <p style="margin:14px 0 0;max-width:500px;font-size:15px;line-height:1.65;color:#F4EEFF;">
                          ${escapeHtml(subtitle)}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:34px;">
                  <div style="font-size:16px;line-height:1.78;color:#4B4654;">
                    ${content}
                  </div>

                  ${
                    cta
                      ? `
                        <div style="margin-top:30px;">
                          <a href="${escapeHtml(cta.href)}" style="display:inline-block;background:${accent};color:#ffffff;text-decoration:none;font-weight:900;font-size:15px;padding:16px 24px;border-radius:15px;box-shadow:0 16px 36px rgba(124,58,237,0.22);">
                            ${escapeHtml(cta.label)}
                          </a>
                        </div>
                      `
                      : ""
                  }

                  <div style="margin-top:34px;padding:20px;border-radius:20px;background:#FAF8FF;border:1px solid #EFE7FB;">
                    <p style="margin:0;font-size:14px;line-height:1.7;color:#6F6B78;">
                      ${footerNote || "Dziękujemy, że jesteś z nami. StageUp powstaje po to, żeby ułatwić artystom i organizatorom współpracę na scenie muzycznej."}
                    </p>
                  </div>

                  <div style="margin-top:28px;padding-top:22px;border-top:1px solid #EFE7FB;">
                    <p style="margin:0;font-size:13px;line-height:1.7;color:#7A7485;">
                      StageUp — platforma bookingowa dla artystów, zespołów i organizatorów wydarzeń muzycznych.
                    </p>

                    <p style="margin:10px 0 0;font-size:13px;line-height:1.7;color:#7A7485;">
                      Kontakt: <a href="mailto:support@stageup.pl" style="color:${accent};font-weight:700;text-decoration:none;">support@stageup.pl</a>
                    </p>

                    <p style="margin:10px 0 0;font-size:12px;line-height:1.7;color:#9A94A8;">
                      Ta wiadomość została wysłana automatycznie. Nie odpowiadaj bezpośrednio na ten adres.
                    </p>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

export function infoBox(rows: { label: string; value: string }[]) {
  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:18px;border-collapse:separate;border-spacing:0 10px;">
      ${rows
        .map(
          (row) => `
          <tr>
            <td style="width:150px;padding:13px 14px;background:#F7F3FF;border-radius:14px 0 0 14px;font-size:13px;font-weight:900;color:#6D28D9;">
              ${escapeHtml(row.label)}
            </td>
            <td style="padding:13px 14px;background:#FAFAFA;border-radius:0 14px 14px 0;font-size:14px;font-weight:700;color:#2D2935;">
              ${escapeHtml(row.value || "Brak")}
            </td>
          </tr>
        `
        )
        .join("")}
    </table>
  `;
}