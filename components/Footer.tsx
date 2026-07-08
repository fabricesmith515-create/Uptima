import { config } from "@/lib/config";
import { footer, navLinks } from "@/lib/content";
import StarburstIcon from "@/components/ui/StarburstIcon";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Marque */}
          <div className="max-w-sm">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="w-9 h-9 bg-ink rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold tracking-tight">UP</span>
              </span>
              <span className="text-[15px] font-semibold text-ink">Uptima</span>
            </a>
            <p className="mt-4 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">{footer.baseline}</p>
          </div>

          {/* Ancres */}
          <nav aria-label="Liens de pied de page" className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">Navigation</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-ink hover:text-gray-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Réseaux */}
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">Suivez-nous</span>
            {config.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-ink hover:text-gray-500 transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
            <a
              href={`mailto:${config.email}`}
              className="text-[14px] text-ink hover:text-gray-500 transition-colors duration-300"
            >
              {config.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between gap-4">
          <p className="text-[13px] text-gray-500">{footer.copyright}</p>
          <StarburstIcon className="w-5 h-5 fill-current text-accent-soft shrink-0" />
        </div>
      </div>
    </footer>
  );
}
