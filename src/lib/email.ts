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

export function emailLayout(title: string, content: string, cta?: { label: string; href: string }) {
  return `
  <div style="margin:0;padding:0;background:#F7F3FF;font-family:Arial,Helvetica,sans-serif;color:#111111;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F3FF;padding:34px 14px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #E9DDFD;border-radius:28px;overflow:hidden;box-shadow:0 24px 70px rgba(80,35,140,0.10);">
            
            <tr>
              <td style="padding:30px 34px;background:linear-gradient(135deg,#7C3AED,#A855F7);">
                <div style="font-size:13px;letter-spacing:0.22em;text-transform:uppercase;font-weight:800;color:#F4EEFF;">
                  StageUp
                </div>
                <div style="margin-top:10px;font-size:28px;line-height:1.15;font-weight:900;color:#ffffff;">
                  Twoja droga na scenę zaczyna się tutaj
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:34px;">
                <h1 style="margin:0 0 20px;font-size:30px;line-height:1.15;letter-spacing:-0.04em;color:#111111;">
                  ${title}
                </h1>

                <div style="font-size:16px;line-height:1.75;color:#4B4654;">
                  ${content}
                </div>

                ${
                  cta
                    ? `
                    <div style="margin-top:30px;">
                      <a href="${cta.href}" style="display:inline-block;background:#7C3AED;color:#ffffff;text-decoration:none;font-weight:800;font-size:15px;padding:15px 22px;border-radius:14px;">
                        ${cta.label}
                      </a>
                    </div>
                    `
                    : ""
                }

                <div style="margin-top:34px;padding-top:22px;border-top:1px solid #EFE7FB;">
                  <p style="margin:0;font-size:13px;line-height:1.7;color:#7A7485;">
                    StageUp — platforma łącząca artystów, zespoły i organizatorów wydarzeń.
                  </p>
                  <p style="margin:10px 0 0;font-size:13px;color:#7A7485;">
                    W każdej chwili możesz zrezygnować z komunikacji, pisząc na support@stageup.pl.
                  </p>
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}