export const COOKIE_CONSENT_KEY = "stageup_cookie_consent";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

export function setCookie(name: string, value: string, maxAge = COOKIE_MAX_AGE) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax; Secure`;
}