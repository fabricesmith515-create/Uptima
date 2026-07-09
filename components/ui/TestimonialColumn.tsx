"use client";

import React from "react";
import { motion } from "motion/react";
import type { Temoignage } from "@/lib/content";

/**
 * Colonne de témoignages qui défile verticalement en boucle infinie.
 * Adapté de motionsites.ai « testimonial-v2 » aux tokens du site Uptima.
 */
export default function TestimonialColumn({
  className,
  duration = 15,
  items,
}: {
  className?: string;
  duration?: number;
  items: Temoignage[];
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0 motion-reduce:animate-none"
      >
        {[
          ...new Array(2).fill(0).map((_, dup) => (
            <React.Fragment key={dup}>
              {items.map((t, i) => (
                <motion.li
                  key={`${dup}-${i}`}
                  aria-hidden={dup === 1 ? "true" : undefined}
                  tabIndex={dup === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="p-8 rounded-3xl border border-gray-200 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-gray-600 leading-relaxed font-normal m-0 text-[14px] sm:text-[15px]">
                      « {t.quote} »
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        width={40}
                        height={40}
                        src={t.image}
                        alt={`Portrait de ${t.name}`}
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-accent/30 transition-all duration-300 ease-brand"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-ink text-[14px]">
                          {t.name}
                        </cite>
                        <span className="text-[13px] leading-5 tracking-tight text-gray-500 mt-0.5">
                          {t.role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
}
