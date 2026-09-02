export const site = {
  name: 'PANIFICIO ELENA – Bottega dei Sapori Toscani',
  url: 'https://bottegadielena.it',
  phone: '+39 327 003 4324',
  phoneHref: 'tel:+393270034324',
  email: 'info@bottegadielena.it',
  emailHref: 'mailto:info@bottegadielena.it',
  legalName: 'ELENA S.R.L.S.',
  company: {
    vatNumber: '07332190482',
    taxCode: '07332190482',
    businessRegister: 'Registro Imprese di Firenze',
    rea: 'FI-696235',
    pec: 'elenasrls2024@pec.it',
    pecHref: 'mailto:elenasrls2024@pec.it',
  },
  address: {
    street: 'Via Masaccio 16 R/B',
    postalCode: '50132',
    city: 'Firenze',
    region: 'FI',
    country: 'IT',
    note: 'altezza civico 184',
  },
  hours: [
    { label: 'Lunedì–Venerdì', display: '7:30–14:00 / 16:00–19:30', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ranges: [{ opens: '07:30', closes: '14:00' }, { opens: '16:00', closes: '19:30' }] },
    { label: 'Sabato', display: '9:00–13:30', days: ['Saturday'], ranges: [{ opens: '09:00', closes: '13:30' }] },
    { label: 'Domenica', display: 'Chiuso', days: ['Sunday'], ranges: [] },
  ],
  elena: { enabled: false, url: '', label: 'Fai la spesa con PANIFICIO ELENA' },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/prodotti/', label: 'Prodotti' },
    { href: '/pane-forno-coverciano/', label: 'Il pane' },
    { href: '/frutta-e-verdura/', label: 'Frutta e verdura' },
    { href: '/storia/', label: 'La storia' },
    { href: '/dove-siamo/', label: 'Dove siamo' },
  ],
};

export const categories = [
  { title: 'Pane del Forno Coverciano', href: '/pane-forno-coverciano/', eyebrow: 'Le nostre radici', text: 'Pane fresco, schiacciate e specialità da forno della piccola impresa familiare da cui è iniziata la nostra storia.' },
  { title: 'Salumi e formaggi', href: '/salumi-e-formaggi/', eyebrow: 'Al banco', text: 'Una selezione che unisce sapori toscani, grandi classici e prodotti scelti con attenzione.' },
  { title: 'Frutta e verdura', href: '/frutta-e-verdura/', eyebrow: 'Secondo stagione', text: 'L’assortimento cambia con la stagione, la disponibilità e soprattutto con il sapore.' },
  { title: 'Vini sfusi', href: '/vini-sfusi/', eyebrow: 'Da portare a tavola', text: 'Vini sfusi, tra cui Traminer e Ribolla Gialla, insieme a una selezione di bottiglie.' },
];

export const products = {
  pane: ['Filoncino toscano', 'Panaccio', 'Panaccio integrale', 'Filone pugliese', 'Ciabatta', 'Multicereale', 'Amaranto', 'Filone integrale', 'Grani antichi', 'Panini 5 cereali'],
  schiacciate: ['Schiacciata all’olio', 'Schiacciata saporita all’olio', 'Schiacciata 5 cereali', 'Schiacciata al mais', 'Croccantelle 5 cereali', 'Croccantelle al mais'],
  fornoSalato: ['Pizzettine di sfoglia', 'Coccoli al forno', 'Pizzettonde Margherita', 'Pizzettonde farcite in vari gusti', 'Rustico valdostano', 'Taralli napoletani sugna e pepe'],
  salumi: ['Spalla Scarpaccia del Casentino', 'Sbriciolona Scarpaccia', 'Salame Toscano Scarpaccia', 'Salsiccia Scarpaccia — disponibile ogni martedì', 'Prosciutto crudo dolce di Parma', 'Galantina di pollo Medicei', 'Mortadella Gran Riserva Palmieri', 'Salamella Pieragnoli', 'Porchetta', 'Bresaola punta d’anca', 'Guanciale'],
  gastronomia: ['Aringhe affumicate', 'Carciofi toscani', 'Olive sott’olio', 'Pomodori secchi', 'Pesto Ambrosini 100 g'],
  formaggi: ['Pecorino di Seggiano semistagionato', 'Pecorino stagionato in grotta di Seggiano', 'Ricotta di pecora di Seggiano', 'Belgamino di bufala', 'Treccia di bufala di Battipaglia', 'Mozzarella di bufala di Battipaglia', 'Mozzarella di bufala di Caserta, dal gusto più saporito', 'Vetta di Monviso — FitMilk', 'Latte FitMilk', 'Yogurt', 'Stracciatella', 'Stracchino cremoso', 'Burro chiarificato', 'Parmigiano', 'Gorgonzola', 'Gorgonzola al tartufo', 'Tomino piemontese'],
  dolci: ['Occhio di bue', 'Quadrocino albicocca e uvetta', 'Torciglioni di pasta sfoglia con albicocca e uvetta', 'Crostatine', 'Ciambellone', 'Pasticceria secca', 'Pasticceria secca vegana', 'Torta della nonna', 'Budino di riso', 'Pan di ramerino', 'Cantucci alle mandorle'],
  viniSfusi: ['Traminer', 'Ribolla Gialla'],
  vini: ['Bianco Maremma — Cantine Terredagoli', 'Bolgheri — Cantine Terredagoli', 'Rosato — Cantine Terredagoli', 'Vino rosso toscano — denominazione da confermare'],
};

export const selectedSpecialties = [
  { slug: 'gran-riserva-cugusi', name: 'Gran Riserva Cugusi', producer: 'Formaggi', image: '/images/gran-riserva-cugusi.webp', imageAlt: 'Pecorino di Pienza Gran Riserva Cugusi', description: ['Un Pecorino di Pienza Gran Riserva dal gusto intenso, elegante e persistente. Prodotto nel cuore della Val d’Orcia dal Caseificio Cugusi, è uno dei formaggi più rappresentativi della nostra selezione.', 'Premiato a livello internazionale, ha ottenuto il SUPER GOLD ai World Cheese Awards 2019 e il 1° Premio agli Italian Cheese Awards 2019 nella categoria Formaggio Stagionato.', 'Lo abbiamo scelto per il banco di ELENA – Bottega dei Sapori Toscani per la sua qualità, la lunga stagionatura e il carattere autenticamente toscano.'], featuredRecognition: 'SUPER GOLD · World Cheese Awards 2019', recognitions: ['SUPER GOLD ai World Cheese Awards 2019', '1° Premio agli Italian Cheese Awards 2019 nella categoria Formaggio Stagionato'], tone: 'gold' },
  { slug: 'favola-gran-riserva-palmieri', name: 'Favola Gran Riserva', producer: 'Palmieri', image: '/images/favola-gran-riserva-palmieri.webp', imageAlt: 'Mortadella Favola Gran Riserva Palmieri', description: 'Una mortadella che non ha bisogno di molte presentazioni. È una delle specialità che abbiamo scelto per il nostro banco: il resto lo raccontano il profumo, la fetta e i riconoscimenti ricevuti.', featuredRecognition: 'Cinque Spilli · Guida Salumi d’Italia 2025', recognitions: ['Cinque Spilli, Migliore Mortadella d’Italia e Miglior Salume d’Italia — Guida Salumi d’Italia 2025', 'Inserita da Gambero Rosso tra le migliori mortadelle artigianali in una propria degustazione'], tone: 'rose' },
];

