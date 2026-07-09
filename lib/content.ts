/**
 * ============================================================
 * CONTENU ÉDITORIAL DU SITE — modifiez les textes ici.
 * Les sections lisent toutes leurs données dans ce fichier.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import { Bot, Cog, Rocket } from "lucide-react";
import { Gauge, ShieldCheck, Wallet, Globe } from "lucide-react";

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
      icon: Globe,
      title: "Sans frontière",
      text: "Nous travaillons avec des clients partout dans le monde, 100 % à distance.",
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
  /** Image d'aperçu (source Unsplash, à remplacer par vos vrais visuels) */
  image: string;
};

export const realisations: { badge: string; title: string; note: string; projets: Projet[] } = {
  badge: "Réalisations",
  title: "Quelques-unes de nos réalisations",
  note: "Projets de démonstration — à remplacer par vos propres captures dans lib/content.ts.",
  projets: [
    {
      name: "Kora",
      category: "Plateforme SaaS",
      text: "Gestion tout-en-un (facturation, clients, stock) pour PME.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Zenli",
      category: "Application mobile",
      text: "Réservation en ligne pour salons et instituts de beauté.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Flux",
      category: "Automatisation",
      text: "Synchronisation automatique commandes WhatsApp → tableur → livraison.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Nova",
      category: "Intelligence artificielle",
      text: "Assistant de support client 24/7 pour boutiques en ligne.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

/* ---------------------------------------------------------- */
/* Section 7 — Technologies                                    */
/* ---------------------------------------------------------- */

import {
  SiReact,
  SiNextdotjs,
  SiSupabase,
  SiFlutter,
  SiN8N,
  SiMake,
  SiZapier,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import OpenAIIcon from "@/components/ui/OpenAIIcon";
import type { ComponentType, SVGProps } from "react";

export type Techno = { name: string; icon: IconType | ComponentType<SVGProps<SVGSVGElement>> };

export const technologies: { badge: string; title: string; items: Techno[] } = {
  badge: "Technologies",
  title: "Les outils qu'on maîtrise",
  items: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Supabase", icon: SiSupabase },
    { name: "Flutter", icon: SiFlutter },
    { name: "n8n", icon: SiN8N },
    { name: "Make", icon: SiMake },
    { name: "Zapier", icon: SiZapier },
    { name: "OpenAI", icon: OpenAIIcon },
  ],
};

/* ---------------------------------------------------------- */
/* Section 8 — Témoignages (PLACEHOLDERS à remplacer)          */
/* ---------------------------------------------------------- */

export type Temoignage = { quote: string; name: string; role: string; image: string };

export const temoignages: {
  badge: string;
  title: string;
  subtitle: string;
  items: Temoignage[];
} = {
  badge: "Témoignages",
  title: "Ce qu'en disent nos clients",
  subtitle:
    "Des entrepreneurs et des équipes qui gagnent en temps, en clarté, et en croissance.",
  items: [
    {
      quote:
        "En trois semaines, Uptima nous a livré une plateforme de réservation que deux prestataires n'avaient pas réussi à finir en six mois. Sérieux, rapides, à l'écoute.",
      name: "Amina Diallo",
      role: "Fondatrice, Institut Éclat",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Notre process de facturation prenait deux jours par mois. Aujourd'hui c'est automatique et sans erreur. Le retour sur investissement a été immédiat.",
      name: "Karim Bassène",
      role: "Directeur, PME de logistique",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "J'avais une idée d'application et zéro compétence technique. Ils m'ont accompagnée à chaque étape, en langage clair. Aujourd'hui l'app tourne et j'ai mes premiers clients.",
      name: "Léa Moreau",
      role: "Fondatrice, SaaS RH",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Notre site vitrine convertit deux fois mieux depuis la refonte. Uptima a compris notre positionnement dès le premier appel, sans qu'on ait à tout ré-expliquer.",
      name: "Yannick Traoré",
      role: "Dirigeant, boutique e-commerce",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Un chatbot IA branché sur notre base de connaissances. Nos agents traitent 40 % de tickets en moins et les clients ont des réponses immédiates.",
      name: "Sophie Roche",
      role: "Cheffe de projet digital",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Ils ont repris une app générée avec l'IA, l'ont sécurisée et déployée proprement. Elle tourne aujourd'hui en production sans aucun souci.",
      name: "Malick Sané",
      role: "Consultant indépendant",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Un MVP livré en cinq semaines, un vrai code propre, un vrai suivi après la livraison. Rien à voir avec les freelances qu'on avait eus avant.",
      name: "Nadia Benali",
      role: "Fondatrice, marketplace",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Automatisation de nos devis via n8n : ce qui prenait une matinée se fait maintenant en trois minutes. ROI immédiat pour notre équipe commerciale.",
      name: "Éric Legrand",
      role: "Directeur, cabinet d'assurance",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      quote:
        "Une plateforme de cours moderne, rapide, avec paiement intégré. On a gagné en crédibilité, et surtout en revenus dès le premier mois.",
      name: "Aïcha Kamara",
      role: "Fondatrice, école en ligne",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ],
};

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
