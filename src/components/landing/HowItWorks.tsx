import { CalendarDays, HeartHandshake, Send, User } from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    icon: User,
    number: "01",
    title: "Załóż profil",
    text: "Utwórz profil artysty\nlub organizatora",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Dodaj lub znajdź wydarzenie",
    text: "Przeglądaj lub dodawaj\nwydarzenia muzyczne",
  },
  {
    icon: Send,
    number: "03",
    title: "Aplikuj lub zapraszaj",
    text: "Aplikuj na wydarzenia\nlub zaproś artystów",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Nawiąż współpracę",
    text: "Dogadaj szczegóły\ni twórz muzyczne historie",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#FAFAFA] py-[64px] sm:py-[78px] lg:py-[90px]"
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6D28D9] sm:text-[13px] sm:tracking-[0.22em]">
            Jak to działa?
          </p>

          <h2 className="mt-[12px] text-[32px] font-black leading-[1.08] tracking-[-0.045em] text-[#090909] sm:text-[42px]">
            Prosto. Szybko. Skutecznie.
          </h2>
        </div>

        <div className="relative mx-auto mt-[42px] max-w-[620px] lg:mt-[62px] lg:max-w-none">
          <div className="absolute left-[38px] top-[30px] h-[calc(100%-60px)] border-l border-dashed border-[#CFC8E5] lg:hidden" />

          <div className="grid gap-[22px] lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex gap-[18px] rounded-[26px] border border-[#E8E4EF] bg-white p-[20px] shadow-[0_18px_55px_rgba(20,20,40,0.035)] lg:block lg:rounded-none lg:border-0 lg:bg-transparent lg:px-5 lg:py-0 lg:shadow-none"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-[62%] top-[38px] hidden h-px w-[76%] border-t border-dashed border-[#CFC8E5] lg:block" />
                  )}

                  <div className="relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#F5F0FE] lg:mx-auto lg:h-[78px] lg:w-[78px]">
                    <Icon
                      size={30}
                      strokeWidth={2}
                      className="text-[#7C3AED]"
                    />
                  </div>

                  <div className="min-w-0 lg:text-left">
                    <div className="text-[30px] font-black leading-none tracking-[-0.04em] text-[#7C3AED] lg:mt-[26px] lg:text-[42px]">
                      {step.number}
                    </div>

                    <h3 className="mt-[7px] text-[22px] font-black leading-tight tracking-[-0.035em] text-[#111111] lg:mt-[10px] lg:text-[24px]">
                      {step.title}
                    </h3>

                    <p className="mt-[10px] whitespace-pre-line text-[15px] font-medium leading-[1.65] text-[#6B6674] lg:mt-[14px] lg:text-[16px] lg:font-normal lg:leading-[1.7]">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}