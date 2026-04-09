export type SortKey = 'name' | 'birthYear';

const sortByCategory = new Map<string, SortKey>();

export function getSortKey(category: string): SortKey {
  return sortByCategory.get(category) ?? 'name';
}

export function setSortKey(category: string, key: SortKey) {
  sortByCategory.set(category, key);
}
