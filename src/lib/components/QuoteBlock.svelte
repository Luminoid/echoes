<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import type { Quote } from '$lib/data/types';
  import { langNames } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';

  let { quote, locale }: { quote: Quote; locale: Locale } = $props();

  const sourceLink = $derived(
    quote.sourceUrl ||
      `https://www.google.com/search?q=${encodeURIComponent(quote.sourceOriginal + (quote.year ? ` ${quote.year}` : ''))}`,
  );

  const langLabel = $derived(langNames[quote.originalLang]?.[locale] ?? quote.originalLang);
  const showSourceTranslation = $derived(
    quote.source !== quote.sourceOriginal && quote.source && quote.sourceOriginal,
  );
</script>

<div class="rounded-xl border border-border-subtle bg-quote-bg p-6 sm:p-8">
  {#if quote.speaker}
    <p class="mb-3 text-xs font-medium tracking-wide text-text-muted uppercase">
      {quote.speaker}
    </p>
  {/if}

  <!-- Original text in source language -->
  <blockquote class="border-l-3 border-quote-border pl-5">
    <p class="font-serif text-xl leading-relaxed text-text italic sm:text-2xl">
      &ldquo;{quote.original}&rdquo;
    </p>
    <span class="mt-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
      {langLabel}
    </span>
  </blockquote>

  <!-- Translation in viewer's language -->
  {#if quote.translation && quote.translation !== quote.original}
    <p class="mt-4 pl-5 text-base leading-relaxed text-text-muted">
      &ldquo;{quote.translation}&rdquo;
    </p>
  {/if}

  <!-- Source — original language + translation -->
  <div class="mt-6 flex flex-col gap-1 pl-5 text-sm">
    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
      <a
        href={sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        class="text-accent transition-colors hover:text-accent-hover hover:underline"
      >
        {quote.sourceOriginal} ↗
      </a>
      {#if quote.year}
        <span class="text-text-muted">({quote.year})</span>
      {/if}
    </div>
    {#if showSourceTranslation}
      <span class="text-text-muted/70 text-xs">{quote.source}</span>
    {/if}
  </div>

  <!-- Commentary -->
  {#if quote.comment}
    <p class="mt-4 pl-5 text-sm leading-relaxed text-text-muted/80 italic">
      {quote.comment}
    </p>
  {/if}
</div>
