<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { categoryList } from '$lib/data/types';
  import { t, localePath, switchLocalePath } from '$lib/i18n/translations';
  import { goto } from '$app/navigation';
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
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) menuOpen = false;
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        goto(localePath(locale, '/search/'));
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
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
      <a
        href={localePath(locale, '/search/')}
        class="rounded-full p-1.5 text-text-muted transition-colors hover:text-accent"
        aria-label={t(locale, 'search.title')}
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
      <a
        href={switchLocalePath(page.url.pathname)}
        onclick={(e: MouseEvent) => {
          e.preventDefault();
          goto(switchLocalePath(page.url.pathname), { replaceState: true });
        }}
        class="text-sm font-medium text-text-muted transition-colors hover:text-accent"
      >
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
      <a
        href="https://github.com/Luminoid/echoes"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden rounded-full p-1.5 text-text-muted transition-colors hover:text-accent sm:block"
        aria-label={t(locale, 'github.star')}
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
      <button
        onclick={() => (menuOpen = !menuOpen)}
        class="text-text-muted transition-colors hover:text-accent lg:hidden"
        aria-label={t(locale, 'nav.toggleMenu')}
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
