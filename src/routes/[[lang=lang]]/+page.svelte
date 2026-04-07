<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import { categoryList } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';
  import { getPeopleByCategory, getCategoryInfo, shuffle } from '$lib/data';
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import PersonCard from '$lib/components/PersonCard.svelte';

  let { data } = $props();
  let locale = $derived(data.locale as Locale);

  let enUrl = $derived(`${page.url.origin}/`);
  let zhUrl = $derived(`${page.url.origin}/zh/`);
  let canonicalUrl = $derived(locale === 'en' ? enUrl : zhUrl);
</script>

<svelte:head>
  <title>{t(locale, 'site.title')} — {t(locale, 'site.subtitle')}</title>
  <meta name="description" content={t(locale, 'site.description')} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="zh" href={zhUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{t(locale, 'site.title')} — {t(locale, 'site.subtitle')}" />
  <meta property="og:description" content={t(locale, 'site.description')} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content="{page.url.origin}/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{t(locale, 'site.title')} — {t(locale, 'site.subtitle')}" />
  <meta name="twitter:description" content={t(locale, 'site.description')} />
  <meta name="twitter:image" content="{page.url.origin}/og-image.png" />
</svelte:head>

<Header {locale} />

<main>
  <HeroSection {locale} />

  <div class="mx-auto max-w-5xl px-6 pb-24">
    {#each categoryList as cat}
      {@const people = getPeopleByCategory(cat.key, locale)}
      {@const info = getCategoryInfo(cat.key, locale)}
      <section class="mt-20">
        <div class="mb-8 flex items-end justify-between">
          <div>
            <h2 class="font-serif text-2xl font-bold text-text sm:text-3xl">
              {info?.label}
            </h2>
            <p class="mt-1 text-sm text-text-muted">{info?.description}</p>
          </div>
          <a
            href={localePath(locale, `/${cat.key}/`)}
            class="hidden text-sm text-accent transition-colors hover:text-accent-hover sm:block"
          >
            {t(locale, 'home.viewAll')}
          </a>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each shuffle(people).slice(0, 3) as person}
            <PersonCard {person} category={cat.key} {locale} />
          {/each}
        </div>

        <a
          href={localePath(locale, `/${cat.key}/`)}
          class="mt-4 block text-center text-sm text-accent transition-colors hover:text-accent-hover sm:hidden"
        >
          {t(locale, 'home.viewAll')}
        </a>
      </section>
    {/each}
  </div>
</main>

<Footer {locale} />
