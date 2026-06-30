import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieBanner } from "@/components/common/CookieBanner";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stageup.pl"),

  title: {
    default: "StageUp – Platforma dla artystów i organizatorów wydarzeń",
    template: "%s | StageUp",
  },

  description:
    "StageUp łączy artystów, zespoły i organizatorów wydarzeń muzycznych. Znajdź koncerty, zgłoszenia i współprace w jednym miejscu.",

  keywords: [
    "StageUp",
    "artyści",
    "zespoły",
    "organizatorzy",
    "koncerty",
    "festiwale",
    "wydarzenia muzyczne",
    "booking",
    "muzyka",
    "scena muzyczna",
  ],

  authors: [{ name: "StageUp" }],

  creator: "StageUp",

icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://stageup.pl",
    siteName: "StageUp",
    title: "StageUp – Platforma dla artystów i organizatorów wydarzeń",
    description:
      "Łączymy artystów, zespoły i organizatorów wydarzeń muzycznych.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "StageUp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StageUp",
    description:
      "Platforma dla artystów, zespołów i organizatorów wydarzeń muzycznych.",
    images: ["/og-image.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={satoshi.variable}>
      <body className="min-h-screen bg-[#FAFAFA] antialiased">
        <div className="overflow-x-hidden">{children}</div>

        <CookieBanner />
      </body>
    </html>
  );
}