// Prerendered sitemap covering every page in both locales (EN at `/...`, ZH under `/zh/...`):
// home, search, privacy, one page per category, and one page per person. Each <url> declares its EN / ZH /
// x-default hreflang alternates, matching the per-page <link rel="alternate"> tags in <head>, so
// search engines index the right language per region. adapter-static writes this to
// build/sitemap.xml, the file static/robots.txt already advertises.
import { categories, getAllPeopleData } from '$lib/data';
import type { RequestHandler } from './$types';

export const prerender = true;

const ORIGIN = 'https://echoes.luminoid.dev';

// Slugs are URL-safe, but the sitemap is XML: escape defensively so one odd name can't break it.
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: RequestHandler = () => {
  // EN-rooted, trailing-slashed paths (trailingSlash: 'always'). ZH is the same under /zh.
  const paths = [
    '/',
    '/search/',
    '/privacy/',
    ...categories.map((category) => `/${category}/`),
    ...getAllPeopleData().map(({ category, person }) => `/${category}/${person.slug}/`),
  ];

  const entries = paths
    .flatMap((path) => {
      const en = escapeXml(`${ORIGIN}${path}`);
      const zh = escapeXml(`${ORIGIN}/zh${path}`);
      const alternates =
        `<xhtml:link rel="alternate" hreflang="en" href="${en}"/>` +
        `<xhtml:link rel="alternate" hreflang="zh" href="${zh}"/>` +
        `<xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
      return [`<url><loc>${en}</loc>${alternates}</url>`, `<url><loc>${zh}</loc>${alternates}</url>`];
    })
    .join('');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    entries +
    `</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
