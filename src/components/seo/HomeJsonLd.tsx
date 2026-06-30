import { faqItems } from "@/components/landing/FAQ";
import { JsonLd } from "./JsonLd";

export function HomeJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StageUp",
    url: "https://stageup.pl",
    logo: "https://stageup.pl/apple-touch-icon.png",
    email: "kontakt@stageup.pl",
    description:
      "StageUp to platforma bookingowa łącząca artystów, zespoły i organizatorów wydarzeń muzycznych.",
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "kontakt@stageup.pl",
        contactType: "customer support",
        availableLanguage: ["pl"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StageUp",
    url: "https://stageup.pl",
    inLanguage: "pl-PL",
    publisher: {
      "@type": "Organization",
      name: "StageUp",
    },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "StageUp – platforma bookingowa dla artystów i organizatorów wydarzeń",
    url: "https://stageup.pl",
    inLanguage: "pl-PL",
    description:
      "StageUp łączy artystów, zespoły i organizatorów wydarzeń muzycznych.",
    isPartOf: {
      "@type": "WebSite",
      name: "StageUp",
      url: "https://stageup.pl",
    },
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "StageUp",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://stageup.pl",
    description:
      "Platforma bookingowa dla artystów, zespołów i organizatorów wydarzeń muzycznych.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PLN",
      availability: "https://schema.org/PreOrder",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={webpage} />
      <JsonLd data={softwareApplication} />
      <JsonLd data={faqPage} />
    </>
  );
}