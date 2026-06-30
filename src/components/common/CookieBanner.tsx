"use client";

import { ChevronDown, Cookie, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

const COOKIE_KEY = "stageup_cookie_consent";

type ConsentValue = "accepted" | "rejected";
type ViewMode = "default" | "settings";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("default");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_KEY);

    if (!savedConsent) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

function closeBanner(value: ConsentValue) {
  const analyticsConsent = value === "accepted" ? analyticsEnabled : false;

  localStorage.setItem(
    COOKIE_KEY,
    JSON.stringify({
      status: value,
      analytics: analyticsConsent,
      date: new Date().toISOString(),
    })
  );

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "stageup_cookie_consent_update",
    analytics_consent: analyticsConsent,
  });

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: analyticsConsent ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  setIsVisible(false);
  document.body.style.overflow = "";

  window.dispatchEvent(
    new CustomEvent("stageup-cookie-consent", {
      detail: {
        status: value,
        analytics: analyticsConsent,
      },
    })
  );
}

  if (!isVisible) return null;

return (
  <div className="fixed inset-0 z-[9999] flex items-end justify-center p-0 sm:items-center sm:p-6">
    <div className="absolute inset-0 bg-[#111111]/40 backdrop-blur-[10px]" />

    <div className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[30px] border border-white/70 bg-white shadow-[0_-24px_80px_rgba(20,20,40,0.22)] sm:max-h-[88vh] sm:max-w-[760px] sm:rounded-[32px] sm:shadow-[0_30px_100px_rgba(20,20,40,0.24)]">
      <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-purple-200/60 blur-3xl" />
      <div className="absolute bottom-[-90px] left-[-90px] h-[220px] w-[220px] rounded-full bg-purple-100/80 blur-3xl" />

      <div className="relative overflow-y-auto p-5 pb-4 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#7C3AED] sm:h-[56px] sm:w-[56px]">
            <Cookie size={25} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#7C3AED] sm:text-[12px]">
              Prywatność i cookies
            </p>

            <h2 className="mt-2 text-[24px] font-black leading-[1.1] tracking-[-0.045em] text-[#111111] sm:text-[34px]">
              Dajemy Ci kontrolę nad danymi
            </h2>

            {viewMode === "default" ? (
              <p className="mt-4 text-[14px] font-medium leading-[1.75] text-[#6F6B78] sm:text-[15px] sm:leading-[1.8]">
                Używamy plików cookies niezbędnych do działania strony oraz,
                za Twoją zgodą, cookies analitycznych do monitorowania ruchu,
                analizy zachowania użytkowników i ulepszania StageUp.
              </p>
            ) : (
              <div className="mt-5 grid gap-3">
                <CookieOption
                  title="Niezbędne cookies"
                  description="Wymagane do poprawnego działania strony. Tych cookies nie można wyłączyć."
                  enabled
                  locked
                />

                <CookieOption
                  title="Analityka"
                  description="Pomaga mierzyć ruch, źródła wejść i skuteczność formularzy oraz sekcji strony."
                  enabled={analyticsEnabled}
                  onToggle={() => setAnalyticsEnabled((current) => !current)}
                />
              </div>
            )}

            <a
              href="/polityka-prywatnosci"
              className="mt-4 inline-flex text-[14px] font-black text-[#7C3AED] transition hover:text-[#5B21B6]"
            >
              Zobacz politykę prywatności
            </a>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2 rounded-2xl bg-[#FAFAFA] px-4 py-3 text-[12px] font-medium leading-5 text-[#6F6B78] sm:text-[13px] sm:leading-6">
          <ShieldCheck size={17} className="mt-[1px] shrink-0 text-[#7C3AED]" />
          <span>
            Zgoda zostanie zapisana w tej przeglądarce. Możesz ją później
            zmienić po wyczyszczeniu danych strony.
          </span>
        </div>
      </div>

      <div className="relative border-t border-[#ECE8F4] bg-white/95 p-4 backdrop-blur sm:p-6">
        <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() =>
              setViewMode((current) =>
                current === "default" ? "settings" : "default"
              )
            }
            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-xl border border-[#E7E2EF] bg-white px-5 text-[14px] font-black text-[#5F5A68] transition hover:border-[#7C3AED] hover:text-[#7C3AED] sm:h-[50px]"
          >
            {viewMode === "default" ? "Dostosuj ustawienia" : "Wróć"}
            <ChevronDown
              size={17}
              className={`transition ${viewMode === "settings" ? "rotate-180" : ""}`}
            />
          </button>

          <div className="grid gap-3 sm:flex">
            <button
              type="button"
              onClick={() => closeBanner("rejected")}
              className="h-[48px] rounded-xl border border-[#E7E2EF] bg-white px-6 text-[14px] font-black text-[#5F5A68] transition hover:border-[#7C3AED] hover:text-[#7C3AED] sm:h-[50px]"
            >
              Tylko niezbędne
            </button>

            <button
              type="button"
              onClick={() => closeBanner("accepted")}
              className="h-[48px] rounded-xl bg-[#7C3AED] px-6 text-[14px] font-black text-white shadow-[0_16px_35px_rgba(124,58,237,0.24)] transition hover:bg-[#6D28D9] sm:h-[50px]"
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

function CookieOption({
  title,
  description,
  enabled,
  locked = false,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#ECE8F4] bg-[#FAFAFA] p-4">
      <div>
        <p className="text-[15px] font-black text-[#111111]">{title}</p>
        <p className="mt-1 text-[13px] font-medium leading-6 text-[#6F6B78]">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={locked ? undefined : onToggle}
        disabled={locked}
        className={`relative h-[30px] w-[54px] shrink-0 rounded-full transition ${
          enabled ? "bg-[#7C3AED]" : "bg-[#D8D3E4]"
        } ${locked ? "cursor-not-allowed opacity-70" : ""}`}
        aria-label={title}
      >
        <span
          className={`absolute top-[4px] h-[22px] w-[22px] rounded-full bg-white shadow transition ${
            enabled ? "left-[28px]" : "left-[4px]"
          }`}
        />
      </button>
    </div>
  );
}