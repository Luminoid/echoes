<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import type { Quote } from '$lib/data/types';
  import { langNames } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';
  import { shareQuote, formatYearForShare } from '$lib/shareQuote';

  let { quote, locale, personName }: { quote: Quote; locale: Locale; personName?: string } = $props();

  let sharing = $state(false);

  function formatYear(year: number, loc: Locale): string {
    if (year < 0) {
      const absYear = Math.abs(year);
      return loc === 'zh' ? `约公元前${absYear}年` : `c. ${absYear} BC`;
    }
    return String(year);
  }

  const sourceLink = $derived(
    quote.sourceUrl ||
      `https://www.google.com/search?q=${encodeURIComponent(quote.sourceOriginal + (quote.year ? ` ${quote.year}` : ''))}`,
  );

  const langLabel = $derived(langNames[quote.originalLang]?.[locale] ?? quote.originalLang);
  const showSourceTranslation = $derived(
    quote.source !== quote.sourceOriginal && quote.source && quote.sourceOriginal,
  );

  async function handleShare() {
    if (sharing || !personName) return;
    sharing = true;
    try {
      await shareQuote({
        quoteText: quote.original,
        translation: quote.translation,
        source: quote.sourceOriginal,
        year: formatYearForShare(quote.year, locale),
        personName,
        locale,
      });
    } finally {
      sharing = false;
    }
  }
</script>

<div class="group relative rounded-xl border border-border-subtle bg-quote-bg p-6 sm:p-8">
  {#if personName}
    <button
      onclick={handleShare}
      disabled={sharing}
      class="hidden sm:block absolute top-4 right-4 rounded-lg p-2 text-text-muted/40 transition-colors hover:bg-accent/10 hover:text-accent focus:text-accent opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
      aria-label={t(locale, 'quote.share')}
      title={t(locale, 'quote.share')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    </button>
  {/if}

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
    {#if quote.translator}
      <p class="mt-1 pl-5 text-xs text-text-muted/60">
        {t(locale, 'quote.translator')}: {quote.translator}
      </p>
    {/if}
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
        <span class="text-text-muted">({formatYear(quote.year, locale)})</span>
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

  <!-- Mobile share button (in-flow at bottom) -->
  {#if personName}
    <button
      onclick={handleShare}
      disabled={sharing}
      class="sm:hidden mt-4 ml-auto flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-text-muted/60 transition-colors hover:bg-accent/10 hover:text-accent disabled:opacity-50"
      aria-label={t(locale, 'quote.share')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
      {t(locale, 'quote.share')}
    </button>
  {/if}
</div>
