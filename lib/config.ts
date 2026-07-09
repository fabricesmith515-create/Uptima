/**
 * ============================================================
 * PLACEHOLDERS À PERSONNALISER — tout est centralisé ici.
 * Remplacez ces valeurs avant la mise en ligne.
 * ============================================================
 */

export const config = {
  /** Lien de réservation cal.com (appel découverte gratuit) */
  calComUrl: "https://cal.com/uptima/appel-decouverte",

  /** Lien WhatsApp — numéro au format international, sans « + » ni espaces */
  whatsappUrl: "https://wa.me/2290167713660",

  /** Numéro WhatsApp affiché à l'écran */
  whatsappDisplay: "+229 01 67 71 36 60",

  /** Adresse e-mail de contact */
  email: "contact@uptima.com",

  /** Réseaux sociaux (mettre l'URL complète, ou supprimer l'entrée) */
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/PLACEHOLDER" },
    { label: "X (Twitter)", href: "https://x.com/PLACEHOLDER" },
    { label: "Instagram", href: "https://instagram.com/PLACEHOLDER" },
  ],
} as const;
