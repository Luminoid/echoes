<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';

  let { locale }: { locale: Locale } = $props();
</script>

<footer class="mt-24 border-t border-border">
  <div class="mx-auto max-w-5xl px-6 py-12">
    <div class="flex flex-col items-center gap-5 text-center">
      <p class="font-serif text-lg text-text-secondary">
        {t(locale, 'footer.tagline')}
      </p>
      <a
        href="https://github.com/Luminoid/echoes"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
      >
        <svg class="h-4 w-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <svg class="h-3.5 w-3.5 text-accent/70 transition-colors duration-300 group-hover:text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {t(locale, 'github.star')}
      </a>
      <p class="text-sm text-text-muted">
        {t(locale, 'footer.rights')}
      </p>
    </div>
  </div>
</footer>
