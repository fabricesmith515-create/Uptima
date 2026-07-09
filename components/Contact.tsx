import { Mail, MessageCircle } from "lucide-react";
import { config } from "@/lib/config";
import { contact } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import RollButton from "@/components/ui/RollButton";

export default function Contact() {
  return (
    <section id="contact" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          {/* Carte sombre pleine largeur — clôture de page */}
          <div className="bg-ink rounded-2xl sm:rounded-3xl px-6 py-14 sm:p-16 lg:p-24 text-center overflow-hidden relative">
            {/* Halo décoratif dérivé de la palette du shader */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_120%,rgba(255,95,3,0.25)_0%,rgba(17,24,39,0)_65%)]"
            />
            <div className="relative">
              <h2 className="text-heading font-medium text-white max-w-3xl mx-auto">{contact.title}</h2>
              <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] leading-[1.6] text-white/70 max-w-2xl mx-auto">
                {contact.subtitle}
              </p>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                <RollButton href={config.calComUrl} label={contact.ctaPrimary} variant="accent" external />
                <a
                  href={config.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-white text-ink text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  {contact.ctaWhatsapp}
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-ink rounded-full flex items-center justify-center transition-transform duration-500 ease-brand group-hover:-rotate-45 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
                    <MessageCircle size={14} className="text-white" aria-hidden="true" />
                  </span>
                </a>
              </div>

              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[14px] text-white/70">
                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <Mail size={14} aria-hidden="true" />
                  {config.email}
                </a>
                <a
                  href={config.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <MessageCircle size={14} aria-hidden="true" />
                  {config.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
