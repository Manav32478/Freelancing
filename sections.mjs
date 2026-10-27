import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
for (const id of ["team", "work", "contact"]) {
  await page.evaluate((i) => document.getElementById(i)?.scrollIntoView({ behavior: "instant", block: "start" }), id);
  await page.waitForTimeout(1100);
  await page.screenshot({ path: `/home/user/previews/section-${id}.png` });
}
await browser.close();
console.log("sections done");
