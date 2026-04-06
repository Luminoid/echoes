<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';

  let { locale }: { locale: Locale } = $props();
</script>

<footer class="mt-24 border-t border-border">
  <div class="mx-auto max-w-5xl px-6 py-12">
    <div class="flex flex-col items-center gap-4 text-center">
      <p class="font-serif text-lg text-text-secondary">
        {t(locale, 'footer.tagline')}
      </p>
      <p class="text-sm text-text-muted">
        {t(locale, 'footer.rights')}
      </p>
    </div>
  </div>
</footer>
