import type { Locale } from '#lib/data/types.js';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'site.title': 'Echoes',
    'site.subtitle': 'Words that echo through time.',
    'site.description':
      'A curated collection of timeless quotes from philosophers, writers, artists, scientists, and more — in English and Chinese.',
    'nav.home': 'Home',
    'home.viewAll': 'View all →',
    'home.featured': 'Featured',
    'detail.back': '← Back',
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
    'quote.share': 'Save as image',
    'quote.translator': 'Translated by',
    'notFound.title': 'Page Not Found',
    'notFound.message': 'The page you are looking for does not exist.',
    'notFound.home': 'Go Home',
    'footer.privacy': 'Privacy',
    'privacy.title': 'Privacy',
    'privacy.description':
      'How the Echoes website handles visitor data: static hosting on Cloudflare, no cookies, no analytics, fonts from Google Fonts.',
    'privacy.updated': 'Last updated: October 12, 2026',
    'privacy.intro':
      'Echoes is a static site served by Cloudflare: a set of prebuilt pages with no server code, no accounts, and no database. This page describes everything that happens with your data when you visit.',
    'privacy.hosting':
      "To deliver the pages and protect the site from abuse, Cloudflare's infrastructure processes your IP address and standard request metadata (such as the requested URL, the time of the request, and your browser's user agent string) in transit and in its security logs. We run no analytics and do not collect or store any personal data about visitors.",
    'privacy.cookies':
      'The site sets no cookies and uses no analytics, advertising, or tracking scripts. The only value it keeps in your browser is the theme (light or dark) you choose with the toggle, stored in local storage; it never leaves your device.',
    'privacy.fonts':
      "When a page loads, your browser fetches the site's typefaces from Google Fonts (a stylesheet from fonts.googleapis.com and font files from fonts.gstatic.com), so Google receives your IP address and standard request headers under its own privacy policy. Links to Wikipedia and other external sites take you to those sites, where their own policies apply.",
    'privacy.policies': 'Third-party policies: ',
    'privacy.contact': 'Questions about this page: ',
  },
  zh: {
    'site.title': '回声',
    'site.subtitle': '穿越时间的话语。',
    'site.description':
      '精选哲学家、作家、艺术家、科学家等的不朽名言——中英双语呈现。',
    'nav.home': '首页',
    'home.viewAll': '查看全部 →',
    'home.featured': '精选',
    'detail.back': '← 返回',
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
    'quote.share': '保存为图片',
    'quote.translator': '译者',
    'notFound.title': '页面未找到',
    'notFound.message': '您访问的页面不存在。',
    'notFound.home': '返回首页',
    'footer.privacy': '隐私',
    'privacy.title': '隐私',
    'privacy.description':
      '回声网站如何处理访问者数据：由 Cloudflare 托管的静态网站，不使用 Cookie，没有统计分析，字体来自 Google Fonts。',
    'privacy.updated': '最后更新：2026 年 10 月 12 日',
    'privacy.intro':
      '回声（Echoes）是由 Cloudflare 托管的静态网站：由预先生成的页面组成，没有服务器端代码、账户或数据库。本页说明您访问时与您的数据相关的全部情况。',
    'privacy.hosting':
      '为了交付页面并保护网站免受滥用，Cloudflare 的基础设施会在传输过程中及其安全日志中处理您的 IP 地址和标准请求元数据（如所请求的网址、请求时间和您浏览器的用户代理字符串）。我们不运行任何统计分析，也不收集或存储访问者的任何个人数据。',
    'privacy.cookies':
      '本站不设置 Cookie，也不使用统计分析、广告或跟踪脚本。浏览器中保存的唯一数据是您用切换按钮选择的主题（浅色或深色），存放在本地存储中，不会离开您的设备。',
    'privacy.fonts':
      '页面加载时，您的浏览器会从 Google Fonts 获取本站字体（向 fonts.googleapis.com 请求样式表，向 fonts.gstatic.com 请求字体文件），因此 Google 会收到您的 IP 地址和标准请求标头，适用其自身的隐私政策。指向维基百科等外部网站的链接会前往那些网站，适用它们各自的政策。',
    'privacy.policies': '第三方隐私政策：',
    'privacy.contact': '有关本页的问题：',
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
