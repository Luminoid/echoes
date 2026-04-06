<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';

  let { locale, value = $bindable('') }: { locale: Locale; value: string } = $props();
</script>

<div class="relative">
  <svg
    class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
  <input
    type="text"
    bind:value
    placeholder={t(locale, 'filter.placeholder')}
    class="w-full rounded-lg border border-border bg-bg-card py-2.5 pl-10 pr-4 text-sm text-text transition-colors placeholder:text-text-muted/50 focus:border-accent/50 focus:outline-none"
  />
</div>
