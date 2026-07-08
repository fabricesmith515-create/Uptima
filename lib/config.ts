/**
 * ============================================================
 * PLACEHOLDERS À PERSONNALISER — tout est centralisé ici.
 * Remplacez ces valeurs avant la mise en ligne.
 * ============================================================
 */

export const config = {
  /** Lien de réservation cal.com (appel découverte gratuit) */
  calComUrl: "https://cal.com/uptima/appel-decouverte",

  /** Numéro WhatsApp au format international, sans « + » ni espaces (ex. 2250701020304) */
  whatsappUrl: "https://wa.me/PLACEHOLDER_NUMERO",

  /** Adresse e-mail de contact */
  email: "contact@uptima.PLACEHOLDER",

  /** Réseaux sociaux (mettre l'URL complète, ou supprimer l'entrée) */
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/PLACEHOLDER" },
    { label: "X (Twitter)", href: "https://x.com/PLACEHOLDER" },
    { label: "Instagram", href: "https://instagram.com/PLACEHOLDER" },
  ],

  /** Bandeau de disponibilité affiché dans la navbar */
  availability: "On prend des projets pour T3 2026",

  /** Ville et fuseau horaire de l'horloge live de la navbar */
  clock: {
    city: "Abidjan",
    timeZone: "Africa/Abidjan",
  },
} as const;
