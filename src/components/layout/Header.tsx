"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Dla artystów", href: "#features" },
  { label: "Dla organizatorów", href: "#features" },
  { label: "Jak to działa", href: "#how-it-works" },
  { label: "O projekcie", href: "#waiting-list" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-[100] bg-[#FAFAFA]/85 py-4 backdrop-blur-xl md:py-7">
      <Container className="flex items-center justify-between">
        <a href="#" onClick={closeMenu} aria-label="StageUp - strona główna">
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-neutral-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-purple-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

<div className="hidden lg:block">
  <a href="/projekty">
    <Button>Zobacz platformę</Button>
  </a>
</div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Otwórz menu"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-sm transition hover:border-purple-200 hover:text-purple-600 lg:hidden"
        >
          <Menu size={21} />
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-[200] lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Zamknij menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-dvh w-[88vw] max-w-[390px] flex-col bg-white shadow-[-30px_0_80px_rgba(20,20,40,0.18)] transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
            <Logo />

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Zamknij menu"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-900 transition hover:border-purple-200 hover:text-purple-600"
            >
              <X size={21} />
            </button>
          </div>

          <nav className="flex-1 px-5 py-5">
            <div className="grid gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-3xl px-5 py-4 text-[17px] font-black text-neutral-950 transition hover:bg-purple-50 hover:text-purple-700"
                >
                  <span>
                    <span className="mr-3 text-[13px] font-black text-purple-500">
                      0{index + 1}
                    </span>
                    {item.label}
                  </span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </nav>

          <div className="border-t border-neutral-100 p-5">
            <a
              href="#waiting-list"
              onClick={closeMenu}
              className="flex h-[58px] items-center justify-center gap-3 rounded-2xl bg-purple-600 text-[15px] font-black text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-700"
            >
              Dołącz do listy
              <ArrowRight size={18} />
            </a>

            <p className="mt-4 text-center text-[13px] font-medium leading-6 text-neutral-500">
              Platforma dla artystów, zespołów i organizatorów wydarzeń.
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}