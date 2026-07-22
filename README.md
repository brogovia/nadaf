# NADAF — Site vitrine

Site statique multilingue (FR / EN / AR) pour NADAF Ecorecup, généré avec [Eleventy](https://www.11ty.dev/).

**Production :** [https://www.nadaf.eco](https://www.nadaf.eco)

## Prérequis

- Node.js 18+
- npm

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:8080](http://localhost:8080) (redirection vers `/fr/`).

## Build & tests

```bash
npm run build      # Génère _site/ + minifie CSS/JS
npm test           # Build + contrôles automatiques (pages, i18n, SEO, liens)
npm run test:prod  # Vérifie le site en production
```

## Structure

| Chemin | Rôle |
|--------|------|
| `src/fr/`, `src/en/`, `src/ar/` | Pages par langue |
| `src/_data/` | Données globales (contact, UI, langues…) |
| `src/_includes/` | Layouts et composants Nunjucks |
| `src/static/` | CSS, JS, images |
| `scripts/` | Minification et tests de site |

## Déploiement (Netlify)

Hébergeur : **Netlify** (connecté au dépôt GitHub `brogovia/nadaf`).

1. Push sur `main` → build automatique (`npm run build`, publish `_site`)
2. Config : `netlify.toml` (redirect `/` → `/fr/`, cache assets, HTTPS)
3. Domaine : `nadaf.eco` / `www.nadaf.eco` (HTTPS géré par Netlify)

Aucune action manuelle n'est nécessaire pour republier après un merge sur `main`.

## Mise à jour du contenu

| Besoin | Fichier(s) |
|--------|------------|
| Libellés UI (nav, footer, hero, formulaire) dans les 3 langues | `src/_data/ui.js` |
| Email, téléphone, adresse, carte | `src/_data/contact.json` |
| Mentions légales (RC, NIF, hébergeur…) | `src/_data/legal.json` |
| Textes d'une page | `src/fr/…`, `src/en/…`, `src/ar/…` (garder les 3 versions alignées) |
| Image | Ajouter `.jpg` + `.webp` dans `src/static/images/`, puis référencer via la macro `picture` |

Après modification : commit + push sur `main` (déploiement Netlify automatique). Vérifier avec `npm test` en local si besoin.

## Post-lancement — référencement

Sitemap public : [https://www.nadaf.eco/sitemap.xml](https://www.nadaf.eco/sitemap.xml)

### Google Search Console

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter la propriété `https://www.nadaf.eco` (préfixe d'URL)
3. Valider la propriété (DNS Netlify ou balise HTML / fichier)
4. Menu **Sitemaps** → soumettre `https://www.nadaf.eco/sitemap.xml`

### Bing Webmaster Tools

1. Aller sur [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Ajouter le site `https://www.nadaf.eco`
3. Importer depuis Google Search Console si déjà validé, ou valider autrement
4. Soumettre le même sitemap

> Ces étapes nécessitent un compte Google / Microsoft du propriétaire du domaine (NADAF).

## Analytics (Umami, self-hosted)

Mesure d'audience via [Umami](https://umami.is), auto-hébergé sur le VPS :

- Dashboard : https://analytics.nadaf.eco
- Script intégré dans `src/_includes/base.njk` (config dans `src/_data/metadata.json`)
- Sans cookies de tracking ; mentionné dans les mentions légales (FR / EN / AR)

## Roadmap V2 (hors scope actuel)

Prévu dans le PRD pour une version ultérieure :

- Pages **Actualités** et **Notre Équipe**
- CMS headless pour faciliter les mises à jour par NADAF
- Témoignages fournisseurs

## Contenu technique de référence

- Textes d'interface : `src/_data/ui.js`
- Coordonnées : `src/_data/contact.json`
- Mentions légales (données) : `src/_data/legal.json`
