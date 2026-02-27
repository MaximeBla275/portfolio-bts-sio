# Portfolio BTS SIO — Atomic Design Architecture

## Structure

```
atomic-portfolio/
├── assets/css/
│   └── main.css                     # CSS global (variables, marquee, animations)
├── composables/
│   └── useScrollReveal.ts           # Animation scroll reveal
├── data/
│   └── projects.ts                  # Données : projets, stages, compétences, veille
│
├── components/
│   │
│   ├── atoms/                       # ⚛️  Éléments indivisibles
│   │   ├── BaseButton.vue           # Bouton/lien polymorphe (outline, solid, ghost)
│   │   ├── BaseInput.vue            # Champ texte / textarea avec label
│   │   ├── BaseTag.vue              # Badge coloré (scolaire, stage, perso, success…)
│   │   ├── MarqueeLine.vue          # Bandeau défilant infini
│   │   ├── ProgressBar.vue          # Barre de progression accent
│   │   ├── SectionLabel.vue         # Label "— Titre" mono uppercase
│   │   └── StatCounter.vue          # Compteur chiffre + label (hero)
│   │
│   ├── molecules/                   # 🧬  Combinaisons d'atomes
│   │   ├── CompetenceBadge.vue      # Ligne compétence (code + libellé + statut)
│   │   ├── ContactLink.vue          # Carte lien de contact (email, github…)
│   │   ├── FilterBar.vue            # Barre de filtres projets
│   │   ├── NavLink.vue              # Lien de navigation desktop
│   │   ├── SectionHeader.vue        # En-tête de page (label + titre + description)
│   │   └── TechTagList.vue          # Liste de tags technos avec overflow "+N"
│   │
│   ├── organisms/                   # 🦠  Sections autonomes
│   │   ├── AppNav.vue               # Navigation fixe (desktop + burger mobile)
│   │   ├── AppFooter.vue            # Pied de page avec marquee + liens
│   │   ├── CompetenceBloc.vue       # Bloc référentiel (table desktop + cards mobile)
│   │   ├── ContactForm.vue          # Formulaire de contact complet
│   │   ├── ProjectCard.vue          # Carte projet compacte (home)
│   │   ├── ProjectRow.vue           # Ligne projet détaillée (page /projets)
│   │   ├── StageCard.vue            # Carte stage aperçu (home)
│   │   └── StageDetail.vue          # Article stage complet (page /stages)
│   │
│   └── templates/                   # 📐  Structures de mise en page
│       ├── DefaultLayout.vue        # Nav + slot + Footer
│       └── PageWrapper.vue          # <main> avec padding standard pt-28
│
├── layouts/
│   └── default.vue                  # Layout Nuxt (utilise organisms AppNav + AppFooter)
│
└── pages/
    ├── index.vue                    # Homepage
    ├── contact.vue                  # Page contact
    ├── competences.vue              # Tableau compétences
    ├── stages.vue                   # Détail stages + formation
    ├── veille.vue                   # Veille technologique
    └── projets/
        └── index.vue               # Liste projets + filtres
```

## Principes Atomic Design appliqués

| Niveau | Rôle | Exemples |
|--------|------|---------|
| **Atoms** | Un seul rôle, aucune dépendance interne | `BaseButton`, `BaseTag`, `ProgressBar` |
| **Molecules** | Assemblage de 2-3 atomes, logique simple | `TechTagList`, `FilterBar`, `SectionHeader` |
| **Organisms** | Section fonctionnelle complète et autonome | `ProjectCard`, `ContactForm`, `AppNav` |
| **Templates** | Structure de page sans données réelles | `PageWrapper`, `DefaultLayout` |
| **Pages** | Injection des données dans les templates | `index.vue`, `projets/index.vue` |

## Avantages de cette architecture

- **Réutilisabilité** : `BaseTag` est utilisé dans ProjectCard, StageCard, CompetenceBloc…
- **Cohérence visuelle** : les variants de `BaseButton` garantissent un style uniforme
- **Maintenabilité** : modifier `TechTagList` met à jour partout en même temps
- **Testabilité** : chaque atome/molécule peut être testé de façon isolée
- **Scalabilité** : ajouter une nouvelle page = assembler des blocs existants
