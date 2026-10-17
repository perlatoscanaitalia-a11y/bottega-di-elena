import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import ts from 'typescript';
const html = fs.readFileSync('dist/mortadella-firenze/index.html', 'utf8');
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
assert.equal((html.match(/data-product=/g) || []).length, 5);
assert.equal((html.match(/<a[^>]*data-whatsapp/g) || []).length, 4);
assert.equal((html.match(/<select[^>]*data-quantity/g) || []).length, 2);
assert.equal((html.match(/class="button mort-deliveroo"/g) || []).length, 4);
assert.doesNotMatch(html, /Deliveroo · link in verifica/);
for (const item of html.matchAll(/<a[^>]*class="button mort-deliveroo"[^>]*>/g)) {
  assert.match(item[0], /href="https:\/\/deliveroo.it\/it\/menu\/firenze\/ss-annunziata\/panificio-elena"/);
  assert.match(item[0], /target="_blank"/);
  assert.match(item[0], /rel="noopener noreferrer"/);
}
assert.match(html, /rel="canonical" href="https:\/\/bottegadielena.it\/mortadella-firenze\/"/);
assert.doesNotMatch(html, /hreflang|€|"@type":"Offer"/);
assert.doesNotMatch(html, /Prezzo e disponibilità da confermare con il negozio|Prezzo da definire/);
assert.match(html, /Risparmia fino al <span class="mort-loyalty-saving">44%<\/span>/);
assert.match(html, /Sui prodotti selezionati con la Tessera Fedeltà ELENA\./);
assert.match(html, /Promozioni valide in negozio secondo le condizioni applicabili/);
assert.match(html, /Richiedi la tessera su WhatsApp/);
assert.match(html, /up to 44% on selected products/);
assert.ok(html.indexOf('id="tessera-fedelta"') > html.indexOf('id="tartufina"'));
assert.match(html, /href="#tessera-fedelta"/);
const tartufina = html.match(/<article[^>]*id="tartufina"[\s\S]*?<\/article>/)?.[0];
assert.ok(tartufina);
assert.doesNotMatch(tartufina, /<a |data-whatsapp|data-quantity/);
for (const item of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(item[1]);
for (const item of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
  let local = path.join('dist', item[1]);
  if (item[1].endsWith('/')) local = path.join(local, 'index.html');
  assert.ok(fs.existsSync(local), `Missing local link/asset: ${item[1]}`);
}
for (const item of html.matchAll(/<img[^>]+>/g)) assert.match(item[0], /alt="[^"]+"/);
for (const item of html.matchAll(/href="(https:\/\/wa.me\/[^\"]+)"/g)) {
  const url = new URL(item[1].replaceAll('&amp;', '&'));
  assert.equal(url.pathname, '/393270034324');
  const message = url.searchParams.get('text');
  if (message.includes('Tessera Fedeltà')) {
    assert.equal(message, 'Buongiorno, vorrei richiedere la Tessera Fedeltà ELENA');
  } else {
    assert.match(message, /100 g|1 schiacciata/);
  }
}
const component = fs.readFileSync('src/components/MortadellaProduct.astro', 'utf8');
const source = component.match(/<script>([\s\S]*?)<\/script>/)[1];
const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
for (const name of ['Mortadella Favola Gran Riserva', 'Mortadella al Tartufo']) {
  let onChange;
  const select = { value: '100 g', addEventListener: (_, fn) => { onChange = fn; } };
  const link = { href: 'https://wa.me/393270034324?text=initial' };
  const card = { dataset: { product: name }, querySelector: q => q === '[data-quantity]' ? select : link };
  vm.runInNewContext(js, { document: { querySelectorAll: () => [card] }, URL, encodeURIComponent });
  for (const quantity of ['100 g', '200 g', '300 g']) {
    select.value = quantity; onChange();
    const result = new URL(link.href);
    assert.equal(result.pathname, '/393270034324');
    assert.ok(result.searchParams.get('text').includes(`${name}, ${quantity}`));
  }
}
console.log('PASS: 5 schede, 4 WhatsApp, 6 combinazioni prodotto/grammatura, Tartufina senza acquisto, H1/canonical/JSON-LD/alt e asset/link interni.');
