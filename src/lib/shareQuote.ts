import type { Locale } from './data/types';

interface ShareQuoteOptions {
  quoteText: string;
  translation: string;
  source: string;
  year?: string;
  personName: string;
  locale: Locale;
}

const WIDTH = 1080;
const PADDING = 80;
const CONTENT_LEFT = PADDING + 8;
const CONTENT_WIDTH = WIDTH - PADDING * 2 - 24;
const ACCENT = '#c9a96e';
const BG = '#0f0e0d';
const TEXT_COLOR = '#ede8e0';
const MUTED_COLOR = '#7a7060';

function isCJK(text: string): boolean {
  return /[\u4e00-\u9fff\u3400-\u4dbf]/.test(text);
}

function getFont(size: number, weight: string, text: string): string {
  const family = isCJK(text)
    ? `"Noto Serif SC", "Songti SC", "SimSun", serif`
    : `"Playfair Display", Georgia, serif`;
  return `${weight} ${size}px ${family}`;
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  font: string,
): string[] {
  ctx.font = font;
  const lines: string[] = [];
  const paragraphs = text.split('\n');

  for (const para of paragraphs) {
    if (para === '') {
      lines.push('');
      continue;
    }

    if (isCJK(para)) {
      let currentLine = '';
      for (const char of para) {
        const testLine = currentLine + char;
        if (ctx.measureText(testLine).width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = char;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);
    } else {
      const words = para.split(' ');
      let currentLine = '';
      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        if (ctx.measureText(testLine).width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);
    }
  }

  return lines;
}

/** Measure content height, then render at exact size. */
function renderQuoteImage(options: ShareQuoteOptions): HTMLCanvasElement {
  const { quoteText, translation, source, year, personName } = options;

  // Use an offscreen canvas just for text measurement
  const measure = document.createElement('canvas');
  measure.width = WIDTH;
  measure.height = 1;
  const mCtx = measure.getContext('2d')!;

  // --- Pass 1: measure total height ---
  let h = PADDING + 80; // top padding + opening mark area

  // Opening quote mark space
  h += 60;

  // Quote text
  const quoteFont = getFont(isCJK(quoteText) ? 38 : 36, 'normal', quoteText);
  const quoteLines = wrapText(mCtx, quoteText, CONTENT_WIDTH, quoteFont);
  const quoteLineHeight = isCJK(quoteText) ? 62 : 56;
  h += quoteLines.length * quoteLineHeight;
  h += 20; // gap after quote

  // Translation
  const hasTranslation = translation && translation !== quoteText;
  let transLines: string[] = [];
  const transLineHeight = isCJK(translation) ? 46 : 42;
  if (hasTranslation) {
    const transFont = getFont(isCJK(translation) ? 28 : 26, 'normal', translation);
    transLines = wrapText(mCtx, translation, CONTENT_WIDTH, transFont);
    h += transLines.length * transLineHeight;
    h += 16; // gap after translation
  }

  // Source line
  h += 10 + 28; // gap + source text height

  // Bottom section: person name + branding
  h += 48 + 36 + 28; // gap before name + name height + branding height

  h += PADDING; // bottom padding

  // --- Pass 2: render at measured height ---
  const HEIGHT = h;
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d')!;

  // Background
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Accent border on left
  ctx.fillStyle = ACCENT;
  ctx.fillRect(PADDING - 16, PADDING + 60, 3, HEIGHT - PADDING * 2 - 60);

  let y = PADDING + 80;

  // Opening quotation mark
  ctx.fillStyle = ACCENT;
  ctx.font = `italic 120px Georgia, serif`;
  ctx.fillText('\u201c', CONTENT_LEFT - 10, y + 20);
  y += 60;

  // Main quote text
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = quoteFont;
  for (const line of quoteLines) {
    ctx.fillText(line, CONTENT_LEFT, y);
    y += quoteLineHeight;
  }
  y += 20;

  // Translation
  if (hasTranslation) {
    const transFont = getFont(isCJK(translation) ? 28 : 26, 'normal', translation);
    ctx.fillStyle = MUTED_COLOR;
    ctx.font = transFont;
    for (const line of transLines) {
      ctx.fillText(line, CONTENT_LEFT, y);
      y += transLineHeight;
    }
    y += 16;
  }

  // Source and year
  const sourceLine = year ? `${source} (${year})` : source;
  ctx.fillStyle = MUTED_COLOR;
  ctx.font = getFont(22, 'normal', sourceLine);
  ctx.fillText(`\u2014 ${sourceLine}`, CONTENT_LEFT, y + 10);

  // Person name (anchored from bottom)
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = getFont(isCJK(personName) ? 32 : 30, 'bold', personName);
  ctx.fillText(personName, CONTENT_LEFT, HEIGHT - PADDING - 36);

  // Branding (right-aligned)
  ctx.fillStyle = MUTED_COLOR;
  ctx.font = '18px "Inter", system-ui, sans-serif';
  const brandText = 'echoes.luminoid.dev';
  const brandWidth = ctx.measureText(brandText).width;
  ctx.fillText(brandText, WIDTH - PADDING - brandWidth, HEIGHT - PADDING);

  return canvas;
}

function formatYearForShare(year: number | undefined, locale: Locale): string | undefined {
  if (year == null) return undefined;
  if (year < 0) {
    const abs = Math.abs(year);
    return locale === 'zh' ? `\u7ea6\u516c\u5143\u524d${abs}\u5e74` : `c. ${abs} BC`;
  }
  return String(year);
}

export async function shareQuote(options: ShareQuoteOptions): Promise<void> {
  const canvas = renderQuoteImage(options);
  const blob = await new Promise<Blob>((resolve) =>
    canvas.toBlob((b) => resolve(b!), 'image/png'),
  );

  const file = new File([blob], 'quote.png', { type: 'image/png' });

  // Try Web Share API first (mobile)
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: options.personName,
      });
      return;
    } catch (e) {
      if ((e as DOMException).name === 'AbortError') return;
    }
  }

  // Fallback: download the image
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${options.personName.replace(/\s+/g, '-').toLowerCase()}-quote.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export { formatYearForShare };
