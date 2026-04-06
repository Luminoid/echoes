import { categories, getPeopleByCategory } from '$lib/data';
import { getLocale } from '$lib/i18n/translations';
import type { Category } from '$lib/data/types';
import { error } from '@sveltejs/kit';

export function load({ params, parent }) {
  const locale = getLocale(params.lang);
  const category = params.category as Category;

  if (!categories.includes(category)) {
    error(404, 'Category not found');
  }

  const people = getPeopleByCategory(category, locale);
  return { people, category, locale };
}

export function entries() {
  return ['', 'zh'].flatMap((lang) => categories.map((cat) => ({ lang, category: cat })));
}
