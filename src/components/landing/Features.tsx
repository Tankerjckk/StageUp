import { ArrowRight, CalendarDays, CheckCircle2, Music2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    icon: Music2,
    title: "Dla artystów i zespołów",
    text: "StageUp pomaga muzykom, wokalistom, DJ-om i zespołom znajdować koncerty, supporty, festiwale oraz nowe możliwości występów.",
    items: [
      "Znajduj koncerty i wydarzenia dopasowane do Twojego profilu",
      "Aplikuj na zgłoszenia od organizatorów",
      "Buduj profil artysty, portfolio i historię występów",
      "Rozwijaj markę muzyczną i zdobywaj doświadczenie sceniczne",
    ],
  },
  {
    icon: CalendarDays,
    title: "Dla organizatorów wydarzeń",
    text: "Organizatorzy koncertów, klubów, festiwali i eventów mogą szybciej docierać do artystów oraz zarządzać zgłoszeniami w jednym miejscu.",
    items: [
      "Dodawaj wydarzenia muzyczne i zaproszenia do współpracy",
      "Otrzymuj zgłoszenia od artystów i zespołów",
      "Znajduj wykonawców pasujących do charakteru eventu",
      "Zarządzaj komunikacją i wyborem artystów wygodniej",
    ],
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-[#FAFAFA] pb-[56px] pt-[64px] sm:pb-[72px] sm:pt-[78px] lg:pb-[82px] lg:pt-[74px]"
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6D28D9] sm:text-[13px] sm:tracking-[0.22em]">
            Platforma dla muzyków i organizatorów
          </p>

          <h2 className="mx-auto mt-[12px] max-w-[680px] text-[31px] font-black leading-[1.08] tracking-[-0.045em] text-[#090909] sm:text-[38px] md:text-[40px] md:leading-tight">
            Booking artystów i wydarzenia muzyczne w jednym miejscu
          </h2>

          <p className="mx-auto mt-[16px] max-w-[620px] text-[15px] font-medium leading-[1.75] text-[#6F6B78] sm:text-[16px]">
            StageUp powstaje jako platforma ułatwiająca współpracę między sceną
            muzyczną a organizatorami koncertów, festiwali i eventów.
          </p>

          <div className="mx-auto mt-[18px] h-[4px] w-[48px] rounded-full bg-[#6D28D9]" />
        </div>

        <div className="mt-[30px] grid gap-[20px] sm:mt-[36px] lg:mt-[34px] lg:grid-cols-2 lg:gap-[32px]">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-[24px] border border-[#E8E4EF] bg-white px-[22px] py-[28px] shadow-[0_18px_55px_rgba(20,20,40,0.04)] sm:px-[32px] sm:py-[36px] lg:min-h-[350px] lg:rounded-[18px] lg:px-[58px] lg:py-[42px] lg:shadow-[0_14px_45px_rgba(20,20,40,0.025)]"
              >
                <div className="flex flex-col gap-[22px] sm:flex-row sm:items-start sm:gap-[24px] lg:gap-[28px]">
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#F1EAFE] text-[#6D28D9] lg:h-[58px] lg:w-[58px] lg:rounded-[14px]">
                    <Icon size={28} strokeWidth={2.4} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[25px] font-black leading-tight tracking-[-0.04em] text-[#090909] sm:text-[26px]">
                      {card.title}
                    </h3>

                    <p className="mt-[14px] max-w-[520px] text-[15px] font-medium leading-[1.72] text-[#686372] lg:mt-[15px] lg:max-w-[470px] lg:leading-[1.65]">
                      {card.text}
                    </p>

                    <div className="mt-[22px] space-y-[12px] lg:mt-[24px] lg:space-y-[13px]">
                      {card.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-[11px] text-[14px] font-semibold leading-[1.45] text-[#5A5563] sm:items-center"
                        >
                          <CheckCircle2
                            size={17}
                            strokeWidth={3}
                            className="mt-[1px] shrink-0 fill-[#6D28D9] text-white sm:mt-0"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#waiting-list"
                      className="mt-[26px] inline-flex items-center gap-[9px] text-[15px] font-black text-[#7C3AED] transition hover:text-[#5B21B6] lg:mt-[28px]"
                    >
                      Dołącz do listy oczekujących
                      <ArrowRight size={17} strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}