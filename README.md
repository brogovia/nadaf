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
npm run build   # Génère _site/ + minifie CSS/JS
npm test        # Build + contrôles automatiques (pages, i18n, SEO, liens)
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

Hébergeur : **Netlify** (déjà connecté au dépôt GitHub `brogovia/nadaf`).

1. Push sur `main` → build automatique (`npm run build`, publish `_site`)
2. Config : `netlify.toml` (redirect `/` → `/fr/`, cache assets, HTTPS)
3. Domaine : `nadaf.eco` / `www.nadaf.eco` (HTTPS géré par Netlify)

Aucune action manuelle n'est nécessaire pour republier après un merge sur `main`.

## Contenu

- Textes d'interface : `src/_data/ui.js`
- Coordonnées : `src/_data/contact.json`
- Mentions légales (données) : `src/_data/legal.json`
