import catalogo from './catalogo.json';

export type Diet = 'vegetarian' | 'vegan';
export interface DietApproval { diet: Diet; status: 'verified'; evidence: string[]; }

// Nessuna assegnazione finché non sono disponibili le schede effettive.
// Le categorie Glovo non costituiscono una verifica degli ingredienti composti.
export const dietApprovals: Record<string, DietApproval> = {};
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
  status: potentialDiets[product.id] ? 'pending' : 'excluded',
  candidate: potentialDiets[product.id]?.candidate ?? null,
  checks: potentialDiets[product.id]?.checks ?? ['Carne, salumi o pesce dichiarati nella ricetta: escluso da entrambe le etichette, anche quando contiene pesto, formaggi o salse.'],
})));

export function verifiedDietFor(id: string): Diet | undefined {
  const approval = dietApprovals[id];
  const review = potentialDiets[id];
  if (!review || !approval || approval.status !== 'verified' || !approval.evidence.some(value => value.trim())) return;
  // Un candidato con latticini non può diventare vegano senza revisione della ricetta.
  if (review.candidate === 'vegetarian' && approval.diet === 'vegan') return;
  return approval.diet;
}
