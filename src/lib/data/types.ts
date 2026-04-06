export type Locale = 'en' | 'zh';

export type Category =
  | 'philosophers'
  | 'writers'
  | 'poets'
  | 'playwrights'
  | 'essayists'
  | 'comedians'
  | 'artists'
  | 'architects'
  | 'photographers'
  | 'designers'
  | 'musicians'
  | 'filmmakers'
  | 'scientists'
  | 'psychologists'
  | 'activists'
  | 'cinema';

export interface QuoteData {
  text: Record<Locale, string>;
  original?: string;           // Actual text in the source language (French, German, etc.)
  originalLang?: string;       // ISO code: 'fr', 'de', 'ru', 'ja', 'ko', 'es', 'pt', 'en', 'zh', etc.
  originalLocale?: Locale;     // Deprecated — kept for backward compat during migration
  source: Record<Locale, string>;
  year?: number;
  sourceUrl?: string;
  comment?: Record<Locale, string>;
  speaker?: Record<Locale, string>;
}

export interface PersonData {
  slug: string;
  name: Record<Locale, string>;
  years: string;
  nationality: Record<Locale, string>;
  bio: Record<Locale, string>;
  wikipedia?: Record<Locale, string>;
  quotes: QuoteData[];
}

/** Language display names */
export const langNames: Record<string, Record<Locale, string>> = {
  en: { en: 'English', zh: '英语' },
  zh: { en: 'Chinese', zh: '中文' },
  fr: { en: 'Fran\u00e7ais', zh: '法语' },
  de: { en: 'Deutsch', zh: '德语' },
  ru: { en: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439', zh: '俄语' },
  ja: { en: '\u65e5\u672c\u8a9e', zh: '日语' },
  ko: { en: '\ud55c\uad6d\uc5b4', zh: '韩语' },
  es: { en: 'Espa\u00f1ol', zh: '西班牙语' },
  pt: { en: 'Portugu\u00eas', zh: '葡萄牙语' },
  it: { en: 'Italiano', zh: '意大利语' },
  la: { en: 'Latina', zh: '拉丁语' },
  grc: { en: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac', zh: '古希腊语' },
  da: { en: 'Dansk', zh: '丹麦语' },
  no: { en: 'Norsk', zh: '挪威语' },
  sv: { en: 'Svenska', zh: '瑞典语' },
  pl: { en: 'Polski', zh: '波兰语' },
  cs: { en: '\u010ce\u0161tina', zh: '捷克语' },
  ar: { en: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629', zh: '阿拉伯语' },
  fa: { en: '\u0641\u0627\u0631\u0633\u06cc', zh: '波斯语' },
  hi: { en: '\u0939\u093f\u0928\u094d\u0926\u0940', zh: '印地语' },
  bn: { en: '\u09ac\u09be\u0982\u09b2\u09be', zh: '孟加拉语' },
};

export interface Quote {
  original: string;            // Text in the source language
  originalLang: string;        // Language code
  translation: string;         // Translation in the viewer's locale
  source: string;              // Source in the viewer's locale
  sourceOriginal: string;      // Source in the original language
  year?: number;
  sourceUrl?: string;
  comment?: string;
  speaker?: string;
}

export interface Person {
  slug: string;
  name: string;
  years: string;
  nationality: string;
  bio: string;
  wikipedia?: string;
  quotes: Quote[];
}

export interface CategoryInfo {
  key: Category;
  label: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const categoryList: CategoryInfo[] = [
  {
    key: 'philosophers',
    label: { en: 'Philosophers', zh: '哲学家' },
    description: {
      en: 'Thinkers who questioned everything.',
      zh: '质疑一切的思想者。',
    },
  },
  {
    key: 'writers',
    label: { en: 'Writers', zh: '作家' },
    description: {
      en: 'Storytellers who shaped how we see the world.',
      zh: '重塑我们世界观的叙事者。',
    },
  },
  {
    key: 'poets',
    label: { en: 'Poets', zh: '诗人' },
    description: {
      en: 'Voices that distilled experience into verse.',
      zh: '将人生经验凝练成诗句的声音。',
    },
  },
  {
    key: 'playwrights',
    label: { en: 'Playwrights', zh: '剧作家' },
    description: {
      en: 'Masters of the stage who gave voice to the human condition.',
      zh: '在舞台上赋予人类境遇以声音的大师。',
    },
  },
  {
    key: 'essayists',
    label: { en: 'Essayists & Critics', zh: '散文家与评论家' },
    description: {
      en: 'Long-form thinkers who illuminated culture and ideas.',
      zh: '以长篇思考照亮文化与思想的人。',
    },
  },
  {
    key: 'comedians',
    label: { en: 'Comedians & Satirists', zh: '喜剧家与讽刺家' },
    description: {
      en: 'Truth-tellers who made us laugh to keep from crying.',
      zh: '用笑声揭示真相的人。',
    },
  },
  {
    key: 'artists',
    label: { en: 'Artists', zh: '艺术家' },
    description: {
      en: 'Visionaries who redefined what art could be.',
      zh: '重新定义艺术可能性的远见者。',
    },
  },
  {
    key: 'architects',
    label: { en: 'Architects', zh: '建筑师' },
    description: {
      en: 'Builders who shaped the spaces we inhabit.',
      zh: '塑造我们栖居空间的建造者。',
    },
  },
  {
    key: 'photographers',
    label: { en: 'Photographers', zh: '摄影师' },
    description: {
      en: 'Eyes that froze fleeting moments into eternity.',
      zh: '将转瞬即逝定格为永恒的眼睛。',
    },
  },
  {
    key: 'designers',
    label: { en: 'Designers', zh: '设计师' },
    description: {
      en: 'Minds that gave form to function and beauty.',
      zh: '赋予功能与美以形式的头脑。',
    },
  },
  {
    key: 'musicians',
    label: { en: 'Musicians', zh: '音乐家' },
    description: {
      en: 'Sound architects who moved us beyond words.',
      zh: '用声音带我们超越语言的建筑师。',
    },
  },
  {
    key: 'filmmakers',
    label: { en: 'Filmmakers', zh: '电影人' },
    description: {
      en: 'Auteurs who painted with light and time.',
      zh: '以光影和时间作画的作者。',
    },
  },
  {
    key: 'scientists',
    label: { en: 'Scientists', zh: '科学家' },
    description: {
      en: 'Explorers of nature who revealed the universe\'s secrets.',
      zh: '揭示宇宙奥秘的自然探索者。',
    },
  },
  {
    key: 'psychologists',
    label: { en: 'Psychologists', zh: '心理学家' },
    description: {
      en: 'Cartographers of the inner landscape.',
      zh: '内心世界的制图师。',
    },
  },
  {
    key: 'activists',
    label: { en: 'Activists & Leaders', zh: '社会活动家' },
    description: {
      en: 'Voices that bent the arc of history toward justice.',
      zh: '将历史弧线引向正义的声音。',
    },
  },
  {
    key: 'cinema',
    label: { en: 'Cinema', zh: '电影台词' },
    description: {
      en: 'Lines that echo long after the credits roll.',
      zh: '在字幕落下之后，依然回荡的台词。',
    },
  },
];

export const categories: Category[] = categoryList.map((c) => c.key);
