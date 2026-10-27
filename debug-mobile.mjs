import { chromium } from "playwright";

const browser = await chromium.launch();

async function probe(opts, label) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, ...opts });
  page.on("console", (m) => {
    if (m.type() === "log" && m.text().startsWith("IO:")) console.log(label, m.text());
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    const el = document.querySelector(".photo-reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => console.log("IO: native intersecting=", e.isIntersecting)),
      { rootMargin: "-60px" }
    );
    io.observe(el);
    window.addEventListener("scroll", () => {
      const r = el.getBoundingClientRect();
      if (Math.round(window.scrollY) % 2000 < 20)
        console.log(`IO: scrollY=${Math.round(window.scrollY)} elTop=${Math.round(r.top)} elH=${Math.round(r.height)}`);
    });
  });
  await page.evaluate(() => document.querySelector("#team").scrollIntoView());
  await page.waitForTimeout(2500);
  const state = await page.evaluate(() => ({
    clip: getComputedStyle(document.querySelector(".photo-reveal")).clipPath,
    innerH: window.innerHeight,
    scrollY: Math.round(window.scrollY),
    elTop: Math.round(document.querySelector(".photo-reveal").getBoundingClientRect().top),
    reduce: matchMedia("(prefers-reduced-motion: reduce)").matches,
  }));
  console.log(label, "state:", JSON.stringify(state));
  await page.close();
}

await probe({}, "mobileFlags");
await probe({ isMobile: false }, "noMobileFlag");
await browser.close();
console.log("debug done");
