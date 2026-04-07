<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import type { Person } from '$lib/data/types';
  import { localePath } from '$lib/i18n/translations';

  let { person, category, locale }: { person: Person; category: Category; locale: Locale } = $props();

  let firstQuote = $derived(person.quotes[0]);
</script>

<a
  href={localePath(locale, `/${category}/${person.slug}/`)}
  class="group block rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:bg-bg-card-hover"
>
  <div class="mb-4">
    <h3 class="font-serif text-lg font-semibold text-text transition-colors group-hover:text-accent">
      {person.name}
    </h3>
    <p class="mt-1 text-sm text-text-muted">
      {person.nationality} · {person.years}
    </p>
  </div>

  {#if firstQuote}
    <blockquote class="border-l-2 border-quote-border pl-4">
      <p class="line-clamp-3 font-serif text-sm leading-relaxed text-text-secondary italic">
        &ldquo;{firstQuote.original}&rdquo;
      </p>
      {#if firstQuote.translation && firstQuote.translation !== firstQuote.original}
        <p class="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
          &ldquo;{firstQuote.translation}&rdquo;
        </p>
      {/if}
    </blockquote>
  {/if}
</a>
