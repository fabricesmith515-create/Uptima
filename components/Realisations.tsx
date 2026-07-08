import { ArrowRight } from "lucide-react";
import { realisations } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";
import StarburstIcon from "@/components/ui/StarburstIcon";

export default function Realisations() {
  return (
    <section id="realisations" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="5" label={realisations.badge} tone="light" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-display-sm sm:text-display font-medium text-ink mb-4">
            {realisations.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="px-5 sm:px-8 lg:px-12 text-[13px] text-gray-500 mb-10 sm:mb-14 lg:mb-16">{realisations.note}</p>
        </Reveal>

        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {realisations.projets.map((projet, i) => (
            <Reveal key={projet.name} delay={0.15 + (i % 2) * 0.1}>
              <article>
                {/* Mockup abstrait dégradé (placeholder — pas de fausse capture d'écran) */}
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer ${projet.gradient}`}>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center text-white/10 font-medium text-[clamp(6rem,20vw,11rem)] leading-none select-none"
                  >
                    {projet.monogram}
                  </span>
                  <StarburstIcon className="absolute top-5 right-5 w-6 h-6 fill-current text-white/20" />
                  <span
                    aria-hidden="true"
                    className="absolute top-5 left-5 text-[10px] sm:text-[11px] bg-white/10 text-white/80 px-2 py-0.5 rounded backdrop-blur-sm"
                  >
                    {projet.category}
                  </span>
                  {/* Bouton extensible au survol (pattern de la référence) */}
                  <div className="absolute bottom-4 left-4 flex items-center h-9 w-9 group-hover:w-[152px] bg-white rounded-full px-[11px] overflow-hidden transition-all duration-300 ease-in-out">
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 text-ink -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    />
                    <span className="ml-2 text-[13px] font-medium text-ink whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Voir le projet
                    </span>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">{projet.text}</p>
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-ink mt-1">
                  {projet.name}
                  <span className="font-medium text-gray-500"> · {projet.category}</span>
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
