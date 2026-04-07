<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t, localePath } from '$lib/i18n/translations';
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let locale: Locale = $derived(
    page.url.pathname.startsWith('/zh/') ? 'zh' : 'en',
  );
</script>

<Header {locale} />

<main class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
  <h1 class="font-serif text-5xl font-bold text-text sm:text-6xl">
    {t(locale, 'notFound.title')}
  </h1>
  <p class="mt-4 text-lg text-text-muted">
    {t(locale, 'notFound.message')}
  </p>
  <a
    href={localePath(locale, '/')}
    class="mt-8 rounded-full border border-accent px-6 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
  >
    {t(locale, 'notFound.home')}
  </a>
</main>

<Footer {locale} />
