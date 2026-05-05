import { Lang } from '../data/i18n.data';

/**
 * Cadena traducible: o un string plano (cuando da igual el idioma — nombres
 * propios, tecnologías, símbolos, etc.) o un objeto con la versión por idioma.
 */
export type Localized = string | { es: string; en: string };

export function resolveLocalized(value: Localized | undefined, lang: Lang): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value.en ?? value.es ?? '';
}
