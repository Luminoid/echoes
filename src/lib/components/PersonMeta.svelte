<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import type { Person } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';

  let { person, locale }: { person: Person; locale: Locale } = $props();
</script>

<div class="mb-12">
  <h1 class="font-serif text-4xl font-bold text-text sm:text-5xl">
    {person.name}
  </h1>
  <p class="mt-3 text-lg text-text-muted">
    {person.nationality} · {person.years}
  </p>
  <p class="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
    {person.bio}
  </p>
  {#if person.wikipedia}
    <a
      href={person.wikipedia}
      target="_blank"
      rel="noopener noreferrer"
      class="mt-3 inline-block text-sm text-accent transition-colors hover:text-accent-hover"
    >
      {t(locale, 'detail.wikipedia')} ↗
    </a>
  {/if}
</div>
