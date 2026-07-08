/** Rangée badge de section : cercle numéroté sombre + label pill (pattern de la référence). */
export default function SectionBadge({
  number,
  label,
  tone = "light",
}: {
  number: string;
  label: string;
  /** « light » sur fond blanc (border-gray-200), « gray » sur fond gris (border-gray-300) */
  tone?: "light" | "gray";
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-ink text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center"
      >
        {number}
      </span>
      <span
        className={`text-[12px] sm:text-[13px] font-medium text-ink border rounded-full px-3 sm:px-4 py-1 sm:py-1.5 ${
          tone === "gray" ? "border-gray-300" : "border-gray-200"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
