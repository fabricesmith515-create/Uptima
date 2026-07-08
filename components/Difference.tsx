import { difference } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Difference() {
  return (
    <section id="pourquoi" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="3" label={difference.badge} tone="light" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink mb-10 sm:mb-14 lg:mb-16">
            {difference.title}
          </h2>
        </Reveal>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {difference.arguments.map((arg, i) => {
            const Icon = arg.icon;
            return (
              <Reveal key={arg.title} delay={0.15 + i * 0.08}>
                <div className="h-full bg-surface rounded-2xl p-6 sm:p-7 flex flex-col gap-5">
                  <span className="w-10 h-10 bg-ink rounded-full flex items-center justify-center">
                    <Icon size={18} className="text-white" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-ink">{arg.title}</h3>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">{arg.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
