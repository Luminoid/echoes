import type { Locale } from '$lib/data/types';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'site.title': 'Echoes',
    'site.subtitle': 'Words that echo through time.',
    'site.description':
      'A curated collection of timeless quotes from philosophers, writers, artists, scientists, and more — in English and Chinese.',
    'nav.home': 'Home',
    'home.viewAll': 'View all →',
    'home.featured': 'Featured',
    'detail.backTo': '← Back to',
    'detail.source': 'Source',
    'detail.wikipedia': 'Wikipedia',
    'detail.original': 'Original',
    'detail.translation': 'Translation',
    'filter.placeholder': 'Filter by name...',
    'search.title': 'Search',
    'search.placeholder': 'Search names, quotes, sources...',
    'search.emptyHint': 'Start typing to search across all quotes and people.',
    'category.entries': 'entries',
    'sort.name': 'Name',
    'sort.birthYear': 'Birth Year',
    'search.noResults': 'No results found.',
    'nav.toggleMenu': 'Toggle menu',
    'footer.tagline': 'A curated collection of timeless words.',
    'footer.rights': '© 2026 Echoes. All rights reserved.',
    'lang.switch': '中文',
    'theme.toggle': 'Toggle theme',
    'github.star': 'Star on GitHub',
    'notFound.title': 'Page Not Found',
    'notFound.message': 'The page you are looking for does not exist.',
    'notFound.home': 'Go Home',
  },
  zh: {
    'site.title': '回声',
    'site.subtitle': '穿越时间的话语。',
    'site.description':
      '精选哲学家、作家、艺术家、科学家等的不朽名言——中英双语呈现。',
    'nav.home': '首页',
    'home.viewAll': '查看全部 →',
    'home.featured': '精选',
    'detail.backTo': '← 返回',
    'detail.source': '出处',
    'detail.wikipedia': '维基百科',
    'detail.original': '原文',
    'detail.translation': '译文',
    'filter.placeholder': '按姓名筛选...',
    'search.title': '搜索',
    'search.placeholder': '搜索人物、名言、出处...',
    'search.emptyHint': '输入关键词，搜索所有名言和人物。',
    'category.entries': '位',
    'sort.name': '姓名',
    'sort.birthYear': '出生年份',
    'search.noResults': '未找到结果。',
    'nav.toggleMenu': '切换菜单',
    'footer.tagline': '精选不朽的话语。',
    'footer.rights': '© 2026 回声 (Echoes)。保留所有权利。',
    'lang.switch': 'EN',
    'theme.toggle': '切换主题',
    'github.star': '在 GitHub 上标星',
    'notFound.title': '页面未找到',
    'notFound.message': '您访问的页面不存在。',
    'notFound.home': '返回首页',
  },
};

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? key;
}

export function getLocale(lang?: string): Locale {
  return lang === 'zh' ? 'zh' : 'en';
}

export function localePath(locale: Locale, path: string): string {
  // Ensure path starts with / and ends with /
  let clean = path.startsWith('/') ? path : `/${path}`;
  if (!clean.endsWith('/')) clean += '/';
  if (locale === 'en') return clean;
  return `/zh${clean}`;
}

export function switchLocalePath(currentPath: string): string {
  // Normalize: ensure trailing slash
  let path = currentPath;
  if (!path.endsWith('/')) path += '/';

  if (path.startsWith('/zh/')) {
    // ZH → EN: remove /zh prefix
    return path.slice(3) || '/';
  }
  // EN → ZH: add /zh prefix
  return `/zh${path}`;
}
