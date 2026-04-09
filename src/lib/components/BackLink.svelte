<script lang="ts">
  import { afterNavigate, goto } from '$app/navigation';
  import type { Locale, Category } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';

  let { category, locale }: { category: Category; locale: Locale } = $props();

  let fromBasePath: string | null = $state(null);
  let fromLocale: Locale | null = $state(null);

  function stripLocale(path: string): string {
    return path.startsWith('/zh/') ? path.slice(3) : path;
  }

  afterNavigate(({ from, to }) => {
    if (from?.url && to?.url) {
      const fromBase = stripLocale(from.url.pathname);
      const toBase = stripLocale(to.url.pathname);
      // Only track actual page changes, not language switches
      if (fromBase !== toBase) {
        fromBasePath = fromBase;
        fromLocale = from.url.pathname.startsWith('/zh/') ? 'zh' : 'en';
      }
    }
  });

  function handleClick(e: MouseEvent) {
    if (fromBasePath) {
      e.preventDefault();
      if (fromLocale === locale) {
        history.back();
      } else {
        goto(localePath(locale, fromBasePath));
      }
    }
  }
</script>

<a
  href={localePath(locale, `/${category}/`)}
  onclick={handleClick}
  class="inline-flex items-center text-sm text-text-muted transition-colors hover:text-accent"
>
  {t(locale, 'detail.back')}
</a>
