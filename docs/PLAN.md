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

## Phase 4 : Bloc unique initial Horaires, Tarifs & Finalisation (Obsolète)

*Remplacée et actualisée par les Phases 5 et 6 suite au déploiement du nouveau programme sur deux centres culturels et à la révision tarifaire.*

---

## Phase 5 : Données des 2 centres, Cotisation unique (1 500 DA) & Cohérence globale (SEO/FAQ)

**User stories** : US-4, US-5

### Ce qu'on livre

Modèle de données enrichi dans `src/data/clubContent.ts` avec les deux centres culturels partenaires à Annaba (adresses, repères locaux, créneaux détaillés et coordonnées), mise à jour du tarif officiel à 1 500 DA / mois, actualisation de la FAQ et des données structurées JSON-LD Schema.org dans `index.html`.

### Critères d'acceptation

- [x] `src/data/clubContent.ts` intègre les 2 centres (Centre Culturel Hachemi Smaïn & Centre Culturel Chahid Messaoud Allat) et le tarif unique de 1 500 DA.
- [x] La FAQ (`FAQSection.tsx`) reflète fidèlement les nouveaux créneaux (Vendredi et Samedi) et les 2 implantations.
- [x] Les métadonnées SEO Schema.org (`index.html`) affichent la fourchette de prix de 1 500 DZD sans aucune mention de 2 000 DZD.

## Bloquée par

Phase 3

---

## Phase 6 : Interface utilisateur des 2 Centres Culturels & Créneaux (Hero & Section Adhésion)

**User stories** : US-1, US-2, US-3, US-4, US-5

### Ce qu'on livre

Refonte complète du bloc d'adhésion (`RegistrationSection.tsx`) pour afficher deux cartes soignées représentant les 2 centres culturels à Annaba, leurs tranches respectives (Jeunes le vendredi, Moins de 17 ans le vendredi, Seniors le samedi en 2 groupes), leurs repères géographiques avec boutons d'itinéraire Maps, l'encadré vibrant de la cotisation unique à 1 500 DA / mois, et la mise à jour de l'en-tête du Hero (`Hero.tsx`).

### Critères d'acceptation

- [x] L'en-tête Hero mentionne « Vendredi & Samedi • 2 Centres à Annaba ».
- [x] Le bloc d'adhésion affiche distinctement le Centre Culturel Hachemi Smaïn (La Colonne) et le Centre Culturel Messaoud Allat (5 Juillet - Les Hongrois).
- [x] Tous les créneaux sont affichés de façon limpide (Vendredi 14h30-16h30 Jeunes, Samedi 16h15-18h00 Seniors, Vendredi 14h30-16h15 -17 ans).
- [x] Le tarif de 1 500 DA / mois est mis en valeur avec clarté.
- [x] Des liens directs vers Google Maps permettent aux familles de localiser chaque centre.
- [x] L'application compile sans aucune erreur (`npm run build`).

## Bloquée par

Phase 5
