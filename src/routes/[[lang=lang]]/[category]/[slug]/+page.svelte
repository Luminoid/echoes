<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import type { Person } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PersonMeta from '$lib/components/PersonMeta.svelte';
  import QuoteBlock from '$lib/components/QuoteBlock.svelte';
  import BackLink from '$lib/components/BackLink.svelte';

  let { data } = $props();
  let locale = $derived(data.locale as Locale);
  let category = $derived(data.category as Category);
  let person = $derived(data.person as Person);

  let enUrl = $derived(`${page.url.origin}/${category}/${person.slug}/`);
  let zhUrl = $derived(`${page.url.origin}/zh/${category}/${person.slug}/`);
  let canonicalUrl = $derived(locale === 'en' ? enUrl : zhUrl);

  let jsonLd = $derived(JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${person.name} — ${t(locale, 'site.title')}`,
    description: person.bio,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'Person',
      name: person.name,
      description: person.bio,
    },
  }));
</script>

<svelte:head>
  <title>{person.name} — {t(locale, 'site.title')}</title>
  <meta name="description" content={person.bio} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="zh" href={zhUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="{person.name} — {t(locale, 'site.title')}" />
  <meta property="og:description" content={person.bio} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content="{page.url.origin}/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{person.name} — {t(locale, 'site.title')}" />
  <meta name="twitter:description" content={person.bio} />
  <meta name="twitter:image" content="{page.url.origin}/og-image.png" />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
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
