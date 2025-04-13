# Product Requirement Document (PRD) - Site Vitrine NADAF

**Version:** 1.1
**Date:** 2023-10-27
**Auteur:** [Votre Nom / Nom de l'Agence]
**Projet:** Création d'un site vitrine statique pour NADAF

## 1. Introduction / Vue d'ensemble

Ce document décrit les exigences pour la création d'un site web vitrine statique pour NADAF, une entreprise algérienne spécialisée dans la récupération et le recyclage de papier et de carton (papier blanc, carton, ouate, cartonnette). L'entreprise est située dans l'Est algérien et emploie une vingtaine de personnes. **Le site a pour but principal d'attirer des fournisseurs de matières premières (papier/carton),** de présenter l'entreprise, ses services, et de faciliter la prise de contact, tout en offrant une visibilité internationale pour d'éventuels clients ou investisseurs. Il sera développé avec le générateur de site statique 11ty et utilisera CSS Grid pour la mise en page.

## 2. Objectifs du Projet

*   **Attraction de Fournisseurs (Objectif Principal):** Positionner NADAF comme un partenaire fiable et efficace pour la collecte des déchets de papier et carton des entreprises algériennes.
*   **Présence en ligne:** Établir une présence web professionnelle pour NADAF.
*   **Information:** Informer les visiteurs (fournisseurs potentiels, clients potentiels, partenaires) sur les activités, les services (collecte, tri) et les types de matériaux acceptés.
*   **Génération de leads:** Faciliter la prise de contact, **principalement pour l'approvisionnement en matières premières.**
*   **Image de marque:** Véhiculer une image d'entreprise moderne, écologique et fiable, en accord avec les couleurs de l'Algérie et les valeurs environnementales.
*   **Visibilité Internationale:** Offrir une vitrine pour d'éventuels clients acheteurs de matière recyclée ou investisseurs étrangers.
*   **Accessibilité:** Rendre l'information accessible via le support multilingue (Français, Arabe, Anglais).

## 3. Public Cible

*   **Primaire :** Entreprises et industries en Algérie générant des déchets de papier et carton (fournisseurs potentiels).
*   **Secondaire :**
    *   Entreprises cherchant à acheter des matières premières recyclées (clients potentiels, notamment à l'international).
    *   Investisseurs potentiels.
    *   Partenaires potentiels (logistique, autres acteurs du recyclage).
    *   Candidats potentiels à l'emploi (via la page contact initialement).
    *   Organismes publics ou privés intéressés par le recyclage en Algérie.

## 4. Exigences Fonctionnelles

### 4.1. Technologie

*   **Générateur de Site Statique:** 11ty (Eleventy)
*   **Langages:** HTML5, CSS3, JavaScript (pour interactions : menu mobile, switch langue, pop-up carte).
*   **Styling:** CSS pur avec utilisation prédominante de CSS Grid pour la mise en page principale.
*   **Responsive Design:** Le site doit être entièrement responsive (mobile, tablette, desktop).

### 4.2. Structure du Site / Pages (Version 1)

Le site comprendra les pages principales suivantes :

1.  **Accueil (Homepage):**
    *   Accroche principale (Hero Header) **orientée vers les fournisseurs** ("Valorisez vos déchets papier/carton avec NADAF", etc.).
    *   Présentation concise de NADAF et de sa mission de recyclage.
    *   Aperçu des services clés (Collecte, Tri, Solutions pour entreprises).
    *   Mise en avant des avantages pour les fournisseurs (fiabilité, conformité, contribution écologique).
    *   Appel à l'action clair (ex: "Demandez une collecte", "Contactez-nous pour vos déchets").
2.  **Services:**
    *   Description détaillée des services proposés :
        *   **Collecte et récupération :** Mettre l'accent sur la facilité et la fiabilité pour les entreprises fournisseuses. Lister clairement les types acceptés (papier blanc, carton, ouate, cartonnette). Préciser la zone géographique couverte (Est algérien).
        *   **Tri et classification :** Expliquer brièvement le processus pour rassurer sur la valorisation.
        *   *(Optionnel V1) Conditionnement :* Mentionner la transformation en balles.
        *   *(Optionnel V1) Destruction d'archives :* Si pertinent, à ajouter comme service spécifique.
    *   Avantages pour les fournisseurs.
3.  **Produits:**
    *   Présentation des matières premières **acceptées** (déchets papier/carton en vrac) et des produits **finis** (balles compressées).
    *   Photos claires des deux états (vrac et balles). Cette page sert aussi à montrer aux clients potentiels la qualité du tri.
4.  **Contact:**
    *   Formulaire de contact (Nom, Entreprise, Email, Téléphone, Type de déchet/Sujet, Message). **Clairement orienté pour une demande de collecte ou d'information fournisseur.**
    *   Coordonnées complètes : Adresse physique, Numéro(s) de téléphone, Adresse e-mail.
    *   Horaires d'ouverture.
    *   Carte de localisation interactive (Google Maps ou équivalent).
5.  **Mentions Légales:**
    *   Informations légales obligatoires.
    *   Politique de confidentialité (RGPD/Loi Algérienne pertinente si applicable).
    *   Conditions d'utilisation.

*Note : Les pages "Actualités" et "Notre Équipe" sont prévues pour une version ultérieure.*

### 4.3. Éléments d'Interface Utilisateur (UI)

*   **Top Bar (Nouvel élément - Au-dessus de la Navbar):**
    *   Positionnée tout en haut de la page, toujours visible ou statique.
    *   Contient des informations de contact directes et la localisation :
        *   Icône Localisation + Texte court (ex: "Est Algérien"). **Au survol de cet élément (texte ou icône), une petite carte simple (image statique ou intégration Leaflet/Mapbox légère dans un pop-up/tooltip) montrant l'emplacement précis doit apparaître.**
        *   Icône Email + Adresse email cliquable (`mailto:`).
        *   Icône Téléphone + Numéro de téléphone cliquable (`tel:`).
*   **Navbar (Barre de navigation principale):**
    *   Positionnée sous la Top Bar (peut être sticky/fixe).
    *   À gauche : Logo NADAF + Nom "NADAF".
    *   À droite : Menu de navigation (Accueil, Services, Produits, Contact).
    *   Sélecteur de langue (Dropdown ou icônes FR/AR/EN).
    *   Adaptation pour mobile (menu burger).
*   **Hero Header (Section d'accueil principale):**
    *   Image de fond impactante (ex: photo de qualité montrant des balles de papier/carton recyclé, ou une image évoquant le recyclage/l'écologie en Algérie).
    *   Titre accrocheur orienté fournisseur.
    *   Court texte de présentation.
    *   Bouton d'appel à l'action principal (vers page contact/services).
*   **Sections d'information (Multi-colonnes):**
    *   Utilisation de CSS Grid pour organiser le contenu (services sur l'accueil, types de produits, etc.).
    *   Style "cartes" (cards) pour présenter les éléments de manière visuelle et structurée.
*   **Footer (Pied de page):**
    *   Rappel des informations de contact (téléphone, email).
    *   Liens vers : Mentions Légales, Politique de confidentialité.
    *   Liens vers les réseaux sociaux : **Facebook** (obligatoire), **LinkedIn** (à prévoir, inclure l'icône).
    *   Copyright NADAF © [Année].

### 4.4. Contenu

*   **Textes:** Contenu initial fourni par le développeur (vous). Ton de communication **orienté vers la proposition de valeur pour les fournisseurs**, tout en restant professionnel pour les autres cibles.
*   **Images:** Images fournies (locaux, processus si possible, **déchets papier/carton en vrac**, **balles compressées**). Optimisation web nécessaire.
*   **Multilinguisme:**
    *   Structure technique à prévoir dès le début avec 11ty (ex: via des dossiers par langue ou des fichiers de données).
    *   Langues : **Français (défaut), Arabe, Anglais.**
    *   Les traductions devront être fournies (par qui ? À définir : NADAF ou le développeur si convenu).

### 4.5. Design et Apparence

*   **Palette de couleurs:** Vert, Blanc, Orange. Proposer des nuances spécifiques (ex: Vert inspiré du drapeau algérien ou un vert "nature", Orange comme couleur d'accent).
*   **Typographie:**
    *   **Suggestion :**
        *   Titres (h1, h2, h3...): **Montserrat** (Google Font) - Moderne, lisible, plusieurs graisses disponibles.
        *   Corps de texte (paragraphes): **Lato** ou **Open Sans** (Google Fonts) - Très lisibles, neutres et professionnels.
    *   Assurer une bonne lisibilité et hiérarchie visuelle.
*   **Inspiration:** S'inspirer des mises en page (Almadar, Revibat) tout en créant une identité propre à NADAF, notamment avec la Top Bar et l'orientation fournisseur.

### 4.6. SEO (Référencement Naturel)

*   Balises HTML sémantiques.
*   Balises `title` et `meta description` uniques et optimisées (**incluant des mots-clés liés à la collecte de déchets papier/carton en Algérie, recyclage, fournisseur déchets**).
*   Attributs `alt` descriptifs pour les images.
*   Structure d'URL propre (ex: `/fr/services/collecte/`, `/ar/contact/`).
*   Génération `sitemap.xml`.
*   Fichier `robots.txt`.

## 5. Exigences Non-Fonctionnelles

*   **Performance:** Optimisation pour un chargement rapide.
*   **Sécurité:** Bonnes pratiques pour un site statique.
*   **Maintenabilité:** Code propre, bien structuré dans 11ty.
*   **Compatibilité Navigateurs:** Dernières versions de Chrome, Firefox, Safari, Edge.
*   **Hébergement:** Sera déployé sur un hébergeur de sites statiques (détails à définir ultérieurement).

## 6. Assets Fournis

*   Logo NADAF.
*   Captures d'écran des sites d'inspiration.
*   Contenu textuel initial (par le développeur).
*   Photos disponibles (vrac, balles, etc.).

## 7. Questions Ouvertes / Points à Clarifier

*   ~~Contenu Textuel: Qui est responsable ?~~ -> Développeur (OK).
*   ~~Images: Disponibles ?~~ -> Oui (OK).
*   ~~Produits: Vrac -> Balles~~ (OK).
*   ~~Actualités / Équipe:~~ -> Postponed V2 (OK).
*   ~~Langues:~~ -> FR/AR/EN (OK).
*   ~~Hébergement:~~ -> Statique, TBD (OK).
*   ~~Réseaux Sociaux:~~ -> Facebook (+ LinkedIn à prévoir) (OK).
*   **Adresse e-mail exacte** pour la réception des soumissions du formulaire de contact ?
*   **Qui fournira les traductions** finales pour l'Arabe et l'Anglais ?
*   Préférences pour les **nuances exactes de Vert / Orange** ou validation de propositions ?
*   Validation des **polices suggérées** (Montserrat / Lato ou Open Sans) ?
*   **Implémentation de la carte au survol :** Une simple image statique dans un tooltip est-elle suffisante, ou faut-il une mini-carte interactive (plus complexe) ?
*   **Nom de domaine** : Est-il déjà réservé ?

## 8. Livrables

*   Code source complet du site 11ty.
*   Fichiers du site statique générés.
*   Documentation de base pour la mise à jour du contenu (si structure simple via Markdown/Data files).

## 9. Considérations Futures (Optionnel)

*   Activation des pages Actualités et Notre Équipe.
*   Intégration d'un CMS headless pour faciliter la gestion de contenu par NADAF.
*   Ajout de témoignages (fournisseurs satisfaits).

## 10. Mesure du Succès

*   Mise en ligne du site fonctionnel et conforme au PRD.
*   **Augmentation mesurable des demandes de contact qualifiées provenant de fournisseurs potentiels.**
*   Bonnes performances web.
*   Retour positif de NADAF.