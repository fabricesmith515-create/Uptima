"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { config } from "@/lib/config";
import { hero } from "@/lib/content";
import RollButton from "@/components/ui/RollButton";
import StarburstIcon from "@/components/ui/StarburstIcon";

// Le shader (WebGL) ne se rend que côté client ; en attendant, le fond
// statique dégradé ci-dessous assure la continuité visuelle.
const ShaderBackground = dynamic(() => import("@/components/ShaderBackground"), {
  ssr: false,
});

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease, delay },
        };

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col bg-base overflow-hidden">
      {/* Fond statique de secours (chargement + prefers-reduced-motion) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(255,95,3,0.14)_0%,rgba(239,239,239,0)_60%),radial-gradient(60%_50%_at_20%_80%,rgba(242,101,34,0.10)_0%,rgba(239,239,239,0)_60%)]"
      />

      {/* Pile de shaders animée (identique à la référence) */}
      {!reduceMotion && (
        <div aria-hidden="true" className="absolute inset-0 z-10 pointer-events-none">
          <ShaderBackground />
        </div>
      )}

      {/* Espace flexible : le contenu vit en bas du viewport */}
      <div className="flex-1" />

      {/* Contenu */}
      <div className="relative z-20 max-w-content mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <motion.p {...fadeUp(0.1)} className="text-[13px] sm:text-[14px] text-ink tracking-wide mb-5 sm:mb-8">
          {hero.label}
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-display-sm sm:text-display font-medium text-ink"
        >
          {hero.titleLines[0]}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {hero.titleLines[1]}
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-5 sm:mt-6 max-w-2xl text-[15px] sm:text-[17px] leading-[1.6] text-gray-600"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
        >
          <RollButton href={config.calComUrl} label={hero.ctaPrimary} variant="accent" external className="self-start" />
          <RollButton href="#contact" label={hero.ctaSecondary} variant="white" className="self-start" />
          <div className="inline-flex items-center gap-2 self-start bg-white rounded-[4px] px-3 py-2 shadow-badge hover:shadow-badge-hover transition-shadow duration-300">
            <StarburstIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-accent-soft shrink-0" />
            <span className="text-[13px] sm:text-[14px] font-medium text-ink">{hero.badge.text}</span>
            <span className="text-[10px] sm:text-[11px] bg-ink text-white px-1.5 sm:px-2 py-0.5 rounded shrink-0">
              {hero.badge.tag}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
