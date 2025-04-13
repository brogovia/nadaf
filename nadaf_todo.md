# To-Do List: Création du Site Vitrine NADAF (11ty + CSS Grid)

## Phase 1: Préparation et Configuration Initiale

*   [ ] Installer les prérequis (Node.js, npm/yarn).
*   [ ] Initialiser le projet (`npm init`).
*   [ ] Installer 11ty (`npm install @11ty/eleventy --save-dev`).
*   [ ] Mettre en place la structure de base du projet 11ty :
    *   Répertoire source (ex: `src/`).
    *   Répertoire de sortie (ex: `_site/`).
    *   Répertoire includes/layouts (ex: `src/_includes/`).
    *   Répertoire pour les assets statiques (CSS, JS, images) (ex: `src/static/`).
    *   Fichier de configuration 11ty (`.eleventy.js`).
*   [ ] Initialiser Git (`git init`) et créer un fichier `.gitignore`.
*   [ ] Confirmer et définir les variables CSS pour la palette de couleurs finale (Vert, Blanc, Orange) et la typographie (ex: Montserrat pour les titres, Lato/Open Sans pour le corps).
*   [ ] Rassembler et organiser les assets fournis : logo, images (vrac, balles, etc.).

## Phase 2: Structure HTML et Layout CSS (Mobile-First)

*   [ ] Créer le template de base HTML (`src/_includes/base.njk` ou équivalent) incluant `<!DOCTYPE>`, `<head>`, `<body>`, et les liens vers CSS/JS.
*   [ ] Intégrer la structure HTML sémantique de base dans le layout : `<header>`, `<nav>`, `<main>`, `<footer>`.
*   [ ] Créer et styler (CSS de base) la **Top Bar** (haut de page) avec les emplacements pour Localisation, Email, Téléphone.
*   [ ] Créer et styler (CSS de base) la **Navbar principale** (sous la Top Bar) avec emplacement pour logo/nom et menu.
*   [ ] Créer et styler (CSS de base) le **Footer** avec emplacements pour contact, liens légaux, réseaux sociaux, copyright.
*   [ ] Mettre en place la structure principale CSS (`src/static/css/main.css`) et configurer 11ty pour la copier dans `_site`.
*   [ ] Implémenter la **grille CSS Grid principale** pour la mise en page générale des pages.
*   [ ] Appliquer les styles typographiques de base (polices, tailles, espacements).
*   [ ] Commencer le développement responsive : assurer un affichage correct sur mobile pour la structure de base (Top Bar, Navbar, Footer).

## Phase 3: Construction des Pages Principales (Structure et Contenu FR)

*   [ ] Créer les fichiers de contenu/template pour chaque page principale (en Français d'abord, ex: `src/fr/index.md`, `src/fr/services.md`, `src/fr/produits.md`, `src/fr/contact.md`, `src/fr/mentions-legales.md`). Utiliser Nunjucks/Liquid pour inclure le layout de base.
*   [ ] **Page Accueil:**
    *   [ ] Implémenter le Hero Header (structure HTML, image de fond/visuel, texte accrocheur orienté fournisseur).
    *   [ ] Créer les sections d'aperçu des services (utiliser CSS Grid/Flexbox pour les colonnes/cartes).
    *   [ ] Ajouter les textes et images pour la version française.
    *   [ ] Ajouter les Call-to-Actions (CTA).
*   [ ] **Page Services:**
    *   [ ] Structurer la page pour détailler chaque service (Collecte, Tri...).
    *   [ ] Lister clairement les matériaux acceptés.
    *   [ ] Ajouter les textes et images pour la version française.
*   [ ] **Page Produits:**
    *   [ ] Structurer la page pour présenter les matériaux acceptés (vrac) et produits finis (balles).
    *   [ ] Ajouter les textes et intégrer les photos (vrac/balles) pour la version française.
*   [ ] **Page Contact:**
    *   [ ] Ajouter les coordonnées complètes (Adresse, Téléphone, Email).
    *   [ ] Créer la structure HTML du formulaire de contact.
    *   [ ] Intégrer une carte de localisation (statique ou iframe simple pour commencer).
    *   [ ] Ajouter les textes pour la version française.
*   [ ] **Page Mentions Légales:**
    *   [ ] Ajouter le contenu textuel fourni/rédigé.
*   [ ] Intégrer le logo NADAF dans la Navbar.
*   [ ] Ajouter les liens de navigation réels dans la Navbar (vers les pages FR).
*   [ ] Ajouter les liens réels dans le Footer (Mentions Légales, réseaux sociaux FR).
*   [ ] Remplir les `alt` tags pour toutes les images intégrées.

## Phase 4: Implémentation des Fonctionnalités Interactives (JS)

*   [ ] **Navbar Mobile:** Implémenter le menu "burger" pour les écrans mobiles (HTML, CSS, JS pour le toggle).
*   [ ] **Top Bar - Carte au Survol:**
    *   [ ] Décider de l'approche (CSS simple avec image, ou JS léger type Tippy.js).
    *   [ ] Implémenter l'affichage de la carte au survol de l'élément localisation.
*   [ ] **Formulaire de Contact:**
    *   [ ] Ajouter la validation côté client (attributs HTML5).
    *   [ ] Configurer la soumission du formulaire (choisir et implémenter une solution pour site statique : Netlify Forms, Formspree, Basin, etc. - *Nécessite décision/configuration hébergeur ou service tiers*).
    *   [ ] Tester la soumission et la réception des emails (une fois l'adresse email fournie).

## Phase 5: Implémentation du Multilinguisme (FR/AR/EN)

*   [ ] Configurer 11ty pour l'internationalisation (i18n) :
    *   [ ] Choisir la stratégie (ex: structure de dossiers `/fr/`, `/ar/`, `/en/`).
    *   [ ] Mettre en place les collections ou données globales nécessaires.
*   [ ] Dupliquer la structure des pages pour l'Arabe (AR) et l'Anglais (EN).
*   [ ] Créer le composant "Sélecteur de Langue" dans la Navbar.
*   [ ] Lier les pages entre les différentes langues (pour que le sélecteur fonctionne).
*   [ ] **Intégrer les traductions :**
    *   [ ] Obtenir les traductions pour AR et EN (*Action requise : Définir qui fournit*).
    *   [ ] Placer les textes traduits dans les fichiers/templates correspondants.
*   [ ] **Styling RTL pour l'Arabe :**
    *   [ ] Ajouter `dir="rtl"` sur `<html>` pour les pages en Arabe.
    *   [ ] Créer des styles CSS spécifiques ou des overrides pour l'affichage RTL (ex: `margin-left` devient `margin-right`, etc.).
    *   [ ] Tester l'affichage RTL sur toutes les pages AR.

## Phase 6: Optimisation, Tests et SEO

*   [ ] **Optimisation:**
    *   [ ] Optimiser toutes les images (compression, format WebP si pertinent).
    *   [ ] Minifier les fichiers CSS et JS (via 11ty ou outil de build).
    *   [ ] Vérifier et améliorer les performances (Google Lighthouse / PageSpeed Insights).
*   [ ] **Tests:**
    *   [ ] Tester l'affichage responsive sur différentes tailles d'écran (DevTools, simulateurs, appareils réels si possible).
    *   [ ] Tester la compatibilité sur les navigateurs cibles (Chrome, Firefox, Safari, Edge).
    *   [ ] Tester toutes les fonctionnalités interactives (menu mobile, carte au survol, formulaire).
    *   [ ] Tester la navigation et tous les liens internes/externes.
    *   [ ] Tester le sélecteur de langue et la navigation entre langues.
*   [ ] **SEO:**
    *   [ ] Vérifier la sémantique HTML (`<h1>`, `<header>`, etc.).
    *   [ ] Rédiger et intégrer des balises `<title>` et `<meta name="description">` uniques et pertinentes pour chaque page et chaque langue.
    *   [ ] Générer un fichier `sitemap.xml` (plugin 11ty ou manuel).
    *   [ ] Créer un fichier `robots.txt`.
*   [ ] **Validation & Relecture:**
    *   [ ] Valider le code HTML et CSS (W3C validator).
    *   [ ] Vérifier l'accessibilité de base (navigation clavier, contrastes).
    *   [ ] Relire attentivement tout le contenu textuel dans les 3 langues.

## Phase 7: Déploiement

*   [ ] Choisir et configurer l'hébergeur statique (*Action requise : Décision finale sur l'hébergeur*).
*   [ ] Configurer le processus de build/déploiement (ex: via Git push sur Netlify/Vercel).
*   [ ] Configurer le nom de domaine personnalisé (*Action requise : Fournir le nom de domaine et accès si besoin*).
*   [ ] Assurer la configuration HTTPS (généralement automatique sur les bons hébergeurs).
*   [ ] Déployer la première version du site.
*   [ ] Effectuer une dernière vérification complète sur l'environnement de production (live).

## Phase 8: Post-Lancement

*   [ ] Soumettre le `sitemap.xml` à Google Search Console et Bing Webmaster Tools.
*   [ ] Mettre en place un outil d'analyse d'audience (si souhaité, en respectant la vie privée).
*   [ ] Préparer une documentation simple pour d'éventuelles mises à jour mineures (si nécessaire).
*   [ ] Archiver le projet et planifier les prochaines étapes (V2 : Actualités, Équipe).