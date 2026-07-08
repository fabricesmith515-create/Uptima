/**
 * ============================================================
 * CONTENU ÉDITORIAL DU SITE — modifiez les textes ici.
 * Les sections lisent toutes leurs données dans ce fichier.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import { Bot, Cog, Rocket } from "lucide-react";
import { Gauge, ShieldCheck, Wallet, MapPin } from "lucide-react";

/* ---------------------------------------------------------- */
/* Navigation                                                  */
/* ---------------------------------------------------------- */

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Réalisations", href: "#realisations" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

/* ---------------------------------------------------------- */
/* Hero                                                        */
/* ---------------------------------------------------------- */

export const hero = {
  label: "Uptima",
  titleLines: [
    "On construit les produits digitaux",
    "qui propulsent votre business.",
  ],
  subtitle:
    "Uptima conçoit vos sites, applications et automatisations avec la vitesse du no-code et la rigueur d'un vrai développeur — sans les délais ni les tarifs d'une agence classique.",
  ctaPrimary: "Réserver un appel gratuit",
  ctaSecondary: "Décrire mon projet",
  badge: {
    text: "La vitesse du no-code, la solidité d'un vrai développeur.",
    tag: "Uptima",
  },
} as const;

/* ---------------------------------------------------------- */
/* Section 2 — Le problème                                     */
/* ---------------------------------------------------------- */

export const probleme = {
  badge: "Le constat",
  title: "Vous avez un projet. Il vous manque juste l'équipe pour le construire.",
  cards: [
    "Une idée claire, mais aucun moyen technique de la concrétiser.",
    "Un devis d'agence à des milliers d'euros, hors budget.",
    "Un freelance qui a disparu en laissant votre projet à moitié fini.",
  ],
} as const;

/* ---------------------------------------------------------- */
/* Section 3 — Services                                        */
/* ---------------------------------------------------------- */

export type Service = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const services: { badge: string; title: string; poles: Service[]; banner: string } = {
  badge: "Nos services",
  title: "Ce qu'on construit pour vous",
  poles: [
    {
      icon: Rocket,
      title: "Création",
      items: [
        "Sites vitrines & landing pages qui convertissent",
        "Applications web & SaaS sur-mesure",
        "MVP : de l'idée au produit lancé en quelques semaines",
        "Applications mobiles (iOS & Android)",
      ],
    },
    {
      icon: Cog,
      title: "Automatisation",
      items: [
        "Automatisation de vos tâches répétitives (n8n, Make, Zapier)",
        "Connexion de tous vos outils (CRM, paiement, email, tableurs)",
        "Collecte & traitement automatique de vos données",
      ],
    },
    {
      icon: Bot,
      title: "Intelligence Artificielle",
      items: [
        "Chatbots IA intégrés à votre site",
        "Assistants IA nourris par vos propres documents",
        "Intégration d'API IA dans vos produits",
      ],
    },
  ],
  banner:
    "Vous avez une app créée avec l'IA (Lovable, Bolt…) qui bugue ? On la répare et on la finalise.",
};

/* ---------------------------------------------------------- */
/* Section 4 — Notre différence                                */
/* ---------------------------------------------------------- */

export type Argument = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const difference: { badge: string; title: string; arguments: Argument[] } = {
  badge: "Pourquoi Uptima",
  title: "Pourquoi Uptima",
  arguments: [
    {
      icon: Gauge,
      title: "Vitesse",
      text: "No-code et IA maîtrisés : on livre en semaines, pas en mois.",
    },
    {
      icon: ShieldCheck,
      title: "Solidité",
      text: "Un vrai développeur derrière chaque projet : code propre, sécurisé, déployé.",
    },
    {
      icon: Wallet,
      title: "Prix justes",
      text: "La qualité d'une agence, sans les frais d'une agence.",
    },
    {
      icon: MapPin,
      title: "Proximité",
      text: "Basés en Afrique francophone : on parle votre langue et on connaît votre marché.",
    },
  ],
};

/* ---------------------------------------------------------- */
/* Section 5 — Process                                         */
/* ---------------------------------------------------------- */

export const methode = {
  badge: "Notre méthode",
  title: "Simple, du premier appel à la mise en ligne",
  steps: [
    {
      title: "Appel découverte",
      text: "Gratuit, on comprend votre besoin.",
    },
    {
      title: "Devis & cahier des charges",
      text: "Clair, fixe, sans surprise.",
    },
    {
      title: "Construction",
      text: "Vous suivez l'avancement à chaque étape.",
    },
    {
      title: "Livraison & suivi",
      text: "Vous êtes autonome, on reste disponible.",
    },
  ],
} as const;

/* ---------------------------------------------------------- */
/* Section 6 — Réalisations (projets fictifs, placeholders)    */
/* ---------------------------------------------------------- */

export type Projet = {
  name: string;
  category: string;
  text: string;
  /** Classes Tailwind du mockup dégradé (pas de fausses captures d'écran) */
  gradient: string;
  monogram: string;
};

export const realisations: { badge: string; title: string; note: string; projets: Projet[] } = {
  badge: "Réalisations",
  title: "Quelques-unes de nos réalisations",
  note: "Projets de démonstration — bientôt remplacés par nos études de cas clients.",
  projets: [
    {
      name: "Kora",
      category: "Plateforme SaaS",
      text: "Gestion tout-en-un (facturation, clients, stock) pour PME.",
      gradient: "bg-[radial-gradient(120%_120%_at_10%_0%,#F26522_0%,#1A1D2E_55%,#0D0F1A_100%)]",
      monogram: "K",
    },
    {
      name: "Zenli",
      category: "Application mobile",
      text: "Réservation en ligne pour salons et instituts de beauté.",
      gradient: "bg-[radial-gradient(130%_130%_at_90%_10%,#E8704E_0%,#3A2230_50%,#1A1D2E_100%)]",
      monogram: "Z",
    },
    {
      name: "Flux",
      category: "Automatisation",
      text: "Synchronisation automatique commandes WhatsApp → tableur → livraison.",
      gradient: "bg-[radial-gradient(120%_140%_at_0%_100%,#FF5F03_0%,#4A3728_45%,#1A1D2E_100%)]",
      monogram: "F",
    },
    {
      name: "Nova",
      category: "Intelligence artificielle",
      text: "Assistant de support client 24/7 pour boutiques en ligne.",
      gradient: "bg-[radial-gradient(140%_120%_at_100%_100%,#F26522_0%,#2A2438_50%,#12141F_100%)]",
      monogram: "N",
    },
  ],
};

/* ---------------------------------------------------------- */
/* Section 7 — Technologies                                    */
/* ---------------------------------------------------------- */

export const technologies = {
  badge: "Technologies",
  title: "Les outils qu'on maîtrise",
  items: [
    "React",
    "Next.js",
    "Supabase",
    "Flutter",
    "n8n",
    "Make",
    "Zapier",
    "OpenAI",
    "Tailwind CSS",
    "TypeScript",
  ],
} as const;

/* ---------------------------------------------------------- */
/* Section 8 — Témoignages (PLACEHOLDERS à remplacer)          */
/* ---------------------------------------------------------- */

export const temoignages = {
  badge: "Témoignages",
  title: "Ce qu'en disent nos clients",
  note: "Témoignages à venir — cette section sera complétée avec de vrais avis clients avant le lancement.",
  items: [
    { quote: "[Témoignage à remplacer]", author: "Client, secteur d'activité" },
    { quote: "[Témoignage à remplacer]", author: "Client, secteur d'activité" },
    { quote: "[Témoignage à remplacer]", author: "Client, secteur d'activité" },
  ],
} as const;

/* ---------------------------------------------------------- */
/* Section 9 — FAQ                                             */
/* ---------------------------------------------------------- */

export const faq = {
  badge: "FAQ",
  title: "Questions fréquentes",
  items: [
    {
      question: "Combien de temps pour livrer mon projet ?",
      answer:
        "Un site vitrine en quelques jours, un MVP d'application en quelques semaines. On vous donne un délai ferme dès le devis.",
    },
    {
      question: "Combien ça coûte ?",
      answer:
        "On établit un devis fixe après l'appel découverte, adapté à votre budget. Aucune surprise.",
    },
    {
      question: "Est-ce que le code m'appartient ?",
      answer: "Oui, à 100 %. Vous êtes propriétaire de tout ce qu'on construit.",
    },
    {
      question: "Proposez-vous de la maintenance ?",
      answer: "Oui, des forfaits de suivi et d'évolution après la livraison.",
    },
    {
      question: "Je ne suis pas technique, est-ce un problème ?",
      answer: "Aucun. On traduit chaque étape en langage clair et on vous guide.",
    },
    {
      question: "Vous travaillez avec quels pays ?",
      answer: "Toute l'Afrique francophone et au-delà, entièrement à distance.",
    },
  ],
} as const;

/* ---------------------------------------------------------- */
/* Section 10 — CTA final + contact                            */
/* ---------------------------------------------------------- */

export const contact = {
  title: "Prêt à donner vie à votre projet ?",
  subtitle:
    "Réservez un appel gratuit de 30 minutes. On discute de votre idée et on vous dit exactement comment la concrétiser.",
  ctaPrimary: "Réserver mon appel gratuit",
  ctaWhatsapp: "Discuter sur WhatsApp",
} as const;

/* ---------------------------------------------------------- */
/* Footer                                                      */
/* ---------------------------------------------------------- */

export const footer = {
  baseline: "La vitesse du no-code, la solidité d'un vrai développeur.",
  copyright: "© 2026 Uptima. Tous droits réservés.",
} as const;
