export const stats = [
  {
    label: 'Aktive Tiere',
    value: 128,
    delta: '+5 vs. letzter Monat',
    icon: '🦎',
  },
  {
    label: 'Geplante Verpaarungen',
    value: 12,
    delta: '3 im Januar',
    icon: '🧬',
  },
  {
    label: 'Offene Adoptionen',
    value: 7,
    delta: '2 neue Anfragen',
    icon: '📬',
  },
  {
    label: 'Futter & Pflege Tasks',
    value: 34,
    delta: '18 fällig heute',
    icon: '🗓️',
  },
];

export const animals = [
  {
    id: 'FZX-312',
    name: 'Aurora',
    species: 'Pantherophis guttatus',
    morph: 'Charcoal Motley',
    age: '2 Jahre',
    weight: '420 g',
    status: 'Zucht',
    caretaker: 'Lena B.',
  },
  {
    id: 'FZX-205',
    name: 'Nova',
    species: 'Pogona vitticeps',
    morph: 'Red Hypo Het. Trans',
    age: '11 Monate',
    weight: '380 g',
    status: 'Verfügbarkeit prüfen',
    caretaker: 'Chris M.',
  },
  {
    id: 'FZX-411',
    name: 'Zephyr',
    species: 'Eublepharis macularius',
    morph: 'Black Night',
    age: '3 Jahre',
    weight: '72 g',
    status: 'In Quarantäne',
    caretaker: 'Mara K.',
  },
  {
    id: 'FZX-118',
    name: 'Solaris',
    species: 'Furcifer pardalis',
    morph: 'Ambilobe Blue Bar',
    age: '18 Monate',
    weight: '145 g',
    status: 'Showcase',
    caretaker: 'Jan M.',
  },
];

export const adoptionRequests = [
  {
    name: 'Kim Weigel',
    animal: 'Nova – Bartagame',
    submitted: 'vor 2 Tagen',
    message: 'Wir suchen ein zutrauliches Tier für unsere Familie, gerne Beratung zum Setup.',
  },
  {
    name: 'David Schuster',
    animal: 'Zephyr – Leopardgecko',
    submitted: 'vor 5 Stunden',
    message: 'Interesse an Abgabe zum Monatsende, Fragen zur Fütterung.',
  },
];

export const tasks = [
  {
    title: 'Feuchtigkeit Terrarium Aurora prüfen',
    due: 'Heute, 11:00',
    type: 'Pflege',
  },
  {
    title: 'Quarantäneprotokoll Zephyr aktualisieren',
    due: 'Heute, 14:30',
    type: 'Medizin',
  },
  {
    title: 'Social-Media-Post für neue Nachzuchten',
    due: 'Morgen, 09:00',
    type: 'Marketing',
  },
];

export const timeline = [
  {
    title: 'Neuer Blogpost veröffentlicht',
    detail: '„Farbmorph-Guide für Kornnattern“ wurde live gestellt.',
    time: 'vor 1 Stunde',
  },
  {
    title: 'Adoption abgeschlossen',
    detail: 'Bartagame „Lumi“ wurde erfolgreich vermittelt.',
    time: 'Gestern, 17:40',
  },
  {
    title: 'Neuer Benutzer angelegt',
    detail: 'Pflegekraft „Theresa“ mit Rechten für Tiere & Adoption.',
    time: 'Gestern, 09:15',
  },
];

export const contentBlocks = [
  {
    title: 'Hero Abschnitt',
    description: 'Steuere den ersten Eindruck deiner Startseite – Title, Unterzeile und Call-to-Action.',
    fields: [
      { label: 'Titel', value: 'FeroxZ Reptile Sanctuary' },
      { label: 'Untertitel', value: 'Seltene Farbvarianten verantwortungsvoll gezüchtet.' },
      { label: 'CTA-Link', value: '/adoption' },
    ],
  },
  {
    title: 'Über uns',
    description: 'Hintergrundinformationen, Vision und Haltungsschwerpunkte.',
    fields: [
      { label: 'Intro', value: 'Seit 2014 züchten wir morphologisch besondere Reptilienlinien mit Fokus auf Tierwohl.' },
      { label: 'Highlights', value: 'Zertifizierte Haltung, Labor-gestützte Genetik, europaweites Netzwerk.' },
    ],
  },
  {
    title: 'Footer',
    description: 'Kontakt, Social Links und Pflichtangaben.',
    fields: [
      { label: 'E-Mail', value: 'kontakt@feroxz.de' },
      { label: 'Instagram', value: '@feroxz_reptiles' },
      { label: 'Impressum-Link', value: '/impressum' },
    ],
  },
];
