<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';
  import { getCategoryInfo } from '$lib/data';
  import type { Person } from '$lib/data/types';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CategoryNav from '$lib/components/CategoryNav.svelte';
  import PersonCard from '$lib/components/PersonCard.svelte';
  import FilterInput from '$lib/components/FilterInput.svelte';

  let { data } = $props();
  const locale: Locale = data.locale;
  const category: Category = data.category;
  const people: Person[] = data.people;
  const info = getCategoryInfo(category, locale);

  let filter = $state('');
  let filtered = $derived(
    people.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase())),
  );
</script>

<svelte:head>
  <title>{info?.label} — {t(locale, 'site.title')}</title>
  <meta name="description" content={info?.description} />
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
      {people.length} {locale === 'en' ? 'entries' : '位'}
    </p>
  </div>

  <div class="mb-8 max-w-sm">
    <FilterInput {locale} bind:value={filter} />
  </div>

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each filtered as person (person.slug)}
      <PersonCard {person} {category} {locale} />
    {/each}
  </div>

  {#if filtered.length === 0}
    <p class="py-12 text-center text-text-muted">
      {locale === 'en' ? 'No results found.' : '未找到结果。'}
    </p>
  {/if}
</main>

<Footer {locale} />
