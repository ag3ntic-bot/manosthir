import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const routes = ["/", "/about", "/services", "/resources", "/booking"];
const themes = ["light", "dark"];
const outDir = "screenshots/themes";

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

for (const theme of themes) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    colorScheme: theme,
  });
  // pre-seed the localStorage so next-themes uses our explicit theme,
  // not the OS preference (we still set colorScheme above for prefers-color-scheme).
  await context.addInitScript((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch (e) {}
  }, theme);

  const page = await context.newPage();

  for (const route of routes) {
    const slug = route === "/" ? "home" : route.replace(/\//g, "");
    await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(200);

    await page
      .locator('nav[data-testid="navbar"]')
      .screenshot({ path: `${outDir}/${slug}-${theme}-navbar.png` });

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(150);
    await page.screenshot({
      path: `${outDir}/${slug}-${theme}-fullpage.png`,
      fullPage: true,
    });

    await page
      .locator('footer[data-testid="footer"]')
      .scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    await page
      .locator('footer[data-testid="footer"]')
      .screenshot({ path: `${outDir}/${slug}-${theme}-footer.png` });

    console.log(`captured ${theme} ${route}`);
  }

  await context.close();
}

await browser.close();
console.log("done");
