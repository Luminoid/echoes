import { categories, getPeopleByCategory } from '#lib/data/index.js';
import { getLocale } from '#lib/i18n/translations.js';
import type { Category } from '#lib/data/types.js';
import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';

export function load({ params, parent }) {
  const locale = getLocale(params.lang);
  const category = params.category as Category;

  if (!categories.includes(category)) {
    error(404, 'Category not found');
  }

  const people = getPeopleByCategory(category, locale);
  return { people, category, locale };
}

export const entries: EntryGenerator = () =>
  categories.flatMap((category) => [{ category }, { lang: 'zh', category }]);
