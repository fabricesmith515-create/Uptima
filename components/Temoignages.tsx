"use client";

import { motion } from "motion/react";
import { temoignages } from "@/lib/content";
import SectionBadge from "@/components/ui/SectionBadge";
import TestimonialColumn from "@/components/ui/TestimonialColumn";

export default function Temoignages() {
  const items = temoignages.items;
  const first = items.slice(0, 3);
  const second = items.slice(3, 6);
  const third = items.slice(6, 9);

  return (
    <section
      id="temoignages"
      aria-labelledby="temoignages-heading"
      className="bg-white py-16 sm:py-20 lg:py-28 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-content mx-auto"
      >
        {/* Badge de section + heading — même pattern que le reste du site */}
        <div className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="7" label={temoignages.badge} tone="light" />
        </div>
        <h2
          id="temoignages-heading"
          className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink"
        >
          {temoignages.title}
        </h2>
        <p className="px-5 sm:px-8 lg:px-12 mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-[17px] leading-[1.6] text-gray-600">
          {temoignages.subtitle}
        </p>

        {/* Trois colonnes défilantes, fondu haut/bas */}
        <div
          role="region"
          aria-label="Témoignages défilants"
          className="mt-12 sm:mt-14 lg:mt-16 flex justify-center gap-6 px-5 sm:px-8 lg:px-12 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        >
          <TestimonialColumn items={first} duration={26} />
          <TestimonialColumn items={second} duration={32} className="hidden md:block" />
          <TestimonialColumn items={third} duration={28} className="hidden lg:block" />
        </div>
      </motion.div>
    </section>
  );
}
