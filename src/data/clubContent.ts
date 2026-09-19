export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'Tournois' | 'Entraînements' | 'Ambiance' | 'Vie du club';
  description: string;
}

export const clubData = {
  name: {
    short: "AUCA Échecs",
    full: "Club Sportif Amal Itihad Achbal Annaba",
    arabic: "النادي الرياضي أمل اتحاد أشبال عنابة",
    tagline: "Section Échecs Annaba",
  },
  contact: {
    coachName: "Monsieur Kheir Eddine Bentboula",
    coachShort: "M. Bentboula",
    coachTitle: "Entraîneur d'échecs",
    phone: "0669 54 66 80",
    phoneRaw: "0669546680",
    phoneDisplay: "0669 54 66 80",
    city: "Annaba",
    wilaya: "Annaba, Algérie",
    locationNote: "Lieu et salle communiqués directement par l'entraîneur selon l'affectation par niveau.",
  },
  pricing: {
    monthlyFee: "1 500 DA",
    frequency: "par mois",
    documents: [
      "Extrait de naissance",
      "Photos d'identité",
    ],
  },
  centers: [
    {
      id: "hachemi-smain",
      name: "Centre Culturel Hachemi Smaïn",
      nameArabic: "المركز الثقافي الهاشمي سماعين",
      district: "La Colonne (حي لاكولون)",
      landmark: "Derrière la mosquée Al Fourqane",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mosquée+El+Fourqane+Annaba+La+Colonne",
      sessions: [
        {
          category: "Jeunes / Enfants (الأصاغر)",
          day: "Vendredi",
          time: "14h30 – 16h30",
          description: "Initiation, perfectionnement tactique et pratique encadrée.",
          badge: "Vendredi",
        },
        {
          category: "Seniors / Adultes (الأكابر)",
          day: "Samedi",
          time: "16h15 – 18h00",
          description: "Entraînements avancés, analyse de variantes & jeu compétitif (Groupes 1 & 2).",
          badge: "Samedi",
        },
      ],
    },
    {
      id: "allat-5-juillet",
      name: "Centre Culturel Chahid Messaoud Allat",
      nameArabic: "المركز الثقافي الشهيد مسعود علاط",
      district: "Cité 5 Juillet (Les Hongrois)",
      landmark: "Maison de jeunes municipale",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Maison+de+jeunes+Allat+Messoud+5+juillet+Annaba",
      sessions: [
        {
          category: "Moins de 17 ans (-17 ans / أقل من 17 سنة)",
          day: "Vendredi",
          time: "14h30 – 16h15",
          description: "Séance hebdomadaire dédiée aux adolescents et jeunes talents.",
          badge: "Vendredi",
        },
      ],
    },
  ],
  schedules: [
    {
      day: "Vendredi",
      time: "14h30 – 16h30",
      description: "Séances Jeunes au Centre Culturel Hachemi Smaïn (14h30-16h30) et Moins de 17 ans au Centre Allat - 5 Juillet (14h30-16h15).",
      badge: "Après-midi",
    },
    {
      day: "Samedi",
      time: "16h15 – 18h00",
      description: "Séances Adultes & Seniors au Centre Culturel Hachemi Smaïn (Groupes 1 & 2).",
      badge: "Après-midi",
    },
  ],
  benefits: [
    {
      id: "progress",
      title: "PROGRESSER",
      description: "Apprenez les fondamentaux, améliorez votre stratégie et développez votre niveau de jeu pas à pas.",
      icon: "TrendingUp",
    },
    {
      id: "competition",
      title: "COMPÉTITION",
      description: "Participez à des tournois et mesurez votre progression face à d’autres joueurs dans une émulation stimulante.",
      icon: "Trophy",
    },
    {
      id: "reflection",
      title: "RÉFLEXION",
      description: "Les échecs développent la concentration, la logique, la mémoire et la capacité à prendre des décisions réfléchies.",
      icon: "Brain",
    },
    {
      id: "community",
      title: "COMMUNAUTÉ",
      description: "Rejoignez une communauté bienveillante et passionnée, et partagez des moments d'échange stimulants.",
      icon: "Users",
    },
  ],
  activities: [
    {
      title: "Cours d'échecs",
      description: "Étude des principes stratégiques fondamentaux, structures de pions, ouvertures et finales.",
    },
    {
      title: "Entraînements pratiques",
      description: "Exercices tactiques intensifs, résolution d'énigmes et parties d'entraînement chronométrées.",
    },
    {
      title: "Tournois réguliers",
      description: "Des tournois sont organisés régulièrement tout au long de la saison pour vivre la compétition.",
    },
    {
      title: "Rencontres amicales",
      description: "Parties libres conviviales entre membres pour échanger, analyser et pratiquer sans stress.",
    },
    {
      title: "Activités & Ateliers",
      description: "Ateliers thématiques spécifiques pour jeunes et adultes adaptés au rythme de chacun.",
    },
    {
      title: "Événements du club",
      description: "Moments forts, remises de distinctions et rassemblements sportifs festifs de l'AUCA.",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      image: "/photos/club-match-1.jpeg",
      title: "Parties en salle de tournoi",
      category: "Tournois",
      description: "Jeunes joueurs et joueuses en pleine confrontation lors des rondes du club.",
    },
    {
      id: "gal-2",
      image: "/coach.jpeg",
      title: "Monsieur Bentboula en séance pédagogique",
      category: "Entraînements",
      description: "Explications tactiques et accompagnement personnalisé des jeunes par l'entraîneur.",
    },
    {
      id: "gal-3",
      image: "/photos/club-match-duel.jpeg",
      title: "Duel sous contrôle de la pendule",
      category: "Tournois",
      description: "Concentration extrême et gestion du temps lors d'une partie décisive.",
    },
    {
      id: "gal-4",
      image: "/photos/club-library.jpeg",
      title: "Étude & entraînement en bibliothèque",
      category: "Vie du club",
      description: "Un cadre studieux propice à la réflexion profonde et à l'analyse échiquéenne.",
    },
    {
      id: "gal-5",
      image: "/photos/club-match-2.jpeg",
      title: "Le sérieux des jeunes talents",
      category: "Tournois",
      description: "Application rigoureuse des règles de tournoi sous le regard des arbitres du club.",
    },
    {
      id: "gal-6",
      image: "/photos/club-pairings.jpeg",
      title: "Affichage des résultats et appariements",
      category: "Vie du club",
      description: "L'effervescence sportive des jeunes joueurs impatients de découvrir leurs prochains adversaires.",
    },
    {
      id: "gal-7",
      image: "/photos/club-fide-sheet.jpeg",
      title: "Organisation & Feuilles officielles AUCA",
      category: "Vie du club",
      description: "Rigueur administrative et sportive aux standards officiels des échecs.",
    },
  ] as GalleryItem[],
};
