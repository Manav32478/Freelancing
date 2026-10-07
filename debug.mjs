import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.evaluate(() => document.getElementById("team")?.scrollIntoView({ behavior: "instant" }));
await page.waitForTimeout(1500);
const info = await page.evaluate(() => {
  const spans = Array.from(document.querySelectorAll(".mask-line > span")).slice(0, 4);
  return spans.map((s) => ({
    text: s.textContent?.slice(0, 20),
    transform: getComputedStyle(s).transform,
    opacity: getComputedStyle(s).opacity,
  }));
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
