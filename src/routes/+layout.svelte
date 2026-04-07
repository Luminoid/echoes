<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { page } from '$app/state';

  let { children }: { children: Snippet } = $props();

  $effect(() => {
    const locale = page.data?.locale;
    if (locale) document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : 'en';
  });
</script>

{@render children()}
