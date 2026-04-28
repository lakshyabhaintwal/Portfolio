import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", download }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-semibold transition duration-300 hover:scale-[1.03]",
        variant === "primary"
          ? "bg-gradient-to-r from-white via-[#d8ddff] to-[#8b5cf6] text-ink shadow-[0_14px_42px_rgba(139,92,246,0.18)] hover:shadow-[0_18px_55px_rgba(139,92,246,0.28)]"
          : "border border-white/20 bg-transparent text-white hover:border-white/45 hover:bg-white/[0.04] hover:shadow-[0_14px_38px_rgba(255,255,255,0.08)]"
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </Link>
  );
}
