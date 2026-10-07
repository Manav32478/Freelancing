import { chromium } from "playwright";

async function capture(browser, { width, height }, outPrefix, fullPage = true) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("console: " + m.text());
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);
  // scroll through to trigger whileInView reveals
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += 500;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight + 500) setTimeout(step, 110);
        else resolve(null);
      };
      step();
    });
  });
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
  await page.screenshot({ path: `/home/user/previews/${outPrefix}-hero.png` });
  if (fullPage) {
    await page.screenshot({ path: `/home/user/previews/${outPrefix}-full.png`, fullPage: true });
  }
  await page.close();
  return errors;
}

const browser = await chromium.launch();
const e1 = await capture(browser, { width: 1440, height: 900 }, "desktop");
const e2 = await capture(browser, { width: 390, height: 844 }, "mobile");
await browser.close();
console.log("page errors:", JSON.stringify([...e1, ...e2]));
console.log("done");
