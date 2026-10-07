import { chromium } from "playwright";

const browser = await chromium.launch();

for (const [w, h, name] of [
  [390, 844, "390"],
  [360, 740, "360"],
]) {
  const page = await browser.newPage({
    viewport: { width: w, height: h },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  // incremental scroll so inView reveals + lazy assets all trigger
  await page.evaluate(async () => {
    const step = Math.floor(window.innerHeight / 2);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1400);

  const report = await page.evaluate(() => {
    const dw = document.documentElement.clientWidth;
    const sw = document.documentElement.scrollWidth;
    const bad = [];
    if (sw > dw + 1) {
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > dw + 2 || r.left < -2)) {
          const cs = getComputedStyle(el.parentElement || el);
          if (cs.overflowX === "hidden") return; // clipped, not scrollable
          bad.push(
            `${el.tagName.toLowerCase()}.${String(el.className).split(" ")[0]} left=${Math.round(r.left)} right=${Math.round(r.right)}`
          );
        }
      });
    }
    // check founder images actually rendered
    const imgs = [...document.querySelectorAll(".founder-photo img")].map((i) => ({
      src: i.getAttribute("src"),
      complete: i.complete,
      nw: i.naturalWidth,
      visible: !!(i.offsetWidth || i.offsetHeight),
      clip: getComputedStyle(i.closest(".photo-reveal") || i).clipPath,
    }));
    return { clientW: dw, scrollW: sw, bad: bad.slice(0, 20), imgs };
  });
  console.log(`\n=== ${name}px ===`, JSON.stringify(report, null, 1));

  await page.screenshot({ path: `/home/user/previews/fx-mobile-${name}-full.png`, fullPage: true });
  await page.close();
}

await browser.close();
console.log("mobile audit done");
