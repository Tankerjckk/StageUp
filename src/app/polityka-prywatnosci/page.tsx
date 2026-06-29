import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Cookie,
  Database,
  Mail,
  Server,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Polityka prywatności | StageUp",
  description:
    "Polityka prywatności landing page StageUp oraz zasady przetwarzania danych osób zainteresowanych platformą.",
};

const sections = [
  { id: "administrator", label: "Administrator" },
  { id: "dane", label: "Jakie dane zbieramy" },
  { id: "cele", label: "Cele przetwarzania" },
  { id: "analityka", label: "Analityka i ruch" },
  { id: "cookies", label: "Cookies" },
  { id: "hosting", label: "Hosting" },
  { id: "okres", label: "Okres przechowywania" },
  { id: "prawa", label: "Twoje prawa" },
  { id: "kontakt", label: "Kontakt" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      <section className="border-b border-[#ECE8F4] bg-white py-8">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black text-[#7C3AED] transition hover:text-[#5B21B6]"
          >
            <ArrowLeft size={17} />
            Wróć na stronę główną
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#7C3AED]">
              StageUp
            </p>

            <h1 className="mt-4 text-[42px] font-black leading-[1.05] tracking-[-0.055em] md:text-[64px]">
              Polityka prywatności
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] font-medium leading-[1.75] text-[#6F6B78]">
              Dokument opisuje, w jaki sposób przetwarzamy dane osób
              korzystających ze strony stageup.pl oraz osób zapisujących się
              na listę zainteresowanych platformą.
            </p>

            <p className="mt-5 text-[14px] font-bold text-[#7B7785]">
              Ostatnia aktualizacja: 29 czerwca 2026 r.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-[120px] lg:h-fit">
              <div className="rounded-[28px] border border-[#ECE8F4] bg-white p-5 shadow-[0_18px_55px_rgba(20,20,40,0.035)]">
                <p className="mb-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#7C3AED]">
                  Spis treści
                </p>

                <nav className="grid gap-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-2xl px-4 py-3 text-[14px] font-bold text-[#5F5A68] transition hover:bg-[#F4EEFF] hover:text-[#7C3AED]"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="grid gap-6">
              <PolicyCard
                id="administrator"
                icon={<UserRound size={24} />}
                title="1. Administrator danych"
              >
                <p>
                  Administratorem danych osobowych przetwarzanych w związku z
                  korzystaniem z landing page StageUp jest:
                </p>

                <div className="mt-5 rounded-[20px] bg-[#F7F3FF] p-5 text-[#111111]">
                  <p className="font-black">Jacek Kubiak</p>
                  <p className="mt-2">ul. Hoża 9A/9</p>
                  <p>05-400 Otwock</p>
                  <p className="mt-2">
                    e-mail:{" "}
                    <a
                      href="mailto:biuro@tripledots.pl"
                      className="font-black text-[#7C3AED]"
                    >
                      biuro@tripledots.pl
                    </a>
                  </p>
                </div>
              </PolicyCard>

              <PolicyCard
                id="dane"
                icon={<Database size={24} />}
                title="2. Jakie dane zbieramy"
              >
                <p>
                  Na obecnym etapie StageUp zbiera dane wyłącznie w zakresie
                  niezbędnym do obsługi landing page, listy zainteresowanych oraz
                  analizy działania strony.
                </p>

                <ul>
                  <li>imię,</li>
                  <li>adres e-mail,</li>
                  <li>miasto,</li>
                  <li>informację o tym, kim jest użytkownik,</li>
                  <li>datę i czas wysłania formularza,</li>
                  <li>dane techniczne urządzenia i przeglądarki,</li>
                  <li>adres IP oraz przybliżone dane o aktywności na stronie.</li>
                </ul>
              </PolicyCard>

              <PolicyCard
                id="cele"
                icon={<ShieldCheck size={24} />}
                title="3. Cele i podstawy przetwarzania"
              >
                <p>Dane przetwarzamy w następujących celach:</p>

                <ul>
                  <li>zapisania użytkownika na listę zainteresowanych StageUp,</li>
                  <li>kontaktu w sprawie startu platformy,</li>
                  <li>przekazania informacji o rozwoju projektu,</li>
                  <li>obsługi zapytań przesłanych przez formularz lub e-mail,</li>
                  <li>zapewnienia bezpieczeństwa i prawidłowego działania strony,</li>
                  <li>
                    pomiaru ruchu na stronie, analizy źródeł odwiedzin,
                    sprawdzania skuteczności sekcji, formularzy i przycisków
                    oraz ulepszania landing page.
                  </li>
                </ul>

                <p>
                  Podstawą prawną przetwarzania danych jest zgoda użytkownika,
                  prawnie uzasadniony interes administratora polegający na
                  zapewnieniu bezpieczeństwa i rozwoju strony oraz konieczność
                  obsługi zapytania skierowanego przez użytkownika.
                </p>
              </PolicyCard>

              <PolicyCard
                id="analityka"
                icon={<BarChart3 size={24} />}
                title="4. Google Analytics 4 i Google Tag Manager"
              >
                <p>
                  Na stronie może być wykorzystywany Google Analytics 4 oraz
                  Google Tag Manager. Narzędzia te służą do monitorowania ruchu,
                  analizy zachowania użytkowników na stronie, sprawdzania źródeł
                  odwiedzin oraz oceny skuteczności formularzy i przycisków.
                </p>

                <p>
                  Dane analityczne mogą obejmować między innymi informacje o
                  odwiedzanych podstronach, czasie wizyty, typie urządzenia,
                  przeglądarce, przybliżonej lokalizacji oraz interakcjach ze
                  stroną. Dane te są analizowane w formie statystycznej i służą
                  do poprawy działania landing page StageUp.
                </p>

                <p>
                  Google Tag Manager służy do zarządzania skryptami
                  analitycznymi. Sam w sobie nie jest narzędziem analitycznym,
                  ale umożliwia uruchamianie takich narzędzi jak Google
                  Analytics 4.
                </p>
              </PolicyCard>

              <PolicyCard
                id="cookies"
                icon={<Cookie size={24} />}
                title="5. Pliki cookies"
              >
                <p>Strona może wykorzystywać pliki cookies oraz podobne technologie.</p>

                <ul>
                  <li>
                    <strong>Cookies niezbędne</strong> — potrzebne do
                    prawidłowego działania strony.
                  </li>
                  <li>
                    <strong>Cookies analityczne</strong> — wykorzystywane do
                    pomiaru ruchu i analizy korzystania ze strony.
                  </li>
                </ul>

                <p>
                  Cookies analityczne powinny być uruchamiane po uzyskaniu zgody
                  użytkownika, jeżeli wymagają tego obowiązujące przepisy lub
                  konfiguracja narzędzi analitycznych.
                </p>
              </PolicyCard>

              <PolicyCard
                id="hosting"
                icon={<Server size={24} />}
                title="6. Hosting i dostawcy technologiczni"
              >
                <p>
                  Strona StageUp będzie hostowana z wykorzystaniem usług Vercel.
                  Dane techniczne związane z działaniem strony mogą być
                  przetwarzane przez dostawcę hostingu w zakresie niezbędnym do
                  zapewnienia stabilności, bezpieczeństwa i dostępności strony.
                </p>

                <p>
                  W związku z użyciem Google Analytics 4 i Google Tag Manager
                  dane techniczne oraz analityczne mogą być przetwarzane również
                  przez Google.
                </p>
              </PolicyCard>

              <PolicyCard
                id="okres"
                icon={<Database size={24} />}
                title="7. Okres przechowywania danych"
              >
                <p>
                  Dane przesłane przez formularz listy zainteresowanych będą
                  przechowywane do czasu wycofania zgody, zgłoszenia żądania
                  usunięcia danych albo do momentu, w którym dane nie będą już
                  potrzebne do celu, w jakim zostały zebrane.
                </p>

                <p>
                  Dane analityczne są przechowywane zgodnie z ustawieniami
                  narzędzi analitycznych oraz konfiguracją administratora.
                </p>
              </PolicyCard>

              <PolicyCard
                id="prawa"
                icon={<ShieldCheck size={24} />}
                title="8. Prawa użytkownika"
              >
                <p>Każda osoba, której dane dotyczą, ma prawo do:</p>

                <ul>
                  <li>dostępu do swoich danych,</li>
                  <li>sprostowania danych,</li>
                  <li>usunięcia danych,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>przenoszenia danych,</li>
                  <li>wniesienia sprzeciwu,</li>
                  <li>cofnięcia zgody w dowolnym momencie,</li>
                  <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                </ul>
              </PolicyCard>

              <PolicyCard
                id="kontakt"
                icon={<Mail size={24} />}
                title="9. Kontakt"
              >
                <p>
                  W sprawach dotyczących prywatności, danych osobowych lub
                  chęci usunięcia danych z listy zainteresowanych można
                  skontaktować się z administratorem:
                </p>

                <a
                  href="mailto:biuro@tripledots.pl"
                  className="mt-6 inline-flex h-[54px] w-fit items-center justify-center rounded-2xl bg-[#7C3AED] px-7 text-[15px] font-black text-white shadow-[0_16px_35px_rgba(124,58,237,0.24)] transition hover:bg-[#6D28D9]"
                >
                  Napisz: biuro@tripledots.pl
                </a>
              </PolicyCard>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function PolicyCard({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-[120px] rounded-[30px] border border-[#ECE8F4] bg-white p-6 shadow-[0_18px_55px_rgba(20,20,40,0.035)] md:p-8"
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#7C3AED]">
          {icon}
        </div>

        <h2 className="text-[25px] font-black tracking-[-0.04em] text-[#111111] md:text-[30px]">
          {title}
        </h2>
      </div>

      <div className="prose prose-neutral max-w-none prose-p:text-[15px] prose-p:font-medium prose-p:leading-[1.85] prose-p:text-[#5F5A68] prose-li:text-[15px] prose-li:font-medium prose-li:leading-[1.75] prose-li:text-[#5F5A68] prose-ul:my-5 prose-strong:text-[#111111]">
        {children}
      </div>
    </section>
  );
}