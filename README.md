# Uptima — Site vitrine

Site one-page du studio digital **Uptima** : Next.js 14 (App Router) + TypeScript + Tailwind CSS +
Motion (`motion/react`) + `shaders` (fond animé du hero) + `lucide-react`.

Le design system complet (couleurs, typographies, espacements, animations) est documenté dans
[`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) — il est extrait de `reference/hero-reference.tsx`.

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de production :

```bash
npm run build
npm start
```

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| **Placeholders** : lien cal.com, numéro WhatsApp, e-mail, réseaux sociaux, texte de disponibilité, ville/fuseau de l'horloge | [`lib/config.ts`](./lib/config.ts) |
| **Contenu** : textes de toutes les sections (hero, services, process, projets, FAQ, témoignages…) | [`lib/content.ts`](./lib/content.ts) |
| Métadonnées SEO (title, description, Open Graph) | [`app/layout.tsx`](./app/layout.tsx) |
| Tokens de design (couleurs, ombres, easings) | [`tailwind.config.ts`](./tailwind.config.ts) |

Chaque section a son composant dans [`components/`](./components) (un fichier = une section).

### Avant la mise en ligne — checklist

1. `lib/config.ts` : remplacer `PLACEHOLDER_NUMERO` (WhatsApp), `contact@uptima.PLACEHOLDER`
   (e-mail), les URL des réseaux sociaux, et vérifier le lien cal.com.
2. `lib/content.ts` : remplacer les 3 témoignages `[Témoignage à remplacer]` par de vrais avis,
   et les 4 projets fictifs (Kora, Zenli, Flux, Nova) par de vraies réalisations.
3. `app/layout.tsx` : ajuster title/description si besoin et ajouter `metadataBase`
   (l'URL finale du site) pour de meilleures cartes Open Graph.

## Déployer sur Vercel

1. Pousser le dépôt sur GitHub.
2. Sur [vercel.com](https://vercel.com) → **Add New Project** → importer le dépôt.
3. Vercel détecte Next.js automatiquement — aucun réglage nécessaire. **Deploy**.

Chaque `git push` déclenche ensuite un déploiement automatique.

## Notes

- `reference/hero-reference.tsx` est la référence de design (non importée dans l'app).
- Les animations respectent `prefers-reduced-motion` : le shader du hero est remplacé par un
  dégradé statique et les apparitions/défilements sont désactivés.
- Le site est 100 % statique (aucun backend, aucune base de données).
