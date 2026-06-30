"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactPageForms() {
  return (
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
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    accepted: false,
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      setMessage("Uzupełnij wszystkie pola.");
      return;
    }

    if (!form.accepted) {
      setStatus("error");
      setMessage("Musisz zaakceptować regulamin i politykę prywatności.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Nie udało się wysłać wiadomości.");
        return;
      }

      setStatus("success");
      trackEvent("contact_submit", {
  form_name: "contact",
});
      setMessage(data.message || "Wiadomość została wysłana. Dzięki!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        accepted: false,
      });
    } catch {
      setStatus("error");
      setMessage("Wystąpił błąd połączenia. Spróbuj ponownie.");
    }
  }

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

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            placeholder="Imię"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
          />

          <Input
            placeholder="E-mail"
            type="email"
            value={form.email}
            onChange={(value) => setForm({ ...form, email: value })}
          />
        </div>

        <Input
          placeholder="Temat wiadomości"
          value={form.subject}
          onChange={(value) => setForm({ ...form, subject: value })}
        />

        <textarea
          placeholder="Twoja wiadomość"
          rows={7}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="resize-none rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
        />

        <LegalCheckbox
          checked={form.accepted}
          onChange={(checked) => setForm({ ...form, accepted: checked })}
        />

        {message && <FormMessage status={status} message={message} />}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex h-[56px] items-center justify-center gap-3 rounded-xl bg-purple-600 px-7 text-sm font-bold text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
          <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

function InvestorForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
    accepted: false,
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!form.fullName || !form.email || !form.message) {
      setStatus("error");
      setMessage("Uzupełnij imię i nazwisko, e-mail oraz wiadomość.");
      return;
    }

    if (!form.accepted) {
      setStatus("error");
      setMessage("Musisz zaakceptować regulamin i politykę prywatności.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/investor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Nie udało się wysłać zgłoszenia.");
        return;
      }

      setStatus("success");
      trackEvent("investor_submit", {
  form_name: "investor",
});
      
      setMessage(data.message || "Zgłoszenie inwestorskie zostało wysłane.");

      setForm({
        fullName: "",
        email: "",
        company: "",
        message: "",
        accepted: false,
      });
    } catch {
      setStatus("error");
      setMessage("Wystąpił błąd połączenia. Spróbuj ponownie.");
    }
  }

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

      <form onSubmit={handleSubmit} className="grid gap-4">
        <Input
          placeholder="Imię i nazwisko"
          value={form.fullName}
          onChange={(value) => setForm({ ...form, fullName: value })}
        />

        <Input
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
        />

        <Input
          placeholder="Firma / organizacja"
          value={form.company}
          onChange={(value) => setForm({ ...form, company: value })}
        />

        <textarea
          placeholder="Napisz krótko, w jakim zakresie chcesz porozmawiać"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="resize-none rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
        />

        <LegalCheckbox
          checked={form.accepted}
          onChange={(checked) => setForm({ ...form, accepted: checked })}
        />

        {message && <FormMessage status={status} message={message} />}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex h-[56px] items-center justify-center gap-3 rounded-xl bg-[#111111] px-7 text-sm font-bold text-white shadow-xl shadow-black/10 transition hover:bg-[#2a2a2a] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Wysyłanie..." : "Porozmawiajmy o StageUp"}
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
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-[56px] rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
    />
  );
}

function LegalCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#ECE8F4] bg-[#FAFAFA] p-4 text-[13px] font-medium leading-6 text-[#6F6B78]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-[4px] h-4 w-4 accent-[#7C3AED]"
      />
      <span>
        Akceptuję{" "}
        <a href="/regulamin" className="font-black text-[#7C3AED]">
          regulamin
        </a>{" "}
        oraz{" "}
        <a href="/polityka-prywatnosci" className="font-black text-[#7C3AED]">
          politykę prywatności
        </a>
        .
      </span>
    </label>
  );
}

function FormMessage({
  status,
  message,
}: {
  status: FormStatus;
  message: string;
}) {
  return (
    <div
      className={`rounded-2xl px-4 py-3 text-[14px] font-bold ${
        status === "success"
          ? "bg-green-50 text-green-700"
          : "bg-red-50 text-red-700"
      }`}
    >
      {message}
    </div>
  );
}