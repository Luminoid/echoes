<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { categoryList } from '$lib/data/types';
  import { t, localePath, switchLocalePath } from '$lib/i18n/translations';
  import { page } from '$app/state';

  let { locale }: { locale: Locale } = $props();

  let menuOpen = $state(false);
  let scrolled = $state(false);

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('echoes-theme', next);
  }

  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'border-b border-border bg-bg/90 backdrop-blur-md' : ''}"
>
  <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <a href={localePath(locale, '/')} class="font-serif text-xl font-bold text-accent">
      {t(locale, 'site.title')}
    </a>

    <div class="flex items-center gap-4">
      <a href={switchLocalePath(page.url.pathname)} class="text-sm font-medium text-text-muted transition-colors hover:text-accent">
        {t(locale, 'lang.switch')}
      </a>
      <button
        onclick={toggleTheme}
        class="rounded-full p-1.5 text-text-muted transition-colors hover:text-accent"
        aria-label={t(locale, 'theme.toggle')}
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
      <button
        onclick={() => (menuOpen = !menuOpen)}
        class="text-text-muted transition-colors hover:text-accent lg:hidden"
        aria-label="Toggle menu"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          {#if menuOpen}
            <path d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile dropdown -->
  {#if menuOpen}
    <div class="border-b border-border bg-bg px-6 pb-4 lg:hidden">
      <div class="grid grid-cols-2 gap-2">
        {#each categoryList as cat}
          <a
            href={localePath(locale, `/${cat.key}/`)}
            class="rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-bg-card hover:text-accent"
            onclick={() => (menuOpen = false)}
          >
            {cat.label[locale]}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
