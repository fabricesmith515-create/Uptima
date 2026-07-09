import { technologies } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";

function TechRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className={`flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0 ${
        ariaHidden ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center"
      }`}
    >
      {technologies.items.map((tech) => {
        const Icon = tech.icon;
        return (
          <li
            key={tech.name}
            className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap"
          >
            <Icon aria-hidden="true" className="w-4 h-4 text-ink" />
            <span className="text-[13px] sm:text-[14px] font-medium text-ink">{tech.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="bg-surface pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="6" label={technologies.badge} tone="gray" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink mb-10 sm:mb-14">
            {technologies.title}
          </h2>
        </Reveal>

        {/* Bandeau défilant — statique et en retour à la ligne si prefers-reduced-motion */}
        <Reveal delay={0.2}>
          <div className="relative motion-reduce:px-5 motion-reduce:sm:px-8 motion-reduce:lg:px-12">
            <div className="flex w-max animate-marquee motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:gap-3 motion-reduce:justify-center">
              <TechRow />
              <TechRow ariaHidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
