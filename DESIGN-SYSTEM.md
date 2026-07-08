# Design System — Uptima

Système de design extrait de `reference/hero-reference.tsx` (template motionsites.ai « Axion Studio »).
Tous les tokens ci-dessous sont reportés dans `tailwind.config.ts` et `app/globals.css`, et appliqués
à **toutes** les sections du site pour une cohérence visuelle totale.

---

## 1. Palette de couleurs

### Fonds (thème clair, alternance de sections)

| Token | Valeur | Usage |
|---|---|---|
| `base` | `#EFEFEF` | Fond du hero (sous la pile de shaders) |
| `blanc` | `#FFFFFF` | Sections alternées, navbar pill, cartes, cercles de boutons |
| `surface` | `#F5F5F5` | Sections alternées (gris très clair) |
| `ink` / `gray-900` | `#111827` | Boutons sombres, logo, badges numérotés, section CTA finale |
| `card-dark` | `#1A1D2E` | Fond des visuels de cartes projet (bleu nuit) |

### Texte

| Token | Valeur | Usage |
|---|---|---|
| `gray-900` | `#111827` | Titres et texte principal |
| `gray-600` | `#4B5563` | Texte secondaire, descriptions, méta (horloge, disponibilité) |
| `gray-500` | `#6B7280` | État hover des liens de navigation |
| `white` | `#FFFFFF` | Texte sur fonds sombres et boutons accent |

### Accent (orange — signature de la marque)

| Token | Valeur | Usage |
|---|---|---|
| `accent` | `#F26522` | Boutons CTA principaux |
| `accent-hover` | `#E05A1A` | Hover des CTA |
| `accent-soft` | `#E8704E` | Icône starburst, accents décoratifs (corail) |
| `accent-vivid` | `#FF5F03` | Couleur du shader ChromaFlow (halo animé du hero) |

### Dégradés

- Hero : généré en temps réel par la pile de shaders — `Swirl` (blanc `#ffffff` → gris `#f0f0f0`),
  `ChromaFlow` (base blanche, flux orange `#ff5f03`), `FlutedGlass` (réfraction verre cannelé),
  `FilmGrain` (grain 0.05). Ambiance : verre dépoli clair traversé de coulées orange.
- Mockups projets : dégradés CSS abstraits dérivés de la palette (orange/corail sur bleu nuit
  `#1A1D2E`, gris chauds) — jamais de fausses captures d'écran.

---

## 2. Typographie

- **Famille** : la référence utilise la sans-serif système neutre. Équivalent web moderne retenu :
  **Inter** (via `next/font/google`, variable), pour les titres **et** le corps — c'est elle qui
  restitue le plus fidèlement l'ambiance de la référence (géométrique, neutre, contemporaine).
- **Graisses** : `font-medium` (500) pour les titres et boutons, `font-semibold` (600) pour les noms
  de projets et numéros de badges, `font-bold` (700) réservé au monogramme du logo. Jamais de black/heavy.

### Hiérarchie

| Rôle | Taille | Interlignage | Espacement lettres |
|---|---|---|---|
| H1 hero | `clamp(1.75rem, 7vw, 4.2rem)` mobile · `clamp(2.5rem, 5vw, 4.2rem)` sm+ | `1.08` | `-0.03em` |
| H2 majeur (type « Our projects ») | mêmes clamp que H1 | `1.08` | `-0.03em` |
| H2 section (type « Strategy-led… ») | `clamp(1.5rem, 4vw, 3.2rem)` | `1.12` | `-0.02em` |
| Titres mobiles du menu | `28px/32px` | — | — |
| Paragraphe éditorial | `15–18px` | `1.6–1.65` | — |
| Corps / descriptions | `13–14px` | `relaxed` | — |
| Boutons / liens nav | `13–14px` `font-medium` | — | — |
| Labels de badge pill | `12–13px` `font-medium` | — | — |
| Micro-badges (« Featured ») | `10–11px` | — | — |
| Numéro de badge | `11–12px` `font-semibold` | — | — |

Règle : les tailles de texte sont **petites et précises** (13–14 px), la hiérarchie vient des
énormes titres clampés, pas de tailles intermédiaires.

---

## 3. Espacement & rayons

### Rythme

- **Largeur max de contenu** : `1440px`, centrée (`mx-auto`).
- **Gouttières horizontales** : `px-5` → `sm:px-8` → `lg:px-12` (20 / 32 / 48 px).
- **Padding vertical de section** : `pt-16 sm:pt-20 lg:pt-28/32`, `pb-12→28` selon la section.
- **Après le badge de section** : `mb-6 sm:mb-8`.
- **Après le H2** : `mb-10/12` → `lg:mb-16/28`.
- **Grilles de cartes** : `gap-5 sm:gap-6 lg:gap-7`.
- **CTA après un titre** : `mt-8 sm:mt-12`.
- Navbar : conteneur `p-2 sm:p-3`, pill `p-[5px]`.

### Rayons de bordure

| Rayon | Usage |
|---|---|
| `rounded-full` | Navbar pill, tous les boutons, badges numérotés, labels pill, cercles d'icônes |
| `rounded-2xl` (16px) | Cartes, visuels, bottom sheet mobile (`rounded-xl` en dessous de sm) |
| `rounded` (4px) | Badge « pavé » type Certified Partner et micro-badges |

---

## 4. Animation

### Vocabulaire

| Pattern | Détail |
|---|---|
| **Text roll** (signature) | Texte dupliqué dans un conteneur `overflow-hidden h-[20px]` ; au hover la pile translate de `-50%` verticalement. `duration-500`, easing standard. |
| **Rotation de flèche** | La flèche dans son cercle tourne `-45°` au hover (ou passe de `-45°` à `0°` dans les boutons extensibles). Même durée/easing. |
| **Bouton extensible** | Cercle `h-9 w-9` qui s'étend en largeur au hover (`w-[148–168px]`), texte en `opacity-0 → 100` avec `delay-100`. `duration-300 ease-in-out`. |
| **Bottom sheet** | `translate-y-full → 0`, `duration-500`, easing `cubic-bezier(0.32, 0.72, 0, 1)`. |
| **Fade-up à l'apparition** | `opacity: 0, y: 24px → opacity: 1, y: 0`, `~0.7s`, easing standard, déclenché par `whileInView` (une seule fois), avec **stagger léger** (~80–100 ms) entre éléments frères. |
| **Hover discrets** | Couleurs de liens `duration-300`, ombres de cartes `duration-300`. |
| **Shaders** | Mouvement lent et continu (speed 0.15) — ambiance, jamais de distraction. |

### Constantes

- **Easing standard** : `cubic-bezier(0.25, 0.1, 0.25, 1)` — utilisé partout sauf mention contraire.
- **Easing sheet** : `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Durées** : 300 ms (couleurs, ombres, expansion), 500 ms (transforms), ~700 ms (reveals au scroll).
- **`prefers-reduced-motion`** : reveals et marquee désactivés, shader remplacé par un dégradé statique.

---

## 5. Composants

### Boutons

- **Primaire (accent)** : `bg-[#F26522] hover:bg-[#E05A1A]`, texte blanc 13–14px medium,
  `rounded-full pl-5/6 pr-2 py-2`, text-roll + cercle blanc (`w-7/8 h-7/8`) avec `ArrowRight`
  orange qui tourne `-45°` au hover.
- **Sombre** : identique mais `bg-gray-900`, cercle blanc `w-6 h-6`, flèche gray-900.
- **Blanc (pill)** : fond blanc, texte gray-900, ombre `0_2px_8px_rgba(0,0,0,0.08)` →
  `0_4px_16px_rgba(0,0,0,0.12)` au hover.

### Badges de section

Rangée : cercle numéroté (`w-6/7 h-6/7 bg-gray-900 text-white font-semibold`) + label pill
(`border border-gray-200/300 rounded-full px-3/4 py-1/1.5`, 12–13px medium). Chaque section du site
est numérotée séquentiellement.

### Cartes

- Visuel `rounded-2xl overflow-hidden` sur fond coloré sombre, ratio défini (`aspect-[329/246]`,
  `aspect-square`…), bouton extensible en `absolute bottom-4 left-4`.
- Métadonnées **sous** la carte : description 13–14px gray-600 `mt-4`, titre 14–15px semibold `mt-1`.
- Badge « pavé » : fond blanc `rounded-[4px]`, ombre subtile, icône corail + label + micro-badge sombre.

### Navigation

Pill blanche flottante sur le hero, logo cercle sombre avec monogramme, liens 14px
`hover:text-gray-500`, méta à droite (disponibilité + horloge live), CTA sombre avec text-roll.
Mobile : bouton Menu/Fermer sombre + bottom sheet blanche.

---

## 6. Adaptation à Uptima

- Monogramme logo : `UP` (au lieu de `AX`).
- Horloge live : fuseau `Africa/Abidjan` (GMT) — « {HH:MM} à Abidjan ».
- L'icône starburst de la référence est conservée comme motif décoratif de marque (badge hero, footer).
- La section CTA finale utilise `gray-900` en pleine surface (carte sombre `rounded-3xl`) pour clore
  la page — dérivé direct des surfaces sombres de la référence.
- Tout le contenu éditorial est en français ; tokens et classes restent identiques à la référence.
