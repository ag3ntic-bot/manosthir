import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const themes = ["light", "dark"];
const viewports = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "mobile", width: 375, height: 800 },
];
const outDir = "screenshots/hero-illustration";
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

for (const theme of themes) {
  for (const vp of viewports) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      colorScheme: theme,
    });
    await ctx.addInitScript((t) => {
      try { localStorage.setItem("theme", t); } catch {}
    }, theme);
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `${outDir}/hero-${theme}-${vp.name}.png`,
      clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 900) },
    });
    console.log(`captured ${theme} ${vp.name}`);
    await ctx.close();
  }
}

// Reduced-motion run on desktop in light theme
{
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    colorScheme: "light",
    reducedMotion: "reduce",
  });
  await ctx.addInitScript(() => {
    try { localStorage.setItem("theme", "light"); } catch {}
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${outDir}/hero-light-desktop-reduced-motion.png`,
    clip: { x: 0, y: 0, width: 1280, height: 900 },
  });
  console.log("captured reduced-motion");
  await ctx.close();
}

await browser.close();
console.log("done");
