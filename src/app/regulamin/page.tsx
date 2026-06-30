import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Info,
  Mail,
  Monitor,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Regulamin | StageUp",
  description: "Regulamin korzystania z StageUp.",
};

const sections = [
  { id: "postanowienia", label: "Postanowienia ogólne" },
  { id: "administrator", label: "Właściciel strony" },
  { id: "charakter", label: "Charakter strony" },
  { id: "waiting-list", label: "Lista zainteresowanych" },
  { id: "zasady", label: "Zasady korzystania" },
  { id: "wlasnosc", label: "Własność intelektualna" },
  { id: "odpowiedzialnosc", label: "Odpowiedzialność" },
  { id: "dane", label: "Dane osobowe" },
  { id: "kontakt", label: "Kontakt" },
  { id: "koncowe", label: "Postanowienia końcowe" },
];

export default function TermsPage() {
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
              Regulamin StageUp
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] font-medium leading-[1.75] text-[#6F6B78]">
              Regulamin określa zasady korzystania ze strony internetowej
              stageup.pl oraz zasady zapisu na listę zainteresowanych projektem.
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
                id="postanowienia"
                icon={<FileText size={24} />}
                title="1. Postanowienia ogólne"
              >
                <p>
                  Niniejszy regulamin określa zasady korzystania ze strony stageup.pl, dostępnego pod adresem internetowym związanym z
                  projektem StageUp.
                </p>
                <p>
                  Strona ma charakter informacyjny, promocyjny oraz służy do
                  zbierania zgłoszeń od osób zainteresowanych przyszłym
                  uruchomieniem platformy StageUp.
                </p>
              </PolicyCard>

              <PolicyCard
                id="administrator"
                icon={<UserRound size={24} />}
                title="2. Informacje o właścicielu strony"
              >
                <p>Właścicielem i administratorem strony jest:</p>

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
                id="charakter"
                icon={<Info size={24} />}
                title="3. Charakter strony StageUp"
              >
                <p>
                  StageUp znajduje się obecnie w fazie przygotowania do
                  uruchomienia. Strona nie stanowi jeszcze pełnej platformy
                  internetowej, marketplace’u ani serwisu społecznościowego.
                </p>
                <p>
                  Prezentowane na stronie opisy, wizualizacje, makiety,
                  koncepcje interfejsu oraz informacje o funkcjonalnościach mają
                  charakter poglądowy i mogą ulec zmianie przed publicznym
                  uruchomieniem platformy.
                </p>
              </PolicyCard>

              <PolicyCard
                id="waiting-list"
                icon={<Sparkles size={24} />}
                title="4. Lista zainteresowanych"
              >
                <p>
                  Użytkownik może dobrowolnie zapisać się na listę osób
                  zainteresowanych projektem StageUp poprzez formularz dostępny
                  na stronie.
                </p>
                <p>
                  Zapis na listę zainteresowanych nie oznacza zawarcia umowy,
                  utworzenia konta użytkownika ani gwarancji dostępu do
                  platformy w określonym terminie.
                </p>
                <p>
                  Administrator może kontaktować się z osobami zapisanymi na
                  listę w celu przekazywania informacji o rozwoju projektu,
                  starcie wersji testowej, planowanym uruchomieniu platformy lub
                  zebrania opinii dotyczących produktu.
                </p>
              </PolicyCard>

              <PolicyCard
                id="zasady"
                icon={<Monitor size={24} />}
                title="5. Zasady korzystania ze strony"
              >
                <p>Użytkownik zobowiązuje się do korzystania ze strony zgodnie z prawem, dobrymi obyczajami oraz jej przeznaczeniem.</p>

                <ul>
                  <li>nie należy podawać danych nieprawdziwych lub cudzych,</li>
                  <li>nie należy podejmować działań zakłócających działanie strony,</li>
                  <li>nie należy próbować uzyskiwać nieuprawnionego dostępu do infrastruktury strony,</li>
                  <li>nie należy kopiować, rozpowszechniać lub wykorzystywać materiałów ze strony bez zgody administratora.</li>
                </ul>
              </PolicyCard>

              <PolicyCard
                id="wlasnosc"
                icon={<ShieldCheck size={24} />}
                title="6. Własność intelektualna"
              >
                <p>
                  Nazwa StageUp, koncepcja projektu, układ graficzny strony,
                  elementy interfejsu, teksty, grafiki, logotypy, makiety oraz
                  inne materiały prezentowane na stronie stanowią własność
                  administratora lub zostały wykorzystane na podstawie
                  odpowiednich uprawnień.
                </p>
                <p>
                  Kopiowanie, rozpowszechnianie, modyfikowanie lub komercyjne
                  wykorzystywanie materiałów dostępnych na stronie bez uprzedniej
                  zgody administratora jest zabronione.
                </p>
              </PolicyCard>

              <PolicyCard
                id="odpowiedzialnosc"
                icon={<Info size={24} />}
                title="7. Odpowiedzialność"
              >
                <p>
                  Administrator dokłada starań, aby informacje publikowane na
                  stronie były aktualne i rzetelne, jednak nie gwarantuje, że
                  wszystkie opisane funkcjonalności zostaną wdrożone w dokładnie
                  takim zakresie lub terminie, jaki został przedstawiony na
                  stronie.
                </p>
                <p>
                  Administrator nie ponosi odpowiedzialności za czasową
                  niedostępność strony wynikającą z prac technicznych, awarii,
                  działań dostawców usług technologicznych lub zdarzeń
                  niezależnych od administratora.
                </p>
              </PolicyCard>

              <PolicyCard
                id="dane"
                icon={<ShieldCheck size={24} />}
                title="8. Dane osobowe"
              >
                <p>
                  Zasady przetwarzania danych osobowych użytkowników, w tym
                  danych przesyłanych przez formularz listy zainteresowanych,
                  opisuje Polityka prywatności.
                </p>

                <Link
                  href="/polityka-prywatnosci"
                  className="mt-5 inline-flex h-[50px] w-fit items-center justify-center rounded-2xl bg-[#F4EEFF] px-6 text-[15px] font-black text-[#7C3AED] transition hover:bg-[#E9D8FF]"
                >
                  Przejdź do polityki prywatności
                </Link>
              </PolicyCard>

              <PolicyCard
                id="kontakt"
                icon={<Mail size={24} />}
                title="9. Kontakt"
              >
                <p>
                  W sprawach związanych z działaniem strony, regulaminem lub
                  projektem StageUp można skontaktować się z administratorem pod
                  adresem:
                </p>

                <a
                  href="mailto:biuro@tripledots.pl"
                  className="mt-6 inline-flex h-[54px] w-fit items-center justify-center rounded-2xl bg-[#7C3AED] px-7 text-[15px] font-black text-white shadow-[0_16px_35px_rgba(124,58,237,0.24)] transition hover:bg-[#6D28D9]"
                >
                  Napisz: biuro@tripledots.pl
                </a>
              </PolicyCard>

              <PolicyCard
                id="koncowe"
                icon={<FileText size={24} />}
                title="10. Postanowienia końcowe"
              >
                <p>
                  Administrator zastrzega sobie prawo do zmiany regulaminu,
                  szczególnie w przypadku rozwoju projektu StageUp, dodania
                  nowych funkcji, uruchomienia wersji testowej platformy lub
                  zmiany przepisów prawa.
                </p>
                <p>
                  Aktualna wersja regulaminu będzie publikowana na tej stronie.
                  Korzystanie ze strony po opublikowaniu zmian oznacza
                  korzystanie z niej na zasadach wynikających z aktualnej wersji
                  regulaminu.
                </p>
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