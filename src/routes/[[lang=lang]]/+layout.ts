import { getLocale } from '$lib/i18n/translations';
import type { Locale } from '$lib/data/types';

export function load({ params }) {
  const locale: Locale = getLocale(params.lang);
  return { locale };
}
