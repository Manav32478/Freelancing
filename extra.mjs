import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(2300);
// mid-stack: scroll so 2nd project card is pinned
await page.evaluate(() => {
  const el = document.getElementById("work");
  window.scrollTo(0, el.offsetTop + 900);
});
await page.waitForTimeout(1300);
await page.screenshot({ path: "/home/user/previews/fx-stack.png" });
// footer wordmark
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1300);
await page.screenshot({ path: "/home/user/previews/fx-footer.png" });
await browser.close();
console.log("extra done");
