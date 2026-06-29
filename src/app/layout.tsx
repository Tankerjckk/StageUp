import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieBanner } from "@/components/common/CookieBanner";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StageUp",
  description:
    "Platforma łącząca artystów, zespoły i organizatorów wydarzeń muzycznych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={satoshi.variable}>
      <body className="min-h-screen bg-[#FAFAFA] antialiased">
        <div className="overflow-x-hidden">
          {children}
        </div>

        <CookieBanner />
      </body>
    </html>
  );
}