<script lang="ts">
  import type { Locale } from '$lib/data/types';
  import { t } from '$lib/i18n/translations';
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data } = $props();
  let locale = $derived(data.locale as Locale);

  let enUrl = $derived(`${page.url.origin}/privacy/`);
  let zhUrl = $derived(`${page.url.origin}/zh/privacy/`);
  let canonicalUrl = $derived(locale === 'en' ? enUrl : zhUrl);

  const EMAIL = 'yaluminoid@gmail.com';
</script>

<svelte:head>
  <title>{t(locale, 'privacy.title')} — {t(locale, 'site.title')}</title>
  <meta name="description" content={t(locale, 'privacy.description')} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="zh" href={zhUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />
</svelte:head>

<Header {locale} />

<main class="mx-auto max-w-3xl px-6 pt-28 pb-24">
  <h1 class="mb-2 font-serif text-3xl font-bold text-text sm:text-4xl">
    {t(locale, 'privacy.title')}
  </h1>
  <p class="mb-8 text-sm text-text-muted">{t(locale, 'privacy.updated')}</p>

  <div class="space-y-5 leading-relaxed text-text-secondary">
    <p>{t(locale, 'privacy.intro')}</p>
    <p>{t(locale, 'privacy.hosting')}</p>
    <p>{t(locale, 'privacy.cookies')}</p>
    <p>{t(locale, 'privacy.fonts')}</p>
    <p>
      {t(locale, 'privacy.policies')}<a
        href="https://www.cloudflare.com/privacypolicy/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-accent transition-colors hover:text-accent-hover">Cloudflare</a
      >
      ·
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        class="text-accent transition-colors hover:text-accent-hover">Google</a
      >
    </p>
    <p>
      {t(locale, 'privacy.contact')}<a
        href="mailto:{EMAIL}"
        class="text-accent transition-colors hover:text-accent-hover">{EMAIL}</a
      >
    </p>
  </div>
</main>

<Footer {locale} />
