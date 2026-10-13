import { getAllPeopleData, getPersonBySlug } from '#lib/data/index.js';
import { getLocale } from '#lib/i18n/translations.js';
import type { Category } from '#lib/data/types.js';
import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';

export function load({ params }) {
  const locale = getLocale(params.lang);
  const category = params.category as Category;
  const slug = params.slug;

  const person = getPersonBySlug(category, slug, locale);
  if (!person) {
    error(404, 'Person not found');
  }

  return { person, category, locale };
}

export const entries: EntryGenerator = () =>
  getAllPeopleData().flatMap(({ category, person }) => [
    { category, slug: person.slug },
    { lang: 'zh', category, slug: person.slug },
  ]);
