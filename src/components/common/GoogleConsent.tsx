"use client";

import Script from "next/script";

const COOKIE_KEY = "stageup_cookie_consent";

export function GoogleConsent() {
  return (
    <Script id="google-consent-mode" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });

        try {
          var savedConsent = localStorage.getItem('${COOKIE_KEY}');
          if (savedConsent) {
            var parsedConsent = JSON.parse(savedConsent);
            var analyticsGranted = parsedConsent.analytics === true;

            gtag('consent', 'update', {
              analytics_storage: analyticsGranted ? 'granted' : 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          }
        } catch (error) {}
      `}
    </Script>
  );
}