<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';
  import { getAllPeopleData, getPersonBySlug, shuffle } from '$lib/data';

  let { locale }: { locale: Locale } = $props();

  // Pick a random person once per page load (stable across locale switches)
  const all = shuffle(getAllPeopleData().filter(({ person }) => person.quotes.length > 0));
  const pick = all[0];

  // Resolve in current locale (reactive)
  let person = $derived(pick ? getPersonBySlug(pick.category, pick.person.slug, locale) : undefined);
  let quote = $derived(person?.quotes[0]);
</script>

<section class="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
  <h1 class="mb-4 font-serif text-6xl font-bold tracking-tight text-accent sm:text-7xl md:text-8xl">
    {t(locale, 'site.title')}
  </h1>
  <p class="mb-16 text-lg text-text-muted sm:text-xl">
    {t(locale, 'site.subtitle')}
  </p>

  {#if person && quote}
    <div class="mx-auto max-w-2xl">
      <blockquote class="border-l-2 border-quote-border pl-6">
        <p class="font-serif text-xl leading-relaxed text-text-secondary italic sm:text-2xl">
          &ldquo;{quote.original}&rdquo;
        </p>
        {#if quote.translation && quote.translation !== quote.original}
          <p class="mt-3 text-base leading-relaxed text-text-muted">
            &ldquo;{quote.translation}&rdquo;
          </p>
        {/if}
      </blockquote>
      <p class="mt-6 text-sm text-text-muted">
        — {person.name}
        {#if quote.source}
          <span class="text-text-muted/60">,&nbsp;{quote.source}</span>
        {/if}
      </p>
    </div>
  {/if}
</section>
