import { preferenceKey, resolveLanguage } from '../data/menu-digitale/preferenza-lingua';

document.querySelectorAll<HTMLAnchorElement>('[data-menu-language]').forEach(link=>{
  link.addEventListener('click',()=>{
    try { localStorage.setItem(preferenceKey,link.dataset.menuLanguage!); } catch { /* Il cambio lingua funziona anche senza memoria locale. */ }
  });
});

// Soltanto l'ingresso dal QR sceglie automaticamente. Gli URL espliciti non cambiano.
if (location.pathname.replace(/\/$/,'')==='/menu' && !new URLSearchParams(location.search).has('choose')) {
  let saved: string | null = null;
  try { saved=localStorage.getItem(preferenceKey); } catch { /* Browser con memoria locale disabilitata. */ }
  const lang=resolveLanguage(navigator.languages?.length ? navigator.languages : [navigator.language],saved);
  location.replace(`/menu/${lang}/`);
}
