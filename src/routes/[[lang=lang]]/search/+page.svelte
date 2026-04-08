<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';
  import { searchAll, getCategoryInfo } from '$lib/data';
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data } = $props();
  let locale = $derived(data.locale as Locale);

  let query = $state('');
  let searchInput: HTMLInputElement;
  let results = $derived(searchAll(query, locale));

  let enUrl = $derived(`${page.url.origin}/search/`);
  let zhUrl = $derived(`${page.url.origin}/zh/search/`);
  let canonicalUrl = $derived(locale === 'en' ? enUrl : zhUrl);

  onMount(() => {
    searchInput?.focus();
  });

  /** Lowercase, strip diacritics, treat hyphens as spaces. */
  function normalize(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/-/g, ' ')
      .toLowerCase();
  }

  /** Normalize and build a map from each normalized-char index back to its original-char index. */
  function normalizeWithMap(text: string): { norm: string; toOrig: number[] } {
    const nfd = text.normalize('NFD');
    let norm = '';
    const toOrig: number[] = [];

    // Map each NFD index → original string index
    const nfdMap: number[] = [];
    let oi = 0;
    let ni = 0;
    while (oi < text.length) {
      const expanded = text.charAt(oi).normalize('NFD');
      for (let j = 0; j < expanded.length; j++) nfdMap[ni++] = oi;
      oi++;
    }

    // Strip combining marks, replace hyphens with spaces, lowercase
    for (let i = 0; i < nfd.length; i++) {
      const code = nfd.charCodeAt(i);
      if (code >= 0x0300 && code <= 0x036f) continue;
      norm += (nfd[i] === '-' ? ' ' : nfd[i]).toLowerCase();
      toOrig.push(nfdMap[i]);
    }

    return { norm, toOrig };
  }

  function splitHighlight(text: string, q: string): { text: string; match: boolean }[] {
    const tokens = normalize(q).split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return [{ text, match: false }];

    const { norm, toOrig } = normalizeWithMap(text);

    // Find match ranges in normalized text, map back to original positions
    const ranges: [number, number][] = [];
    for (const tok of tokens) {
      let idx = norm.indexOf(tok);
      while (idx !== -1) {
        const origStart = toOrig[idx];
        const origEnd =
          idx + tok.length < toOrig.length ? toOrig[idx + tok.length] : text.length;
        ranges.push([origStart, origEnd]);
        idx = norm.indexOf(tok, idx + 1);
      }
    }
    if (ranges.length === 0) return [{ text, match: false }];

    // Merge overlapping ranges
    ranges.sort((a, b) => a[0] - b[0]);
    const merged: [number, number][] = [ranges[0]];
    for (let i = 1; i < ranges.length; i++) {
      const prev = merged[merged.length - 1];
      if (ranges[i][0] <= prev[1]) {
        prev[1] = Math.max(prev[1], ranges[i][1]);
      } else {
        merged.push(ranges[i]);
      }
    }

    // Build parts from original text
    const parts: { text: string; match: boolean }[] = [];
    let last = 0;
    for (const [start, end] of merged) {
      if (start > last) parts.push({ text: text.slice(last, start), match: false });
      parts.push({ text: text.slice(start, end), match: true });
      last = end;
    }
    if (last < text.length) parts.push({ text: text.slice(last), match: false });
    return parts;
  }
</script>

<svelte:head>
  <title>{t(locale, 'search.title')} — {t(locale, 'site.title')}</title>
  <meta name="description" content={t(locale, 'site.description')} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="zh" href={zhUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />
</svelte:head>

{#snippet hl(text: string)}
  {#each splitHighlight(text, query) as part}{#if part.match}<mark class="rounded-sm bg-accent/20 text-accent">{part.text}</mark>{:else}{part.text}{/if}{/each}
{/snippet}

<Header {locale} />

<main class="mx-auto max-w-5xl px-6 pt-28 pb-24">
  <h1 class="mb-6 font-serif text-3xl font-bold text-text sm:text-4xl">
    {t(locale, 'search.title')}
  </h1>

  <!-- Search input -->
  <div class="relative mb-8">
    <svg
      class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      bind:this={searchInput}
      bind:value={query}
      type="text"
      placeholder={t(locale, 'search.placeholder')}
      aria-label={t(locale, 'search.placeholder')}
      class="w-full rounded-xl border border-border bg-bg-card py-3.5 pl-12 pr-4 text-base text-text transition-colors placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none"
    />
  </div>

  <!-- Status line — always present to prevent layout shift -->
  <p class="mb-6 text-sm text-text-muted" aria-live="polite">
    {#if !query.trim()}
      {t(locale, 'search.emptyHint')}
    {:else if results.length === 0}
      {t(locale, 'search.noResults')}
    {:else}
      {results.length} {locale === 'en' ? (results.length === 1 ? 'result' : 'results') : '条结果'}
    {/if}
  </p>

  <!-- Results -->
  <div class="space-y-4">
    {#each results as result (result.person.slug + result.category)}
      {@const catInfo = getCategoryInfo(result.category, locale)}
      {@const displayQuote = result.matchedQuotes.length > 0 ? result.matchedQuotes[0] : result.person.quotes[0]}
      <a
        href={localePath(locale, `/${result.category}/${result.person.slug}/`)}
        class="group block rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:bg-bg-card-hover"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="font-serif text-lg font-semibold text-text transition-colors group-hover:text-accent">
              {@render hl(result.person.name)}
            </h3>
            <p class="mt-1 text-sm text-text-muted">
              {result.person.nationality} · {result.person.years}
            </p>
          </div>
          <span class="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
            {catInfo?.label}
          </span>
        </div>

        {#if displayQuote}
          <blockquote class="mt-4 border-l-2 border-quote-border pl-4">
            <p class="line-clamp-3 font-serif text-sm leading-relaxed text-text-secondary italic">
              &ldquo;{@render hl(displayQuote.original)}&rdquo;
            </p>
            {#if displayQuote.translation && displayQuote.translation !== displayQuote.original}
              <p class="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
                &ldquo;{@render hl(displayQuote.translation)}&rdquo;
              </p>
            {/if}
            {#if displayQuote.source}
              <p class="mt-2 text-xs text-text-muted">
                {@render hl(displayQuote.source)}
                {#if displayQuote.year}
                  ({displayQuote.year})
                {/if}
              </p>
            {/if}
          </blockquote>
        {/if}

        {#if result.matchedQuotes.length > 1}
          <p class="mt-3 text-xs text-accent">
            + {result.matchedQuotes.length - 1}
            {locale === 'en' ? (result.matchedQuotes.length - 1 === 1 ? 'more quote matched' : 'more quotes matched') : '条更多匹配'}
          </p>
        {/if}
      </a>
    {/each}
  </div>
</main>

<Footer {locale} />
