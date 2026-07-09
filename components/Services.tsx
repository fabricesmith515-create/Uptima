import { Sparkles } from "lucide-react";
import { services } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Services() {
  return (
    <section id="services" className="bg-surface pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="2" label={services.badge} tone="gray" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-display-sm sm:text-display font-medium text-ink mb-10 sm:mb-14 lg:mb-16">
            {services.title}
          </h2>
        </Reveal>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.poles.map((pole, i) => {
            const Icon = pole.icon;
            return (
              <Reveal key={pole.title} delay={0.15 + i * 0.1}>
                <article className="h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
                  <span className="w-10 h-10 bg-ink rounded-full flex items-center justify-center">
                    <Icon size={18} className="text-white" aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-ink">{pole.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {pole.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed"
                      >
                        <span aria-hidden="true" className="mt-[7px] w-1 h-1 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bande discrète — réparation d'apps générées par IA */}
        <Reveal delay={0.3} className="px-5 sm:px-8 lg:px-12 mt-6 sm:mt-7">
          <div className="flex items-center gap-3 bg-accent-soft/10 border border-accent-soft/30 rounded-2xl sm:rounded-full px-4 sm:px-5 py-3">
            <Sparkles size={18} className="text-accent shrink-0" aria-hidden="true" />
            <p className="text-[13px] sm:text-[14px] font-medium text-ink">{services.banner}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
