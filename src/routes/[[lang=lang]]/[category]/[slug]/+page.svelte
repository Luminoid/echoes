<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import type { Person } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PersonMeta from '$lib/components/PersonMeta.svelte';
  import QuoteBlock from '$lib/components/QuoteBlock.svelte';
  import BackLink from '$lib/components/BackLink.svelte';

  let { data } = $props();
  const locale: Locale = data.locale;
  const category: Category = data.category;
  const person: Person = data.person;
</script>

<svelte:head>
  <title>{person.name} — {t(locale, 'site.title')}</title>
  <meta name="description" content={person.bio} />
</svelte:head>

<Header {locale} />

<main class="mx-auto max-w-3xl px-6 pt-28 pb-24">
  <div class="mb-8">
    <BackLink {category} {locale} />
  </div>

  <PersonMeta {person} {locale} />

  <div class="flex flex-col gap-6">
    {#each person.quotes as quote, i}
      <QuoteBlock {quote} {locale} />
    {/each}
  </div>
</main>

<Footer {locale} />
