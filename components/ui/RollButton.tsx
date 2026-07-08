import { ArrowRight } from "lucide-react";

type Variant = "accent" | "dark" | "white";
type Size = "sm" | "md";

const variants: Record<Variant, { btn: string; circle: string; arrow: string }> = {
  accent: {
    btn: "bg-accent hover:bg-accent-hover text-white",
    circle: "bg-white",
    arrow: "text-accent",
  },
  dark: {
    btn: "bg-ink text-white",
    circle: "bg-white",
    arrow: "text-ink",
  },
  white: {
    btn: "bg-white text-ink shadow-badge hover:shadow-badge-hover",
    circle: "bg-ink",
    arrow: "text-white",
  },
};

/** Texte dupliqué qui « roule » verticalement au survol (signature de la référence). */
function RollText({ children }: { children: string }) {
  return (
    <span className="flex flex-col overflow-hidden h-[20px]">
      <span
        aria-hidden="true"
        className="flex flex-col transition-transform duration-500 ease-brand group-hover:-translate-y-1/2 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      >
        <span className="h-[20px] leading-[20px] whitespace-nowrap">{children}</span>
        <span className="h-[20px] leading-[20px] whitespace-nowrap">{children}</span>
      </span>
      <span className="sr-only">{children}</span>
    </span>
  );
}

export default function RollButton({
  href,
  label,
  variant = "accent",
  size = "md",
  external = false,
  className = "",
}: {
  href: string;
  label: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
}) {
  const v = variants[variant];
  const sizes =
    size === "sm"
      ? { pad: "pl-5 pr-2 py-2 text-[13px]", circle: "w-6 h-6", arrow: 12 }
      : { pad: "pl-5 sm:pl-6 pr-2 py-2 text-[13px] sm:text-[14px]", circle: "w-7 h-7 sm:w-8 sm:h-8", arrow: 14 };

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-2 rounded-full font-medium transition-colors duration-300 ${v.btn} ${sizes.pad} ${className}`}
    >
      <RollText>{label}</RollText>
      <span
        className={`${sizes.circle} ${v.circle} rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ease-brand group-hover:-rotate-45 motion-reduce:transition-none motion-reduce:group-hover:rotate-0`}
      >
        <ArrowRight size={sizes.arrow} className={v.arrow} aria-hidden="true" />
      </span>
    </a>
  );
}
