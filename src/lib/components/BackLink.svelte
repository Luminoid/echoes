<script lang="ts">
  import type { Locale, Category } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';
  import { getCategoryInfo } from '$lib/data';

  let { category, locale }: { category: Category; locale: Locale } = $props();

  const info = getCategoryInfo(category, locale);
</script>

<a
  href={localePath(locale, `/${category}`)}
  class="inline-flex items-center text-sm text-text-muted transition-colors hover:text-accent"
>
  {t(locale, 'detail.backTo')} {info?.label ?? category}
</a>
