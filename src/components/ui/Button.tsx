import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold transition";

  const variants = {
    primary:
      "bg-purple-600 text-white shadow-xl shadow-purple-600/20 hover:bg-purple-700",
    secondary:
      "border border-neutral-200 bg-white text-neutral-900 hover:border-purple-200 hover:text-purple-700",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRight size={18} />
    </button>
  );
}