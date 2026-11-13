import { languages, type Language } from './lingue';

export const preferenceKey = 'elena-menu-language';
export function resolveLanguage(preferred: readonly string[], saved?: string | null): Language {
  if (languages.includes(saved as Language)) return saved as Language;
  for (const value of preferred) {
    const code=value.toLowerCase().replaceAll('_','-');
    const base=code.split('-')[0];
    // Le varianti tradizionali non vanno presentate come cinese semplificato.
    if (base==='zh') {
      if (code.includes('hant') || /-(tw|hk|mo)(-|$)/.test(code)) continue;
      return 'zh';
    }
    if (languages.includes(base as Language)) return base as Language;
  }
  return 'en';
}
