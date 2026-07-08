import { probleme } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Probleme() {
  return (
    <section id="probleme" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="1" label={probleme.badge} tone="light" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink mb-10 sm:mb-14 lg:mb-16 max-w-4xl">
            {probleme.title}
          </h2>
        </Reveal>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {probleme.cards.map((card, i) => (
            <Reveal key={card} delay={0.15 + i * 0.1}>
              <div className="h-full bg-surface rounded-2xl p-6 sm:p-7 flex flex-col gap-5">
                <span className="text-[10px] sm:text-[11px] bg-ink text-white px-2 py-0.5 rounded self-start font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] sm:text-[16px] leading-[1.6] font-medium text-ink">« {card} »</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
