export interface SchiacciataProduct {
  name: string;
  price: number;
  ingredients: string;
  image?: string;
}

export interface SchiacciataCategory {
  id: string;
  name: string;
  shortName: string;
  products: SchiacciataProduct[];
}

export const schiacciateCategories: SchiacciataCategory[] = [
  {
    id: 'toscane',
    name: 'Le Toscane',
    shortName: 'Toscane',
    products: [
      { name: 'La Sbriciolona', price: 12.9, ingredients: 'Schiacciata Forno Coverciano; Sbriciolona di Scarpaccia del Casentino; Pecorino Toscano; Cipolla caramellata; Melanzane grigliate', image: '/images/schiacciate/toscane-la-sbriciolona.webp' },
      { name: 'La Classica', price: 12.9, ingredients: 'Prosciutto stagionato Scarpaccia del Casentino; Pecorino Toscano; Pomodori secchi; Rucola; Schiacciata toscana', image: '/images/schiacciate/toscane-la-classica.webp' },
      { name: 'La Toscana', price: 11.9, ingredients: 'Schiacciata Forno Coverciano; Salame Toscano di Scarpaccia del Casentino; Pecorino Toscano; Marmellata di fichi', image: '/images/schiacciate/toscane-la-toscana.webp' },
      { name: 'La Premiata', price: 12.9, ingredients: 'Schiacciata Forno Coverciano; Prosciutto stagionato di Scarpaccia del Casentino; Gorgonzola; Miele', image: '/images/schiacciate/toscane-la-premiata.webp' },
      { name: 'La Castellana', price: 12.9, ingredients: 'Schiacciata Forno Coverciano; Prosciutto stagionato di Scarpaccia del Casentino; Stracchino; Crema di castagne del Mugello', image: '/images/schiacciate/toscane-la-castellana.webp' },
      { name: 'La Casentinese Golosa', price: 13.9, ingredients: 'Schiacciata Forno Coverciano; Sbriciolona di Scarpaccia del Casentino; Stracciatella; Melanzane grigliate', image: '/images/schiacciate/toscane-la-casentinese-golosa.webp' },
    ],
  },
  {
    id: 'semplici',
    name: 'Le Semplici – 100 g di salume',
    shortName: 'Semplici',
    products: [
      { name: 'San Daniele', price: 7.9, ingredients: 'Schiacciata Forno Coverciano; 100 g San Daniele', image: '/images/schiacciate/semplici-san-daniele.webp' },
      { name: 'Crudo Toscano Scarpaccia', price: 7.5, ingredients: 'Schiacciata Forno Coverciano; 100 g Crudo Toscano Scarpaccia', image: '/images/schiacciate/semplici-crudo-toscano-scarpaccia.webp' },
      { name: 'Sbriciolona Scarpaccia', price: 7.5, ingredients: 'Schiacciata Forno Coverciano; 100 g Sbriciolona Scarpaccia', image: '/images/schiacciate/semplici-sbriciolona-scarpaccia.webp' },
      { name: 'Schiacciata alla Bresaola', price: 9.9, ingredients: 'Schiacciata Forno Coverciano; 100 g Bresaola', image: '/images/schiacciate/semplici-bresaola.webp' },
      { name: 'Schiacciata al Pastrami', price: 8.5, ingredients: 'Schiacciata Forno Coverciano; 100 g Pastrami', image: '/images/schiacciate/semplici-pastrami.webp' },
      { name: 'Schiacciata alla Galantina di Pollo', price: 8.5, ingredients: 'Schiacciata Forno Coverciano; 100 g Galantina di pollo', image: '/images/schiacciate/semplici-galantina-pollo.webp' },
      { name: 'Prosciutto Cotto', price: 6.9, ingredients: 'Schiacciata Forno Coverciano; 100 g Prosciutto cotto', image: '/images/schiacciate/semplici-prosciutto-cotto.webp' },
      { name: 'Schiacciata Favola – Miglior Mortadella d’Italia', price: 7.9, ingredients: 'Schiacciata Forno Coverciano; 100 g Mortadella Favola', image: '/images/schiacciate/semplici-mortadella-favola.webp' },
      { name: 'Schiacciata al Tacchino Arrosto', price: 7.5, ingredients: 'Schiacciata Forno Coverciano; 100 g Tacchino arrosto', image: '/images/schiacciate/semplici-tacchino-arrosto.webp' },
    ],
  },
  {
    id: 'speciali',
    name: 'Le Speciali',
    shortName: 'Speciali',
    products: [
      { name: 'La Battipaglia', price: 13.9, ingredients: 'Schiacciata toscana; Prosciutto crudo; Mozzarella di Bufala di Battipaglia; Pomodoro fresco; Rucola' },
      { name: 'La Golosa', price: 12.9, ingredients: 'Schiacciata toscana; Porchetta di Ariccia IGP; Pecorino Toscano; Rucola', image: '/images/schiacciate/speciali-la-golosa.webp' },
      { name: 'La Favola', price: 13.9, ingredients: 'Schiacciata; Mortadella FAVOLA GRAN RISERVA Palmieri; Stracciatella; Granella di pistacchio', image: '/images/schiacciate/speciali-la-favola.webp' },
      { name: 'La Bresaola', price: 13.9, ingredients: 'Schiacciata Forno Coverciano; Bresaola; Pecorino Toscano; Rucola fresca', image: '/images/schiacciate/speciali-la-bresaola.webp' },
      { name: 'La Galantina', price: 12.9, ingredients: 'Schiacciata toscana; Galantina di Pollo dei Medicei; Pecorino Toscano; Rucola', image: '/images/schiacciate/speciali-la-galantina.webp' },
      { name: 'La Burrata', price: 13.9, ingredients: 'Schiacciata Forno Coverciano; Prosciutto crudo stagionato di Scarpaccia del Casentino; Burrata; Rucola fresca; Pomodoro fresco', image: '/images/schiacciate/speciali-la-burrata.webp' },
    ],
  },
  {
    id: 'classiche',
    name: 'Le Classiche',
    shortName: 'Classiche',
    products: [
      { name: 'Crudo & Mozzarella', price: 11.9, ingredients: 'Schiacciata Forno Coverciano; Prosciutto crudo stagionato di Scarpaccia del Casentino; Mozzarella fiordilatte', image: '/images/schiacciate/classiche-crudo-mozzarella.webp' },
      { name: 'Cotto & Fontina', price: 10.9, ingredients: 'Schiacciata; Prosciutto cotto; Fontina' },
      { name: 'La Delicata', price: 12.9, ingredients: 'Schiacciata Forno Coverciano; Tacchino; Stracciatella; Rucola fresca', image: '/images/schiacciate/classiche-la-delicata.webp' },
      { name: 'La Scarpaccia', price: 10.9, ingredients: 'Schiacciata Forno Coverciano; Salame Toscano di Scarpaccia del Casentino; Pecorino Toscano', image: '/images/schiacciate/classiche-la-scarpaccia.webp' },
    ],
  },
  {
    id: 'vegetariane',
    name: 'Le Vegetariane',
    shortName: 'Vegetariane',
    products: [
      { name: 'La Mediterranea', price: 11.9, ingredients: 'Schiacciata Forno Coverciano; Mozzarella fiordilatte; Melanzane grigliate; Pomodori secchi; Rucola fresca', image: '/images/schiacciate/vegetariane-la-mediterranea.webp' },
      { name: 'La Stracciatella', price: 10.9, ingredients: 'Schiacciata Forno Coverciano; Stracciatella cremosa; Pomodoro fresco; Rucola fresca', image: '/images/schiacciate/vegetariane-la-stracciatella.webp' },
      { name: 'La Bufalina', price: 11.9, ingredients: 'Schiacciata Forno Coverciano; Mozzarella di Bufala di Battipaglia; Pomodoro fresco; Rucola fresca', image: '/images/schiacciate/vegetariane-la-bufalina.webp' },
      { name: 'La Caprina', price: 11.9, ingredients: 'Schiacciata Forno Coverciano; Formaggio di capra; Pomodori secchi; Rucola fresca', image: '/images/schiacciate/vegetariane-la-caprina.webp' },
    ],
  },
  {
    id: 'vegane',
    name: 'Le Vegane',
    shortName: 'Vegane',
    products: [
      { name: "L'Ortolana", price: 10.9, ingredients: 'Schiacciata Forno Coverciano; Melanzane grigliate; Pomodori secchi; Pomodoro fresco; Rucola fresca', image: '/images/schiacciate/vegane-ortolana.webp' },
      { name: "L'Avocado", price: 11.9, ingredients: 'Schiacciata Forno Coverciano; Avocado; Pomodoro fresco; Rucola fresca; Melanzane grigliate', image: '/images/schiacciate/vegane-avocado.webp' },
    ],
  },
  {
    id: 'tonno',
    name: 'Tonno',
    shortName: 'Tonno',
    products: [
      { name: 'La Tonnata', price: 12.9, ingredients: 'Schiacciata Forno Coverciano; Tonno; Pomodoro fresco; Insalata croccante; Cetriolo; Maionese', image: '/images/schiacciate/tonno-la-tonnata.webp' },
      { name: 'Tonno & Avocado', price: 13.9, ingredients: 'Schiacciata Forno Coverciano; Tonno; Avocado; Pomodoro fresco; Rucola', image: '/images/schiacciate/tonno-avocado.webp' },
    ],
  },
  {
    id: 'pastrami',
    name: 'Pastrami – American Style',
    shortName: 'Pastrami',
    products: [
      { name: 'US Pastrami Fresh', price: 14.9, ingredients: 'Schiacciata Forno Coverciano; Pastrami di vitello; Pomodoro fresco; Rucola; Cetriolini; Salsa alla senape', image: '/images/schiacciate/pastrami-fresh.webp' },
      { name: 'Pastrami Cheddar Melt US', price: 15.9, ingredients: 'Schiacciata; Pastrami di vitello; Cheddar; Cipolla caramellata; Cetriolini; Salsa alla senape', image: '/images/schiacciate/pastrami-cheddar-melt.webp' },
    ],
  },
];

export const schiacciateProductCount = schiacciateCategories.reduce((total, category) => total + category.products.length, 0);
