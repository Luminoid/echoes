import { getLocale } from '#lib/i18n/translations.js';
import type { Locale } from '#lib/data/types.js';

export function load({ params }) {
  const locale: Locale = getLocale(params.lang);
  return { locale };
}
