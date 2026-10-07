import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2,
});
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

const ids = ["team", "services", "stack", "work", "experience", "process", "contact"];
for (const id of ids) {
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "instant" });
  }, id);
  await page.waitForTimeout(1300);
  await page.screenshot({ path: `/home/user/previews/m-${id}.png` });
}
await browser.close();
console.log("mobile sections done");
