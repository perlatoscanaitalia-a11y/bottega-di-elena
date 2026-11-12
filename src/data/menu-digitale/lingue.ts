export const languages = ['it', 'en', 'de', 'fr'] as const;
export type Language = typeof languages[number];
export const languageNames = { it: 'Italiano', en: 'English', de: 'Deutsch', fr: 'Français' };
export const copy = {
  it: { title: 'Le nostre schiacciate', subtitle: 'Il gusto della Toscana, tra due fette di schiacciata.', intro: 'Scegli il tuo incontro di sapori: scopri le ricette della bottega e lasciati ispirare.', eyebrow: 'Firenze · Bottega dei Sapori Toscani', menu: 'Il menù', all: 'Tutte', ingredients: 'Ingredienti e descrizione', categories: 'Categorie', language: 'Scegli la lingua', back: 'Il sito della bottega', top: 'Torna in alto', allergy: 'Allergie o intolleranze? Chiedi al personale informazioni sugli ingredienti e sugli allergeni prima di ordinare.', seo: 'Scopri le schiacciate di ELENA a Firenze: fotografie, ingredienti e ricette toscane. Sfoglia il catalogo della bottega e scegli la tua preferita.' },
  en: { title: 'Our schiacciate', subtitle: 'A taste of Tuscany, tucked into schiacciata.', intro: 'Find your favourite combination: explore the recipes from our Tuscan deli and be inspired.', eyebrow: 'Florence · Bottega dei Sapori Toscani', menu: 'The menu', all: 'All', ingredients: 'Ingredients and description', categories: 'Categories', language: 'Choose your language', back: 'Visit our website', top: 'Back to top', allergy: 'Allergies or intolerances? Ask our staff about ingredients and allergens before ordering.', seo: 'Explore ELENA’s schiacciate in Florence: photographs, ingredients and Tuscan recipes. Browse our deli’s catalogue and find your favourite.' },
  de: { title: 'Unsere Schiacciate', subtitle: 'Ein Stück Toskana, in Schiacciata serviert.', intro: 'Entdecken Sie die Rezepte unserer Bottega und finden Sie Ihre liebste Kombination.', eyebrow: 'Florenz · Bottega dei Sapori Toscani', menu: 'Die Speisekarte', all: 'Alle', ingredients: 'Zutaten und Beschreibung', categories: 'Kategorien', language: 'Sprache wählen', back: 'Zur Website der Bottega', top: 'Nach oben', allergy: 'Allergien oder Unverträglichkeiten? Fragen Sie unser Team vor der Bestellung nach Zutaten und Allergenen.', seo: 'Entdecken Sie die Schiacciate von ELENA in Florenz: Fotos, Zutaten und toskanische Rezepte. Finden Sie Ihre Lieblingsschiacciata in unserer Bottega.' },
  fr: { title: 'Nos schiacciate', subtitle: 'La Toscane, à savourer dans une schiacciata.', intro: 'Découvrez les recettes de notre bottega et trouvez l’association de saveurs qui vous ressemble.', eyebrow: 'Florence · Bottega dei Sapori Toscani', menu: 'La carte', all: 'Toutes', ingredients: 'Ingrédients et description', categories: 'Catégories', language: 'Choisissez votre langue', back: 'Le site de la bottega', top: 'Retour en haut', allergy: 'Allergies ou intolérances ? Demandez à notre équipe des informations sur les ingrédients et les allergènes avant de commander.', seo: 'Découvrez les schiacciate d’ELENA à Florence : photos, ingrédients et recettes toscanes. Parcourez le catalogue de notre bottega et trouvez votre préférée.' },
};
export const categoryNames: Record<string, Record<Language, string>> = {
  pane: { it:'Pane', en:'Bread', de:'Brot', fr:'Pain' },
  'le-toscane': {it:'Le Toscane',en:'Tuscan favourites',de:'Toskanische Spezialitäten',fr:'Les Toscanes'},
  'le-vegetariane': {it:'Le Vegetariane',en:'Vegetarian',de:'Vegetarisch',fr:'Les Végétariennes'},
  'le-vegane': {it:'Le Vegane',en:'Vegan',de:'Vegan',fr:'Les Véganes'},
  'le-speciali': {it:'Le Speciali',en:'Our specials',de:'Unsere Spezialitäten',fr:'Les Spéciales'},
  pastrami: {it:'Pastrami',en:'Pastrami',de:'Pastrami',fr:'Pastrami'},
  'le-classiche': {it:'Le Classiche',en:'The classics',de:'Die Klassiker',fr:'Les Classiques'},
  'schiacciate-semplici': {it:'Schiacciate Semplici',en:'Simple schiacciate',de:'Schlichte Schiacciate',fr:'Les Schiacciate Simples'},
  'le-mortadelle-d-eccellenza': {it:"Le Mortadelle d’Eccellenza",en:'Exceptional mortadella',de:'Mortadella-Spezialitäten',fr:'Les Mortadelles d’Exception'},
  'schiacciate-tonno': {it:'Schiacciate - Tonno',en:'Tuna schiacciate',de:'Schiacciate mit Thunfisch',fr:'Les Schiacciate au Thon'},
};
