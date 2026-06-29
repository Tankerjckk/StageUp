"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SelectField } from "@/components/ui/SelectField";
import { useWaitlist } from "@/context/WaitlistContext";

export function WaitingList() {
  const { email, setEmail } = useWaitlist();

  return (
    <section
      id="waiting-list"
      className="py-[56px] sm:py-[72px] lg:py-24"
    >
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

            <form className="mt-8 grid gap-4 md:mt-9 md:grid-cols-2">
              <input
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
                className="h-[56px] rounded-xl border border-neutral-200 px-4 py-4 text-[15px] outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                placeholder="Miasto"
              />

              <SelectField
                placeholder="Kim jesteś?"
                options={[
                  { label: "Artysta", value: "artist" },
                  { label: "Zespół", value: "band" },
                  { label: "Organizator", value: "organizer" },
                ]}
              />

              <button
                type="submit"
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-xl bg-purple-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-700 md:col-span-2"
              >
                Dołącz do listy
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}