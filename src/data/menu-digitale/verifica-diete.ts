import catalogo from './catalogo.json';

export type Diet = 'vegetarian' | 'vegan';
export interface DietApproval { diet: Diet; status: 'verified'; evidence: string[]; }

// Conferme sugli ingredienti: non approvano automaticamente ricette intere.
export const ingredientConfirmations = {
  pesto: {diet:'vegan', evidence:'Conferma del negozio, 12 novembre 2026: «pesto vegano».'},
  mozzarella: {status:'excluded', evidence:'Conferma del negozio, 12 novembre 2026: caglio animale. Non vegetariana e non vegana.'},
  impasto: {diet:'vegan', evidence:'Conferma diretta del titolare, 14 novembre 2026: impasto della schiacciata salata Forno Coverciano esclusivamente vegetale.'},
  verdure: {diet:'vegan', evidence:'Conferma diretta del titolare, 14 novembre 2026: melanzane e pomodori secchi preparati con soli ingredienti vegetali.'},
  avocado: {diet:'vegan', evidence:'Conferma diretta del titolare, 14 novembre 2026: L’Avocado non contiene altri ingredienti animali.'},
  formaggi: {status:'excluded', evidence:'Conferma diretta del titolare, 14 novembre 2026: stracciatella, caprino, mozzarella/fiordilatte e mozzarella di bufala utilizzati contengono caglio animale.'},
};

// Assegnazioni solo con conferma del negozio o schede effettive.
// Le categorie Glovo non costituiscono una verifica degli ingredienti composti.
export const dietApprovals: Record<string, DietApproval> = {
  'la-cecina': {diet:'vegan', status:'verified', evidence:['Conferma esplicita del titolare nel messaggio del 12 novembre 2026: «La Cecina è confermata VEGAN». Conferma riferita alla schiacciata completa.']},
  'l-ortolana': {diet:'vegan', status:'verified', evidence:['Approvazione esplicita del titolare, 14 novembre 2026: bollino VEGAN per L’Ortolana; impasto, melanzane e pomodori secchi interamente vegetali.']},
  'l-avocado': {diet:'vegan', status:'verified', evidence:['Approvazione esplicita del titolare, 14 novembre 2026: bollino VEGAN per L’Avocado; impasto e melanzane vegetali, nessun altro ingrediente animale.']},
  'schiacciata-solo-olio': {diet:'vegan', status:'verified', evidence:['Approvazione esplicita del titolare, 14 novembre 2026: bollino VEGAN per Schiacciata solo olio; impasto della schiacciata salata esclusivamente vegetale.']},
};
export const dietExclusions: Record<string,string> = {
  'la-stracciatella':'Stracciatella con caglio animale: conferma diretta del titolare, 14 novembre 2026.',
  'la-caprina':'Caprino con caglio animale: conferma diretta del titolare, 14 novembre 2026.',
  'la-mediterranea':'Mozzarella: caglio animale confermato dal negozio.',
  'la-bufalina':'Mozzarella: caglio animale confermato dal negozio.',
  'la-ligure':'Mozzarella: caglio animale confermato dal negozio; il pesto vegano non rende vegetariana la ricetta completa.',
};
export const potentialDiets: Record<string, { candidate: Diet; checks: string[] }> = {
  'schiacciata-solo-olio': {candidate:'vegan', checks:['Ricetta completa dell’impasto e dell’olio/condimenti; assenza di strutto, latte, uova, miele e altri derivati animali.']},
  'la-mediterranea': {candidate:'vegetarian', checks:['Impasto della schiacciata.', 'Fiordilatte: caglio e coadiuvanti.', 'Ingredienti completi di melanzane grigliate e pomodori secchi con i rispettivi condimenti.']},
  'la-stracciatella': {candidate:'vegetarian', checks:['Impasto della schiacciata.', 'Stracciatella: composizione, caglio e coadiuvanti.']},
  'la-bufalina': {candidate:'vegetarian', checks:['Impasto della schiacciata.', 'Mozzarella di bufala: produttore, caglio e coadiuvanti. La provenienza da Battipaglia non identifica la scheda tecnica.']},
  'la-caprina': {candidate:'vegetarian', checks:['Impasto della schiacciata.', 'Caprino: prodotto preciso, caglio e coadiuvanti.', 'Ingredienti e condimenti dei pomodori secchi.']},
  'la-cecina': {candidate:'vegan', checks:['Impasto della schiacciata.', 'Ricetta completa della cecina e grassi impiegati.', 'Ingredienti e condimenti delle melanzane grigliate.']},
  'la-ligure': {candidate:'vegetarian', checks:['Impasto della schiacciata.', 'Fiordilatte: caglio e coadiuvanti.', 'Pesto: elenco completo, formaggi e relativo caglio, eventuali altri ingredienti di origine animale.']},
  'l-ortolana': {candidate:'vegan', checks:['Impasto della schiacciata.', 'Ingredienti completi di melanzane grigliate e pomodori secchi, oli e condimenti.']},
  'l-avocado': {candidate:'vegan', checks:['Impasto della schiacciata.', 'Ingredienti e condimenti delle melanzane grigliate.']},
};

export const dietReviews = catalogo.flatMap(category => category.products.map(product => ({
  id: product.id,
  name: product.name,
  ingredients: product.description.it,
  status: dietExclusions[product.id] ? 'excluded' : dietApprovals[product.id]?.status ?? (potentialDiets[product.id] ? 'pending' : 'excluded'),
  candidate: potentialDiets[product.id]?.candidate ?? null,
  checks: dietExclusions[product.id] ? [dietExclusions[product.id]] : dietApprovals[product.id]?.evidence ?? potentialDiets[product.id]?.checks ?? ['Carne, salumi o pesce dichiarati nella ricetta: escluso da entrambe le etichette, anche quando contiene pesto, formaggi o salse.'],
})));

export function verifiedDietFor(id: string): Diet | undefined {
  if (dietExclusions[id]) return;
  const approval = dietApprovals[id];
  const review = potentialDiets[id];
  if (!review || !approval || approval.status !== 'verified' || !approval.evidence.some(value => value.trim())) return;
  // Un candidato con latticini non può diventare vegano senza revisione della ricetta.
  if (review.candidate === 'vegetarian' && approval.diet === 'vegan') return;
  return approval.diet;
}
