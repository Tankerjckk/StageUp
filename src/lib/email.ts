import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

export const resend = new Resend(resendApiKey);

export const EMAIL_FROM = "StageUp <noreply@stageup.pl>";
export const NOTIFY_EMAIL =
  process.env.STAGEUP_NOTIFY_EMAIL || "stageuppolska@gmail.com";

export function emailLayout(title: string, content: string) {
  return `
    <div style="font-family:Arial,sans-serif;background:#fafafa;padding:32px;">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:24px;padding:32px;border:1px solid #eee;">
        <h1 style="margin:0 0 18px;font-size:28px;color:#111;">${title}</h1>
        <div style="font-size:15px;line-height:1.7;color:#444;">
          ${content}
        </div>
        <hr style="border:none;border-top:1px solid #eee;margin:28px 0;" />
        <p style="font-size:13px;color:#777;margin:0;">
          StageUp — platforma łącząca artystów, zespoły i organizatorów wydarzeń.
        </p>
      </div>
    </div>
  `;
}