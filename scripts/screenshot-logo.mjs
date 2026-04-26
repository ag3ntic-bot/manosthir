import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const routes = ["/", "/about", "/services", "/resources", "/booking"];
const outDir = "screenshots";

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

for (const route of routes) {
  const slug = route === "/" ? "home" : route.replace(/\//g, "");
  const url = `http://localhost:3000${route}`;

  await page.goto(url, { waitUntil: "networkidle" });

  await page
    .locator('nav[data-testid="navbar"]')
    .screenshot({ path: `${outDir}/${slug}-navbar.png` });

  await page
    .locator('footer[data-testid="footer"]')
    .scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  await page
    .locator('footer[data-testid="footer"]')
    .screenshot({ path: `${outDir}/${slug}-footer.png` });

  console.log(`captured ${route}`);
}

await browser.close();
console.log("done");
