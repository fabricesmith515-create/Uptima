import { temoignages } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";
import StarburstIcon from "@/components/ui/StarburstIcon";

export default function Temoignages() {
  return (
    <section id="temoignages" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="7" label={temoignages.badge} tone="light" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink mb-4">{temoignages.title}</h2>
        </Reveal>

        {/* Marqué clairement comme placeholder en attendant de vrais avis */}
        <Reveal delay={0.15}>
          <p className="px-5 sm:px-8 lg:px-12 text-[13px] text-gray-500 mb-10 sm:mb-14 lg:mb-16">{temoignages.note}</p>
        </Reveal>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {temoignages.items.map((item, i) => (
            <Reveal key={i} delay={0.15 + i * 0.1}>
              <figure className="h-full bg-surface rounded-2xl p-6 sm:p-7 flex flex-col gap-6">
                <StarburstIcon className="w-5 h-5 fill-current text-accent-soft" />
                <blockquote className="text-[15px] sm:text-[16px] leading-[1.6] font-medium text-ink flex-1">
                  « {item.quote} »
                </blockquote>
                <figcaption className="text-[13px] text-gray-600">— {item.author}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
