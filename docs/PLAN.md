# Plan : Refonte épurée, performante et lumineuse AUCA Échecs Annaba

> PRD source : docs/PRD.md

## Décisions architecturales

Décisions durables qui s'appliquent à l'ensemble du projet :

- **Structure de page** : Single Page Application (SPA) épurée, sans pagination ni sous-pages superflues, avec défilement fluide et ancres directes.
- **Régime visuel & Design System (Charte Officielle AUCA)** :
  - **Blason unique** : Intégration stricte du blason au Lion officiel (`logo-auca-lion.jpg`). Élimination de tout faux logo.
  - **Dominante claire & institutionnelle** : Fond blanc pur (`#FFFFFF`) et surfaces blanc cassé (`#F8FAFC`).
  - **Couleur signature** : Bleu Roi officiel AUCA (`#0B4EA2` / `#083B7B`) pour les boutons, titres majeurs et éléments d'action.
  - **Alternance dynamique 50/50** : Une grande photo authentique / un bloc de texte percutant (disposition en zigzag asymétrique sans grilles répétitives).
- **Performance & Élimination des lenteurs** :
  - Favicon SVG ultra-léger (< 2 Ko) reprenant le médaillon au Lion en Bleu Roi.
  - Polices Google Fonts limitées aux graisses essentielles avec `display=swap`.
  - Chargement différé (`loading="lazy"`, `decoding="async"`) pour toutes les images sous le pli de départ.
- **Canal de conversion unique** : Le numéro direct de l'entraîneur Monsieur Bentboula (`0669 54 66 80`) accessible immédiatement depuis la barre de navigation, le hero, et un bouton tactile permanent sur smartphone.

---

## Phase 1 : Fondations de performance, logo au Lion & palette Bleu Roi

**User stories** : US-1, US-4

### Ce qu'on livre

Intégration du nouveau logo officiel au Lion (`logo-auca-lion.jpg`), suppression définitive des anciens logos et déclinaison d'un favicon optimisé. Configuration du design system Tailwind sur une palette Bleu Roi et surfaces claires.

### Critères d'acceptation

- [x] L'icône de l'onglet affiche le blason au Lion AUCA en Bleu Roi et Blanc.
- [x] Aucun ancien visuel parasite (ballon de foot, cavalier doré) n'est présent.
- [x] Le score de premier affichage (First Contentful Paint) est quasi instantané.

## Bloquée par

Aucune — complétée.

---

## Phase 2 : Hero éditorial lumineux & CTA direct d'appel

**User stories** : US-1, US-2, US-4, US-5

### Ce qu'on livre

Refonte complète du premier écran sur fond blanc et trame d'échiquier subtile. En-tête avec le blason au Lion, proposition de valeur limpide du club, mise en valeur d'une vraie photo de partie d'échecs et bouton d'appel direct Bleu Roi vers l'entraîneur.

### Critères d'acceptation

- [x] La barre de navigation affiche le véritable blason au Lion et le bouton d'appel rapide.
- [x] Le premier écran présente une photo réelle en grand format avec contrastes soignés sur fond clair.
- [x] Le bouton d'appel direct permet de lancer l'appel vers M. Bentboula en 1 tap.

## Bloquée par

Phase 1

---

## Phase 3 : Rythme alterné Jeunesse & Encadrement (Photo / Contenu)

**User stories** : US-2, US-5

### Ce qu'on livre

Mise en page éditoriale alternée sur fond clair :
1. Tranche 1 : Grande photo de duel des enfants en tournoi d'un côté / Bloc synthétique sur les bienfaits des échecs et l'apprentissage de l'autre.
2. Tranche 2 (inversée) : Bloc de présentation de la pédagogie de Monsieur Bentboula / Portrait et photo des séances d'analyse tactique.
3. Tranche 3 : Photos des rondes officielles et appariements / Pratique compétitive et accueil des adultes.

### Critères d'acceptation

- [x] Zéro grille saturée de cartes identiques : mise en page asymétrique et aérée.
- [x] Toutes les photos affichées sont authentiques et valorisent le club.
- [x] Typographie contrastée et lisible conforme aux standards WCAG AA.

## Bloquée par

Phase 2

---

## Phase 4 : Bloc unique consolidé Horaires, Tarifs & Finalisation

**User stories** : US-3, US-4

### Ce qu'on livre

Module unifié Horaires, Tarifs, Inscription et Documents sur fond clair avec carte de cotisation mise en valeur :
- Créneaux nets : Mardi (17h00) & Samedi (10h00).
- Cotisation officielle : 2 000 DA / mois.
- Pièces à fournir (Extrait de naissance, photos).
- Grand bouton d'action téléphonique pour réserver sa place auprès de l'entraîneur.
- Pied de page minimaliste avec rappel des coordonnées et blason au Lion.

### Critères d'acceptation

- [x] L'utilisateur trouve le tarif et les horaires dans un seul et même endroit sans scroller dans le vide.
- [x] Le pied de page est épuré avec le véritable logo officiel.
- [x] Le bouton flottant d'appel reste accessible et fluide sur mobile tout au long de la visite.

## Bloquée par

Phase 3
