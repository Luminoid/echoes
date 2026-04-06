<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import { categoryList } from '$lib/data/types';
  import { localePath } from '$lib/i18n/translations';

  let { locale, active }: { locale: Locale; active?: Category } = $props();
</script>

<nav class="flex flex-wrap justify-center gap-2 px-4">
  {#each categoryList as cat}
    <a
      href={localePath(locale, `/${cat.key}`)}
      class="rounded-full border px-4 py-2 text-sm transition-all duration-200
        {cat.key === active
          ? 'border-accent bg-accent/10 text-accent'
          : 'border-border text-text-muted hover:border-accent/40 hover:text-text-secondary'}"
    >
      {cat.label[locale]}
    </a>
  {/each}
</nav>
