import { methode } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Methode() {
  return (
    <section id="methode" className="bg-surface pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="4" label={methode.badge} tone="gray" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink mb-10 sm:mb-14 lg:mb-16 max-w-4xl">
            {methode.title}
          </h2>
        </Reveal>

        {/* Timeline : horizontale sur desktop, verticale sur mobile */}
        <ol className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {methode.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={0.15 + i * 0.1}>
                <div className="relative flex lg:flex-col gap-5 lg:gap-6">
                  {/* Connecteur vertical (mobile) */}
                  {i < methode.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="lg:hidden absolute left-[13px] top-9 bottom-[-32px] w-px bg-gray-300"
                    />
                  )}
                  {/* Connecteur horizontal (desktop) */}
                  {i < methode.steps.length - 1 && (
                    <span aria-hidden="true" className="hidden lg:block absolute top-3.5 left-9 right-0 h-px bg-gray-300" />
                  )}
                  <span className="w-7 h-7 rounded-full bg-ink text-white text-[12px] font-semibold flex items-center justify-center relative z-10 shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
