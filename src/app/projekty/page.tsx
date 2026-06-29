import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

const mockups = [
  {
    title: "Rejestracja",
    description: "Proces wyboru roli i zakładania konta.",
    image: "/images/showcase/rejestr.png",
  },
  {
    title: "Logowanie",
    description: "Ekran logowania do platformy.",
    image: "/images/showcase/logowanie.png",
  },
  {
    title: "Dashboard artysty",
    description: "Panel zarządzania profilem i zgłoszeniami artysty.",
    image: "/images/showcase/dashboard-artysta.png",
  },
  {
    title: "Dashboard organizatora",
    description: "Panel organizatora wydarzeń i zgłoszeń.",
    image: "/images/showcase/dashboard-organizator.png",
  },
  {
    title: "Profil zespołu",
    description: "Publiczne portfolio artysty lub zespołu.",
    image: "/images/showcase/profil-zespol.png",
  },
  {
    title: "Profil wydarzenia",
    description: "Widok wydarzenia z informacjami i możliwością zgłoszenia.",
    image: "/images/showcase/profil-wydarzenia.png",
  },
  {
    title: "Profil organizatora",
    description: "Publiczny profil klubu, domu kultury lub organizatora.",
    image: "/images/showcase/profil-organizator.png",
  },
  {
    title: "Lista wydarzeń",
    description: "Wyszukiwarka i katalog wydarzeń muzycznych.",
    image: "/images/showcase/lista-wydarzen.png",
  },
  {
    title: "Lista artystów",
    description: "Katalog artystów i zespołów dostępnych na platformie.",
    image: "/images/showcase/lista-artysci.png",
  },
  {
    title: "Lista zgłoszeń",
    description: "Widok zgłoszeń dostępny dla organizatora.",
    image: "/images/showcase/lista-zgloszenia.png",
  },
  {
    title: "Powiadomienia",
    description: "Centrum powiadomień użytkownika.",
    image: "/images/showcase/powiadomienie.png",
  },
  {
    title: "Wiadomości",
    description: "Komunikacja między artystami i organizatorami.",
    image: "/images/showcase/wiadomos.png",
  },
  {
    title: "Ustawienia",
    description: "Zarządzanie kontem i profilem użytkownika.",
    image: "/images/showcase/ustawienie.png",
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      <section className="border-b border-[#ECE8F4] bg-white py-8">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] transition hover:text-[#5B21B6]"
          >
            <ArrowLeft size={17} />
            Wróć na stronę główną
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#7C3AED]">
              StageUp Preview
            </p>

            <h1 className="mt-4 text-[42px] font-black leading-[1.05] tracking-[-0.055em] md:text-[64px]">
              Wizja produktu i projekt interfejsu
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] font-medium leading-[1.75] text-[#6F6B78]">
              Zebrane makiety ekranów StageUp
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8">
            {mockups.map((mockup, index) => (
              <article
                key={mockup.title}
                className="overflow-hidden rounded-[32px] border border-[#ECE8F4] bg-white shadow-[0_24px_80px_rgba(20,20,40,0.055)]"
              >
                <div className="border-b border-[#ECE8F4] px-6 py-6 md:px-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-[13px] font-black text-[#7C3AED]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="mt-2 text-[28px] font-black tracking-[-0.04em] md:text-[34px]">
                        {mockup.title}
                      </h2>

                      <p className="mt-2 max-w-2xl text-[15px] leading-7 text-[#6F6B78]">
                        {mockup.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F4F0FA] p-3 md:p-5">
                  <div className="overflow-hidden rounded-[24px] bg-white">
                    <Image
                      src={mockup.image}
                      alt={mockup.title}
                      width={1600}
                      height={1000}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}