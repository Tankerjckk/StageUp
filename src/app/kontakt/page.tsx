import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactPageForms } from "@/components/contact/ContactPageForms";

export const metadata: Metadata = {
  title: "Kontakt | StageUp",
  description:
    "Skontaktuj się z StageUp, zgłoś zainteresowanie współpracą lub porozmawiaj o inwestycji.",
};

export default function ContactPage() {
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
              Kontakt
            </p>

            <h1 className="mt-4 text-[42px] font-black leading-[1.05] tracking-[-0.055em] md:text-[64px]">
              Porozmawiajmy o StageUp
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] font-medium leading-[1.75] text-[#6F6B78]">
              Masz pytanie, chcesz dołączyć do projektu albo interesuje Cię
              współpraca inwestorska? Wybierz odpowiedni formularz poniżej.
            </p>
          </div>
        </Container>
      </section>

      <ContactPageForms />
    </main>
  );
}