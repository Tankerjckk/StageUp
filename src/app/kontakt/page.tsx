import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

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

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <ContactForm />

            <div className="grid gap-8">
              <InvestorForm />
              <CoffeeCard />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ContactForm() {
  return (
    <section className="rounded-[30px] border border-[#ECE8F4] bg-white p-6 shadow-[0_18px_55px_rgba(20,20,40,0.035)] md:p-8">
      <div className="mb-7 flex items-center gap-4">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#7C3AED]">
          <MessageCircle size={25} />
        </div>

        <div>
          <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#7C3AED]">
            Formularz kontaktowy
          </p>
          <h2 className="mt-1 text-[28px] font-black tracking-[-0.04em]">
            Napisz wiadomość
          </h2>
        </div>
      </div>

      <form className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Imię" />
          <Input placeholder="E-mail" type="email" />
        </div>

        <Input placeholder="Temat wiadomości" />

        <textarea
          placeholder="Twoja wiadomość"
          rows={7}
          className="resize-none rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
        />

        <button
          type="button"
          className="mt-2 inline-flex h-[56px] items-center justify-center gap-3 rounded-xl bg-purple-600 px-7 text-sm font-bold text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-700"
        >
          Wyślij wiadomość
          <ArrowRight size={18} />
        </button>
      </form>

    </section>
  );
}

function InvestorForm() {
  return (
    <section className="rounded-[30px] border border-[#ECE8F4] bg-white p-6 shadow-[0_18px_55px_rgba(20,20,40,0.035)] md:p-8">
      <div className="mb-7 flex items-center gap-4">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#7C3AED]">
          <BriefcaseBusiness size={25} />
        </div>

        <div>
          <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#7C3AED]">
            Dla inwestorów
          </p>
          <h2 className="mt-1 text-[28px] font-black tracking-[-0.04em]">
            Współpraca i rozwój
          </h2>
        </div>
      </div>

      <form className="grid gap-4">
        <Input placeholder="Imię i nazwisko" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Firma / organizacja" />
        <textarea
          placeholder="Napisz krótko, w jakim zakresie chcesz porozmawiać"
          rows={5}
          className="resize-none rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
        />

        <button
          type="button"
          className="mt-2 inline-flex h-[56px] items-center justify-center gap-3 rounded-xl bg-[#111111] px-7 text-sm font-bold text-white shadow-xl shadow-black/10 transition hover:bg-[#2a2a2a]"
        >
          Porozmawiajmy o StageUp
          <Rocket size={18} />
        </button>
      </form>
    </section>
  );
}

function CoffeeCard() {
  return (
<section className="rounded-[30px] border border-[#ECE8F4] bg-[#F4EEFF] p-6 shadow-[0_18px_55px_rgba(20,20,40,0.035)] md:p-8">
  <div className="flex items-center gap-4">
    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white text-[#7C3AED]">
      <Mail size={25} />
    </div>

    <div>
      <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#7C3AED]">
        Wsparcie projektu
      </p>

      <h2 className="mt-1 text-[28px] font-black tracking-[-0.04em]">
        Postaw kawę
      </h2>
    </div>
  </div>

  <p className="mt-5 max-w-[620px] text-[15px] font-medium leading-[1.8] text-[#5F5A68]">
    Jeśli podoba Ci się kierunek rozwoju StageUp i chcesz wesprzeć projekt,
    możesz postawić kawę. Każde wsparcie pomaga rozwijać platformę i dodawać
    nowe funkcje.
  </p>

<a
  href="https://buycoffee.to/stageup"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
>
  <img
    src="https://buycoffee.to/static/img/share/share-button-primary.png"
    alt="Postaw kawę dla StageUp"
    className="h-auto w-[180px] sm:w-[210px] md:w-[230px]"
  />
</a>
</section>
  );
}

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-[56px] rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
    />
  );
}