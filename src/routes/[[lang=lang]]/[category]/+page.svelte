<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';
  import { getCategoryInfo } from '$lib/data';
  import type { Person } from '$lib/data/types';
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CategoryNav from '$lib/components/CategoryNav.svelte';
  import PersonCard from '$lib/components/PersonCard.svelte';
  import FilterInput from '$lib/components/FilterInput.svelte';

  let { data } = $props();
  let locale = $derived(data.locale as Locale);
  let category = $derived(data.category as Category);
  let people = $derived(data.people as Person[]);
  let info = $derived(getCategoryInfo(category, locale));

  type SortKey = 'name' | 'birthYear';
  let filter = $state('');
  let sortBy = $state<SortKey>('name');

  function parseBirthYear(years: string): number {
    const match = years.match(/\d+/);
    return match ? parseInt(match[0], 10) : Infinity;
  }

  const localeTag = $derived(locale === 'zh' ? 'zh-Hans' : 'en');

  let filtered = $derived(
    people
      .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
      .toSorted((a, b) =>
        sortBy === 'birthYear'
          ? parseBirthYear(a.years) - parseBirthYear(b.years) ||
            a.name.localeCompare(b.name, localeTag)
          : a.name.localeCompare(b.name, localeTag),
      ),
  );

  let enUrl = $derived(`${page.url.origin}/${category}/`);
  let zhUrl = $derived(`${page.url.origin}/zh/${category}/`);
  let canonicalUrl = $derived(locale === 'en' ? enUrl : zhUrl);
</script>

<svelte:head>
  <title>{info?.label} — {t(locale, 'site.title')}</title>
  <meta name="description" content={info?.description} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="zh" href={zhUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{info?.label} — {t(locale, 'site.title')}" />
  <meta property="og:description" content={info?.description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content="{page.url.origin}/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{info?.label} — {t(locale, 'site.title')}" />
  <meta name="twitter:description" content={info?.description} />
  <meta name="twitter:image" content="{page.url.origin}/og-image.png" />
</svelte:head>

<Header {locale} />

<main class="mx-auto max-w-5xl px-6 pt-28 pb-24">
  <div class="mb-8">
    <CategoryNav {locale} active={category} />
  </div>

  <div class="mb-8">
    <h1 class="font-serif text-3xl font-bold text-text sm:text-4xl">
      {info?.label}
    </h1>
    <p class="mt-2 text-text-muted">{info?.description}</p>
    <p class="mt-1 text-sm text-text-muted/60">
      {people.length} {t(locale, 'category.entries')}
    </p>
  </div>

  <div class="mb-8 flex flex-wrap items-center gap-4">
    <div class="w-full max-w-sm">
      <FilterInput {locale} bind:value={filter} />
    </div>
    <div class="flex items-center gap-1 rounded-lg border border-border p-0.5">
      {#each ['name', 'birthYear'] as key (key)}
        <button
          class="rounded-md px-3 py-1.5 text-sm transition-colors {sortBy === key
            ? 'bg-accent text-white'
            : 'text-text-muted hover:text-text'}"
          onclick={() => (sortBy = key as SortKey)}
        >
          {t(locale, `sort.${key}`)}
        </button>
      {/each}
    </div>
  </div>

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each filtered as person (person.slug)}
      <PersonCard {person} {category} {locale} />
    {/each}
  </div>

  <div role="status" aria-live="polite">
    {#if filtered.length === 0}
      <p class="py-12 text-center text-text-muted">
        {t(locale, 'search.noResults')}
      </p>
    {/if}
  </div>
</main>

<Footer {locale} />
