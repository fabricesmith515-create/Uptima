"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { config } from "@/lib/config";
import { navLinks } from "@/lib/content";
import RollButton from "@/components/ui/RollButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloque le défilement de la page quand le menu mobile est ouvert + fermeture à Échap
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="max-w-content mx-auto w-full p-2 sm:p-3">
        <nav
          aria-label="Navigation principale"
          className="relative bg-white rounded-full p-[5px] pl-[5px] pr-[5px] flex items-center justify-between shadow-badge"
        >
          {/* Logo */}
          <a
            href="#top"
            aria-label="Uptima — retour en haut de page"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-ink rounded-full flex items-center justify-center shrink-0"
          >
            <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">UP</span>
          </a>

          {/* Liens de navigation — centrés (desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-ink hover:text-gray-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA droite (desktop) */}
          <div className="hidden md:block">
            <RollButton
              href={config.calComUrl}
              label="Réserver un appel"
              variant="dark"
              size="sm"
              external
            />
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden flex items-center gap-2 bg-ink text-white text-[13px] font-medium rounded-full px-4 py-2"
          >
            {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            {menuOpen ? "Fermer" : "Menu"}
          </button>
        </nav>
      </div>

      {/* Overlay menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-50 md:hidden transition-[visibility] duration-500 ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-sheet ${
            menuOpen ? "translate-y-0" : "translate-y-[calc(100%+0.75rem)]"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold uppercase tracking-wide text-gray-500">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              className="w-9 h-9 bg-surface rounded-full flex items-center justify-center"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Navigation mobile" className="mt-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[28px] leading-[32px] font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={config.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center justify-between bg-ink text-white text-[14px] font-medium rounded-full pl-5 pr-2 py-2"
          >
            Réserver un appel gratuit
            <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-brand group-hover:-rotate-45">
              <ArrowRight size={14} className="text-ink" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
