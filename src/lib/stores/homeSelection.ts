import { categoryList } from '$lib/data/types';
import { getPeopleByCategory, shuffle } from '$lib/data';

export const selectedSlugs: Record<string, string[]> = {};
for (const cat of categoryList) {
  const people = getPeopleByCategory(cat.key, 'en');
  selectedSlugs[cat.key] = shuffle(people).slice(0, 3).map((p) => p.slug);
}
