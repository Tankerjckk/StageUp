import { Container } from "@/components/ui/Container";

export const faqItems = [
  {
    question: "Czym jest StageUp?",
    answer:
      "StageUp to platforma bookingowa dla sceny muzycznej, która łączy artystów, zespoły i organizatorów wydarzeń muzycznych w jednym miejscu.",
  },
  {
    question: "Dla kogo powstaje StageUp?",
    answer:
      "StageUp powstaje dla artystów, zespołów, DJ-ów, wokalistów, organizatorów koncertów, klubów, festiwali, domów kultury i eventów muzycznych.",
  },
  {
    question: "Czy StageUp jest już dostępny?",
    answer:
      "StageUp jest obecnie w przygotowaniu. Możesz dołączyć do listy oczekujących, aby otrzymać informację o starcie pierwszej wersji platformy.",
  },
  {
    question: "Czy artyści będą mogli szukać koncertów?",
    answer:
      "Tak. Celem StageUp jest ułatwienie artystom i zespołom znajdowania koncertów, supportów, festiwali oraz innych możliwości występów.",
  },
  {
    question: "Czy organizatorzy będą mogli dodawać wydarzenia?",
    answer:
      "Tak. Organizatorzy będą mogli publikować wydarzenia, zbierać zgłoszenia od artystów i wybierać wykonawców pasujących do charakteru eventu.",
  },
  {
    question: "Czy zapis na listę oczekujących jest darmowy?",
    answer:
      "Tak. Zapis na listę oczekujących StageUp jest darmowy i pozwala otrzymać informację o starcie platformy oraz pierwszym dostępie do projektu.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#FAFAFA] py-[56px] sm:py-[72px] lg:py-[92px]"
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6D28D9] sm:text-[13px] sm:tracking-[0.22em]">
            FAQ
          </p>

          <h2 className="mt-[12px] text-[32px] font-black leading-[1.08] tracking-[-0.045em] text-[#090909] sm:text-[42px]">
            Najczęstsze pytania o StageUp
          </h2>

          <p className="mx-auto mt-[16px] max-w-[620px] text-[15px] font-medium leading-[1.75] text-[#6F6B78] sm:text-[16px]">
            Sprawdź, jak StageUp ma pomagać artystom, zespołom i organizatorom
            wydarzeń muzycznych.
          </p>
        </div>

        <div className="mx-auto mt-[34px] grid max-w-[900px] gap-[14px] sm:mt-[42px]">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-[22px] border border-[#E8E4EF] bg-white p-[22px] shadow-[0_14px_45px_rgba(20,20,40,0.025)] open:shadow-[0_18px_60px_rgba(20,20,40,0.055)]"
            >
              <summary className="cursor-pointer list-none text-[17px] font-black leading-[1.35] tracking-[-0.02em] text-[#111111] marker:hidden sm:text-[18px]">
                <span className="flex items-center justify-between gap-5">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1EAFE] text-[#6D28D9] transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-[14px] max-w-[760px] text-[15px] font-medium leading-[1.75] text-[#6B6674]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}