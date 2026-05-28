export const site = {
  name: "Autoškola Lukáš Kápar",
  slogan: "Bezpečně s námi",
  phone: "+420 721 574 907",
  phoneRaw: "00420721574907",
  email: "info@autoskolakapar.cz",
  address: "Husova 548, Trhové Sviny, 37401",
  addressNote: "areál SOU Trhové Sviny",
  bankAccount: "43-450440257/0100",
  contactPerson: "Marta Sokolíková",
  nextCourse: "02.06.2026",
  pricingValidFrom: "10.05.2026",
}

export const stats = [
  { value: 10, suffix: "+", label: "let praxe" },
  { value: 1000, prefix: "~", label: "absolventů" },
  { value: 9, label: "kategorií" },
]

export const usps = [
  {
    title: "Transparentní ceny",
    desc: "Žádné skryté poplatky ani nepříjemná překvapení. Vše vidíte předem.",
  },
  {
    title: "Individuální tempo",
    desc: "Přizpůsobujeme výuku vašim potřebám. Netlačíme na zbytečné jízdy navíc.",
  },
  {
    title: "Srozumitelná výuka",
    desc: "Klidné vedení a praktická příprava pro běžný provoz na silnicích.",
  },
  {
    title: "Moderní studijní materiály",
    desc: "Aktuální učebnice, online testy a aplikace Moje autoškola zdarma.",
  },
]

export const categories = [
  {
    code: "AM",
    name: "Moped",
    age: "15+",
    desc: "Mopedy a lehké motocykly omezené na 45 km/h",
  },
  {
    code: "A1",
    name: "Lehká motorka",
    age: "16+",
    desc: "Lehké motocykly s postranním vozíkem nebo bez něj, výkon max. 11 kW",
  },
  {
    code: "A2",
    name: "Střední motorka",
    age: "18+",
    desc: "Motocykly se středním výkonem do 35 kW",
  },
  {
    code: "A",
    name: "Plný řidičák",
    age: "20–24+",
    desc: "Motocykly bez omezení výkonu",
  },
  {
    code: "B",
    name: "Osobní auto",
    age: "17+",
    desc: "Osobní vozidla do 3 500 kg — nejoblíbenější kategorie",
  },
  {
    code: "B+E",
    name: "Auto s přívěsem",
    age: "18+",
    desc: "Vozidlo skupiny B s přívěsem, celková hmotnost do 7 000 kg",
  },
  {
    code: "C",
    name: "Nákladní auto",
    age: "21+",
    desc: "Těžká nákladní vozidla nad 3 500 kg",
  },
  {
    code: "C+E",
    name: "Nákladní souprava",
    age: "21+",
    desc: "Jízdní souprava složená z vozidla skupiny C a přípojného vozidla",
  },
  {
    code: "T",
    name: "Traktor",
    age: "17+",
    desc: "Traktory a samojízdné pracovní stroje",
  },
]

export const pricing = {
  motorcycles: [
    {
      code: "AM",
      flexi: 12900,
      standard: 13900,
      premium: 15500,
      individual: true,
      extra: 500,
    },
    {
      code: "A1",
      flexi: 13500,
      standard: 14500,
      premium: 15900,
      individual: true,
      extra: 500,
    },
    {
      code: "A2",
      flexi: 15500,
      standard: 16900,
      premium: 18300,
      individual: true,
      extra: 500,
      upgrades: [
        { label: "Rozšíření z A1 (méně než 2 roky)", price: 10500 },
        { label: "Rozšíření z A1 (více než 2 roky)", price: 7900 },
      ],
    },
    {
      code: "A",
      flexi: 15500,
      standard: 16900,
      premium: 18300,
      individual: true,
      extra: 500,
      upgrades: [
        { label: "Rozšíření z A1", price: 10500 },
        { label: "Rozšíření z A2 (méně než 2 roky)", price: 10500 },
        { label: "Rozšíření z A2 (více než 2 roky)", price: 7900 },
      ],
    },
  ],
  cars: [
    {
      code: "B",
      flexi: 20900,
      standard: 22900,
      premium: 24900,
      individual: true,
      extra: 500,
      note: "Sleva 1 000 Kč pro studenty SOŠ/Gymnázia Trhové Sviny",
      upgrades: [
        { label: "Rozšíření B96", price: 7900 },
      ],
    },
    {
      code: "B+E",
      standard: 9500,
      accelerated: 11900,
      extra: 600,
      note: "Zrychlený kurz (2 týdny): 11 900 Kč",
    },
    {
      code: "C",
      standard: 36000,
    },
    {
      code: "C+E",
      standard: 28000,
    },
    {
      code: "T",
      standard: 16900,
      upgrades: [
        { label: "Rozšíření z B", price: 12900 },
      ],
    },
  ],
  bundles: [
    { label: "A2 + B", price: 37100, discount: 2700 },
    { label: "A2 + B + T", price: 52700, discount: 4000 },
    { label: "A + B + T", price: 52700, discount: 4000 },
    { label: "A + B+E", price: 24100, discount: 2700 },
    { label: "A + B+E + T", price: 35700, discount: 4000 },
    { label: "B + T", price: 37100, discount: 2700 },
    { label: "B+E + T", price: 20100, discount: 2700 },
  ],
  examFees: [
    { label: "První zkouška", price: 700 },
    { label: "Opakování teorie", price: 100 },
    { label: "Opakování konstrukce (pouze C/C+E)", price: 200 },
    { label: "Opakování jízdy", price: 400 },
  ],
  retraining: [
    { label: "Nová teorie", price: 5000 },
    { label: "Výcvik motocykl", price: 10500 },
    { label: "Výcvik B+E / T", price: 8500 },
    { label: "Výcvik skupina B / T", price: 17900 },
    { label: "Výcvik skupina C", price: 35000 },
    { label: "Výcvik skupina C+E", price: 25000 },
  ],
  other: [
    { label: "Přestup z jiné autoškoly (administrativní)", price: 3000 },
    { label: "Neomluvená absence (nutné zrušit 24 h předem)", price: 500 },
  ],
  loyalty: [
    { course: "2. kurz", discount: 1000 },
    { course: "3. kurz", discount: 1500 },
    { course: "4. kurz", discount: 2000 },
  ],
}

export const conditioning = {
  intro: "Nabízíme kondiční jízdy skupin A2, A, B a B+E.",
  desc: "Na přání zákazníka nabízíme oživení nebo vylepšení řidičských dovedností např. parkování, cesta do zaměstnání, jízda s automatickou převodovkou, v hustém provozu, s přívěsem, za snížené viditelnosti, na dálnici, ve větším městě (České Budějovice, Praha).",
  beDesc: "U skupiny B+E nabízíme nácvik couvání a jízdu s nákladním vozidlem do 3 500 kg a případně s přípojným vozidlem s celkovou hmotností nad 750 kg.",
  note: "Před kondiční jízdou je nutné znát totožnost zákazníka a vlastněné skupiny ŘO.",
  motorcycle: [
    { label: "Kondiční jízda A2–A (cvičiště)", duration: "60 min", price: 1000 },
    { label: "Kondiční jízda A2–A (provoz)", duration: "60 min", price: 800 },
    { label: "Kondiční jízda A2–A (vlastní motocykl)", duration: "60 min", price: 600 },
  ],
  carB: [
    { label: "Kondiční jízda B", duration: "60 min", price: 1200 },
    { label: "Kondiční jízda B", duration: "5 × 60 min", price: 5200 },
    { label: "Kondiční jízda B", duration: "10 × 60 min", price: 9500 },
  ],
  carBE: [
    { label: "Kondiční jízda B+E", duration: "60 min", price: 1300 },
    { label: "Kondiční jízda B+E", duration: "5 × 60 min", price: 5500 },
    { label: "Kondiční jízda B+E", duration: "10 × 60 min", price: 10500 },
  ],
}

export const courseDates = [
  { year: 2026, month: 5, day: 2, label: "Červen 2026" },
]

export const l17 = {
  intro:
    "Program L17 umožňuje řídit osobní automobil od 17 let pod dohledem zkušeného mentora. Platí od 1. ledna 2024 na základě zákona 361/2000 Sb.",
  requirements: [
    "Absolvování autoškoly skupiny B a složení závěrečných zkoušek",
    "Konkrétní mentor musí mít alespoň 10 let řidičský průkaz skupiny B",
    "Mentor nesmí mít v posledních 5 letech uložen zákaz řízení",
    "Mentor musí mít nulový bodový záznam",
    "Mentor sedí na místě spolujezdce a aktivně dohlíží na jízdu",
    "Mentor nesmí být pod vlivem alkoholu",
  ],
  rules: [
    "Až 4 mentoři na jednoho mladého řidiče",
    "Informace se zapisují do dokladů obou stran",
    "Platí pouze na území České republiky",
    "Od 17 let lze samostatně řídit motocykly A1 s automatickou převodovkou a vozidla B1",
  ],
}

export const studyMaterials = [
  {
    title: "Učebnice Autoškola? Pohodlně!",
    desc: "Každý student obdrží výpůjčku aktuálního vydání učebnice a přístup k online verzi. Aktualizována 2× ročně — unikát mezi českými autoškolami.",
  },
  {
    title: "Online testování — autoskola-testy.cz",
    desc: "Bezplatný přístup k testovacímu portálu s podrobným vyhodnocením, statistikami úspěšnosti a přehledně seřazenými okruhy otázek.",
  },
  {
    title: "Aplikace Moje autoškola",
    desc: "Digitální studijní prostředí s výukovými videi, cvičnými testy a studentským portálem pro přehled o průběhu kurzu.",
  },
]

export const navLinks = [
  { label: "Kurzy", href: "/kurzy" },
  { label: "Ceník", href: "/cenik" },
  { label: "Termíny", href: "/terminy" },
  { label: "Služby", href: "/sluzby" },
  { label: "Studijní materiály", href: "/studijni-materialy" },
  { label: "Kontakt", href: "/kontakt" },
]
