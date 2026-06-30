"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useWaitlist } from "@/context/WaitlistContext";
import { Container } from "@/components/ui/Container";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const { email, setEmail } = useWaitlist();

function handleHeroSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  trackEvent("hero_cta_click", {
    cta_name: "hero_waitlist",
    has_email: Boolean(email.trim()),
  });

  document.getElementById("waiting-list")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-[38px] md:pt-[58px] lg:pt-[78px]">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-[660px] w-[52vw] overflow-hidden lg:block"
        style={{
          clipPath:
            "polygon(22% 0%,100% 0%,100% 100%,22% 100%,0% 50%)",
          borderTopLeftRadius: "120px",
          borderBottomLeftRadius: "120px",
        }}
      >
        <Image
          src="/images/landing-hero.png"
          alt="Artysta występujący na scenie przed publicznością"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#6D28D9]/[0.04]" />
      </div>

      <Container className="grid min-h-auto items-start gap-[42px] lg:min-h-[610px] lg:grid-cols-[535px_1fr]">
        <div className="relative z-10 pt-0 lg:pt-[22px]">
          <div className="mb-[22px] inline-flex h-[32px] items-center gap-[10px] rounded-[11px] bg-[#F1EAFE] px-[14px] text-[12px] font-medium text-[#7A7484] shadow-sm sm:text-[13px] lg:mb-[30px]">
            <span className="h-[8px] w-[8px] rounded-full bg-[#6D28D9]" />
            Platforma bookingowa dla sceny muzycznej
          </div>

          <h1 className="max-w-[720px] text-[42px] font-black leading-[1.04] tracking-[-0.055em] text-[#090909] sm:text-[54px] md:text-[66px] lg:max-w-none lg:text-[64px] lg:leading-[1.08] lg:tracking-[-0.045em]">
            Znajdź swoją
            <br />
            <span className="text-[#6D28D9]">następną</span> scenę
          </h1>

          <p className="mt-[22px] max-w-[560px] text-[16px] font-medium leading-[1.75] text-[#6F6B78] sm:text-[17px] lg:mt-[28px] lg:max-w-[455px]">
            StageUp to platforma bookingowa, która łączy artystów,
            zespoły i organizatorów wydarzeń muzycznych.
            <br className="hidden sm:block" />
            Znajduj koncerty, zgłoszenia i nowe współprace w jednym miejscu.
          </p>

          <form
            onSubmit={handleHeroSubmit}
            className="mt-[30px] flex w-full max-w-[540px] flex-col gap-[12px] sm:flex-row sm:gap-[16px] lg:mt-[34px] lg:max-w-[486px]"
          >
            <input
              type="email"
              placeholder="Twój adres e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-[54px] w-full rounded-[10px] border border-[#DDDDE4] bg-white px-[18px] text-[14px] font-medium text-neutral-800 outline-none transition placeholder:text-[#AAA6B3] focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-100 sm:w-[270px]"
            />

            <button
              type="submit"
              className="inline-flex h-[54px] w-full items-center justify-center gap-[14px] rounded-[10px] bg-[#6D28D9] px-[22px] text-[14px] font-bold text-white shadow-[0_14px_30px_rgba(109,40,217,0.25)] transition hover:bg-[#5B21B6] sm:min-w-[176px] sm:w-auto"
            >
              Dołącz do listy
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-[24px] flex flex-col gap-[13px] text-[13px] font-medium text-[#5F5A68] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-[28px] sm:gap-y-4 lg:mt-[28px] lg:gap-x-[34px]">
            <HeroPoint text="Zero spamu" />
            <HeroPoint text="Pierwsi dowiesz się o starcie" />
            <HeroPoint text="Darmowy dostęp" />
          </div>
        </div>

        <div className="relative min-h-[330px] sm:min-h-[420px] lg:min-h-[610px]">
          <Dots />

          <div className="relative mt-[6px] h-[330px] overflow-hidden rounded-[34px] border border-white bg-purple-50 shadow-[0_24px_80px_rgba(20,20,40,0.12)] sm:h-[420px] lg:hidden">
            <Image
              src="/images/landing-hero.png"
              alt="Artysta występujący na scenie przed publicznością"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#6D28D9]/[0.05]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#6D28D9] text-[#6D28D9]">
        <Check size={13} strokeWidth={3} />
      </span>
      <span>{text}</span>
    </div>
  );
}

function Dots() {
  return (
    <div className="absolute -left-[18px] -top-[12px] z-20 grid grid-cols-6 gap-x-[14px] gap-y-[13px] opacity-35 sm:gap-x-[18px] sm:gap-y-[16px] lg:left-[-20px] lg:top-[-8px] lg:opacity-45">
      {Array.from({ length: 54 }).map((_, index) => (
        <span
          key={index}
          className="h-[3px] w-[3px] rounded-full bg-[#8B5CF6]"
        />
      ))}
    </div>
  );
}