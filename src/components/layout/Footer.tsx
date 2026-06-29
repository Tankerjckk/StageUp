import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const platformLinks = [
  { label: "Dla artystów", href: "/#features" },
  { label: "Dla organizatorów", href: "/#features" },
  { label: "Jak to działa", href: "/#how-it-works" },
  { label: "Poznaj platformę", href: "/projekty" },
];

const helpLinks = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Regulamin", href: "/regulamin" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#ECE8F4] bg-[#FAFAFA] py-[72px]">
      <Container>
        <div className="grid gap-y-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/stageup-logo-black.png"
              alt="StageUp"
              width={190}
              height={52}
            />

            <p className="mt-[22px] max-w-[280px] text-[15px] leading-[1.8] text-[#6C6875]">
              Łączymy artystów, zespoły i organizatorów wydarzeń muzycznych.
            </p>

            <SocialLinks />
          </div>

          <FooterColumn title="Platforma" links={platformLinks} />
          <FooterColumn title="Pomoc" links={helpLinks} />

          <div>
            <h3 className="mb-[22px] text-[18px] font-black text-[#111111]">
              Kontakt
            </h3>

            <a
              href="mailto:biuro@tripledots.pl"
              className="text-[15px] text-[#4E4A57] transition hover:text-[#7C3AED]"
            >
              biuro@tripledots.pl
            </a>

            <SocialLinks />
          </div>
        </div>

        <div className="mt-[60px] border-t border-[#ECE8F4] pt-[28px] text-center text-[14px] text-[#7B7785]">
          © {new Date().getFullYear()} StageUp. Wszelkie prawa zastrzeżone.
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-[22px] text-[18px] font-black text-[#111111]">
        {title}
      </h3>

      {links.map((link) => (
        <FooterLink key={link.label} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className="mb-[14px] block text-[15px] text-[#6C6875] transition hover:text-[#7C3AED]"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="mb-[14px] block text-[15px] text-[#6C6875] transition hover:text-[#7C3AED]"
    >
      {children}
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="mt-[28px] flex gap-[12px]">
      <Social label="Instagram" image="/images/instagram-logo-thin.webp" />
      <Social label="Facebook" image="/images/facebook-fill.webp" />
      <Social label="TikTok" image="/images/logo-tiktok.webp" />
      <Social label="YouTube" image="/images/youtube.webp" />
    </div>
  );
}

function Social({ image, label }: { image: string; label: string }) {
  return (
    <button
      aria-label={label}
      className="group flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E7E2EF] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED] hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)]"
    >
      <Image
        src={image}
        alt={label}
        width={18}
        height={18}
        className="object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </button>
  );
}