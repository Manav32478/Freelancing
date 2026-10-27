import { chromium } from "playwright";

const browser = await chromium.launch();

async function shoot(url, path, opts = {}) {
  const page = await browser.newPage({ viewport: opts.mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 }, isMobile: !!opts.mobile, hasTouch: !!opts.mobile });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    const step = Math.floor(window.innerHeight / 2);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `/home/user/previews/${path}.png`, fullPage: !!opts.full });
  await page.close();
  return errors;
}

const base = "http://localhost:3000";
for (const [url, name, o] of [
  [base + "/", "g-home", {}],
  [base + "/services", "g-services-hub", {}],
  [base + "/services/hotel-websites", "g-service-hotel", {}],
  [base + "/hospitality", "g-hospitality", {}],
  [base + "/work/cloud-arcade", "g-case-arcade", {}],
  [base + "/blog", "g-blog", {}],
  [base + "/hospitality", "g-hospitality-mobile", { mobile: true, full: true }],
  [base + "/services/hotel-websites", "g-hotel-mobile", { mobile: true, full: true }],
]) {
  const errs = await shoot(url, name, o);
  console.log(name, "errors:", errs.slice(0, 3));
}
await browser.close();
console.log("pages capture done");
