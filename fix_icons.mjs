import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set transparent background
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: transparent; overflow: hidden; }
          svg { width: 100%; height: 100%; display: block; }
        </style>
      </head>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#a3172b"/><g stroke-linejoin="round" stroke-linecap="round"><path d="M32 28 L28.5 17 L40 23.5" fill="#a3172b" stroke="#f3ebdd" stroke-width="4.5"/><path d="M68 28 L71.5 17 L60 23.5" fill="#a3172b" stroke="#f3ebdd" stroke-width="4.5"/><circle cx="50" cy="48" r="27" fill="#a3172b" stroke="#f3ebdd" stroke-width="4.5"/><circle cx="38" cy="46" r="10.5" fill="#a3172b" stroke="#f3ebdd" stroke-width="3.5"/><circle cx="38" cy="46" r="6.6" fill="none" stroke="#d4a23a" stroke-width="3.4"/><path d="M33.8 46 A4.2 4.2 0 0 0 42.2 46 Z" fill="#f3ebdd"/><circle cx="38" cy="47.6" r="1.7" fill="#16110d"/><line x1="33.2" y1="46" x2="42.8" y2="46" stroke="#f3ebdd" stroke-width="2.2"/><circle cx="62" cy="46" r="10.5" fill="#a3172b" stroke="#f3ebdd" stroke-width="3.5"/><circle cx="62" cy="46" r="6.6" fill="none" stroke="#d4a23a" stroke-width="3.4"/><path d="M57.8 46 A4.2 4.2 0 0 0 66.2 46 Z" fill="#f3ebdd"/><circle cx="62" cy="47.6" r="1.7" fill="#16110d"/><line x1="57.2" y1="46" x2="66.8" y2="46" stroke="#f3ebdd" stroke-width="2.2"/><path d="M45.5 58 L54.5 58 L50 65.5 Z" fill="#f3ebdd"/><circle cx="50" cy="79" r="3.6" fill="#d4a23a"/><path d="M46.5 81.5 L42.5 91 L49 86 Z M53.5 81.5 L57.5 91 L51 86 Z" fill="#d4a23a"/></g></svg>
      </body>
    </html>
  `;

  await page.setContent(html);

  const sizes = [192, 512];
  for (const size of sizes) {
    await page.setViewportSize({ width: size, height: size });
    await page.screenshot({ path: `public/icon-${size}.png`, omitBackground: true });
  }

  // Also apple touch icon (usually white bg, but transparent is fine or we can fill)
  await page.setViewportSize({ width: 180, height: 180 });
  await page.screenshot({ path: 'public/apple-touch-icon.png', omitBackground: true });

  // For favicon.ico we would need a package, but let's stick to updating the PNGs for now
  
  await browser.close();
})();
