import fs from 'fs';

let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace the @theme block
const newTheme = `@theme {
  --color-paper: #09090b;
  --color-paper-2: #18181b;
  --color-ink: #f8fafc;
  --color-ink-2: #e2e8f0;
  --color-grana: #f43f5e;
  --color-grana-2: #e11d48;
  --color-oro: #fbbf24;
  --color-satin: #22d3ee;
  --color-wa: #075e54;
  --color-wa-bubble: #005c4b;

  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-sans: "Geist", system-ui, -apple-system, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, monospace;
}`;

css = css.replace(/@theme \{[\s\S]*?\}/, newTheme);

// Fix .font-display
const fontDisplayRule = `.font-display {
  font-family: var(--font-display);
  font-optical-sizing: auto;
  letter-spacing: -0.04em;
}`;

css = css.replace(/\.font-display \{[\s\S]*?\}/, fontDisplayRule);

// Update WA wallpaper for dark mode
const waWallpaper = `.wa-wallpaper {
  background-color: #0b141a;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 14px 14px;
}`;

css = css.replace(/\.wa-wallpaper \{[\s\S]*?\}/, waWallpaper);

fs.writeFileSync('src/index.css', css);
