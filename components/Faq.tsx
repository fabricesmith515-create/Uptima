"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionBadge from "@/components/ui/SectionBadge";

function FaqItem({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-300/70">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-question-${index}`}
          className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left"
        >
          <span className="text-[15px] sm:text-[16px] font-medium text-ink">{question}</span>
          <span
            aria-hidden="true"
            className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-500 ease-brand motion-reduce:transition-none ${
              open ? "rotate-45" : ""
            }`}
          >
            <Plus size={14} className="text-ink" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`grid transition-[grid-template-rows] duration-500 ease-brand motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 sm:pb-6 pr-11 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 mb-6 sm:mb-8">
          <SectionBadge number="8" label={faq.badge} tone="gray" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="px-5 sm:px-8 lg:px-12 text-heading font-medium text-ink mb-10 sm:mb-14 lg:mb-16">
            {faq.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="px-5 sm:px-8 lg:px-12 max-w-4xl border-t border-gray-300/70">
            {faq.items.map((item, i) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
