import { getAllPeopleData, getPersonBySlug } from '$lib/data';
import { getLocale } from '$lib/i18n/translations';
import type { Category } from '$lib/data/types';
import { error } from '@sveltejs/kit';

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

export function entries() {
  return getAllPeopleData().flatMap(({ category, person }) => [
    { lang: '', category, slug: person.slug },
    { lang: 'zh', category, slug: person.slug },
  ]);
}
