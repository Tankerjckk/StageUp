"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useWaitlist } from "@/context/WaitlistContext";
import { supabase } from "@/lib/supabase";
import { SelectField } from "@/components/ui/SelectField";

export function WaitingList() {
  const { email, setEmail } = useWaitlist();

  const [form, setForm] = useState({
    name: "",
    city: "",
    userType: "",
    accepted: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!form.name || !email || !form.city || !form.userType) {
      setStatus("error");
      setMessage("Uzupełnij wszystkie pola formularza.");
      return;
    }

    if (!form.accepted) {
      setStatus("error");
      setMessage("Musisz zaakceptować regulamin i politykę prywatności.");
      return;
    }

    setStatus("loading");

    const { error } = await supabase.from("waitlist").insert({
      email: email.trim().toLowerCase(),
      full_name: form.name.trim(),
      user_type: form.userType,
      source: "landing_waitlist",
    });

    if (error) {
      setStatus("error");

      if (error.code === "23505") {
        setMessage("Ten adres e-mail jest już zapisany na listę.");
      } else {
        setMessage("Nie udało się zapisać na listę. Spróbuj ponownie.");
      }

      return;
    }

    setStatus("success");
    setMessage("Jesteś zapisany na listę oczekujących StageUp!");
    setForm({
      name: "",
      city: "",
      userType: "",
      accepted: false,
    });
    setEmail("");
  }

  return (
    <section id="waiting-list" className="py-[56px] sm:py-[72px] lg:py-24">
      <Container>
        <div className="grid rounded-[28px] border border-neutral-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:rounded-[2.5rem]">
          <div className="relative min-h-[260px] overflow-hidden rounded-t-[28px] bg-purple-50 sm:min-h-[340px] lg:min-h-[420px] lg:rounded-l-[2.5rem] lg:rounded-tr-none">
            <Image
              src="/images/landing-crowd.png"
              alt="Publiczność podczas wydarzenia muzycznego"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-purple-100/20 to-purple-700/30" />
          </div>

          <div className="relative p-6 sm:p-8 md:p-12">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-purple-600 sm:text-sm sm:tracking-[0.25em]">
              Lista oczekujących
            </p>

            <h2 className="mt-4 text-[31px] font-black leading-[1.08] tracking-[-0.045em] text-neutral-950 sm:text-4xl md:text-5xl">
              Dołącz do pierwszych użytkowników StageUp
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-neutral-600 sm:text-base sm:leading-7">
              Zostaw kontakt, a damy Ci znać, gdy ruszy pierwsza wersja
              platformy.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 md:mt-9 md:grid-cols-2"
            >
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-[56px] rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                placeholder="Imię"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[56px] rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                placeholder="E-mail"
              />

              <input
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="h-[56px] rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                placeholder="Miasto"
              />

<SelectField
  placeholder="Kim jesteś?"
  value={form.userType}
  onChange={(value) => setForm({ ...form, userType: value })}
  options={[
    { label: "Artysta", value: "artist" },
    { label: "Zespół", value: "band" },
    { label: "Organizator", value: "organizer" },
  ]}
/>

              <div className="md:col-span-2">
                <LegalCheckbox
                  checked={form.accepted}
                  onChange={(checked) =>
                    setForm({ ...form, accepted: checked })
                  }
                />
              </div>

              {message && (
                <div className="md:col-span-2">
                  <FormMessage status={status} message={message} />
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-xl bg-purple-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
              >
                {status === "loading" ? "Zapisywanie..." : "Dołącz do listy"}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
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
  status: "idle" | "loading" | "success" | "error";
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