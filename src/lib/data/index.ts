import type { Locale, Category, Person, PersonData, Quote, QuoteData } from './types';
import { categoryList, categories } from './types';
import { philosopherData } from './philosophers';
import { writerData } from './writers';
import { poetData } from './poets';
import { playwrightData } from './playwrights';
import { essayistData } from './essayists';
import { comedianData } from './comedians';
import { artistData } from './artists';
import { architectData } from './architects';
import { photographerData } from './photographers';
import { designerData } from './designers';
import { musicianData } from './musicians';
import { filmmakerData } from './filmmakers';
import { scientistData } from './scientists';
import { psychologistData } from './psychologists';
import { activistData } from './activists';
import { cinemaData } from './cinema';

export { categoryList, categories };
export type { Category };

const categoryMap: Record<Category, PersonData[]> = {
  philosophers: philosopherData,
  writers: writerData,
  poets: poetData,
  playwrights: playwrightData,
  essayists: essayistData,
  comedians: comedianData,
  artists: artistData,
  architects: architectData,
  photographers: photographerData,
  designers: designerData,
  musicians: musicianData,
  filmmakers: filmmakerData,
  scientists: scientistData,
  psychologists: psychologistData,
  activists: activistData,
  cinema: cinemaData,
};

function resolveQuote(q: QuoteData, locale: Locale): Quote {
  // Determine the original language and text
  const lang = q.originalLang ?? (q.originalLocale === 'zh' ? 'zh' : 'en');
  const originalText = q.original ?? q.text[lang === 'zh' ? 'zh' : 'en'];

  // Determine translation:
  // - If original is in the same language as current locale → no translation needed
  // - Otherwise → show current locale's translation
  const sameAsLocale =
    (lang === 'en' && locale === 'en') || (lang === 'zh' && locale === 'zh');
  const translation = sameAsLocale ? '' : q.text[locale];

  // Source in original language: use the locale closest to originalLang
  const sourceLangLocale: Locale = (lang === 'zh') ? 'zh' : 'en';
  const sourceOriginal = q.source[sourceLangLocale];
  const sourceTranslated = q.source[locale];

  return {
    original: originalText,
    originalLang: lang,
    translation,
    source: sourceTranslated,
    sourceOriginal,
    year: q.year,
    sourceUrl: q.sourceUrl,
    comment: q.comment?.[locale],
    speaker: q.speaker?.[locale],
  };
}

const localeTag: Record<Locale, string> = { en: 'en', zh: 'zh-Hans' };

function resolvePerson(data: PersonData, locale: Locale): Person {
  const quotes = data.quotes
    .map((q) => resolveQuote(q, locale))
    .sort((a, b) => (a.year ?? Infinity) - (b.year ?? Infinity));
  return {
    slug: data.slug,
    name: data.name[locale],
    years: data.years,
    nationality: data.nationality[locale],
    bio: data.bio[locale],
    wikipedia: data.wikipedia?.[locale],
    quotes,
  };
}

export function getPeopleByCategory(category: Category, locale: Locale): Person[] {
  return (categoryMap[category] ?? [])
    .map((p) => resolvePerson(p, locale))
    .sort((a, b) => a.name.localeCompare(b.name, localeTag[locale]));
}

export function getPersonBySlug(
  category: Category,
  slug: string,
  locale: Locale,
): Person | undefined {
  const data = categoryMap[category]?.find((p) => p.slug === slug);
  return data ? resolvePerson(data, locale) : undefined;
}

export function getAllPeopleData(): { category: Category; person: PersonData }[] {
  return categories.flatMap((cat) =>
    categoryMap[cat].map((person) => ({ category: cat, person })),
  );
}

export function getCategoryInfo(category: Category, locale: Locale) {
  const info = categoryList.find((c) => c.key === category);
  if (!info) return undefined;
  return {
    key: info.key,
    label: info.label[locale],
    description: info.description[locale],
  };
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getFeaturedQuotes(locale: Locale, count: number = 5) {
  const all = getAllPeopleData();
  const featured: { person: Person; quote: Quote; category: Category }[] = [];

  for (const { category, person } of all) {
    if (person.quotes.length > 0) {
      const resolved = resolvePerson(person, locale);
      featured.push({
        person: resolved,
        quote: resolved.quotes[0],
        category,
      });
    }
  }

  return shuffle(featured).slice(0, count);
}
