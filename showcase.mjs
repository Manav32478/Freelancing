import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push("console: " + m.text());
});

await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(450);
await page.screenshot({ path: "/home/user/previews/fx-preloader.png" });

await page.waitForTimeout(2200);
await page.screenshot({ path: "/home/user/previews/fx-hero.png" });

// sticky services: scroll into the middle of the list
await page.evaluate(() => {
  const el = document.getElementById("services");
  window.scrollTo(0, el.offsetTop + 700);
});
await page.waitForTimeout(1200);
await page.screenshot({ path: "/home/user/previews/fx-services-sticky.png" });

// founders photo reveal
await page.evaluate(() => document.getElementById("team")?.scrollIntoView({ behavior: "instant" }));
await page.waitForTimeout(1400);
await page.screenshot({ path: "/home/user/previews/fx-team.png" });

// process with active steps
await page.evaluate(() => {
  const el = document.getElementById("process");
  window.scrollTo(0, el.offsetTop + 200);
});
await page.waitForTimeout(1300);
await page.screenshot({ path: "/home/user/previews/fx-process.png" });

// CTA marquee
await page.evaluate(() => {
  const els = document.querySelectorAll("section");
  const cta = Array.from(els).find((s) => s.querySelector(".cta-title"));
  cta?.scrollIntoView({ behavior: "instant", block: "center" });
});
await page.waitForTimeout(1300);
await page.screenshot({ path: "/home/user/previews/fx-cta.png" });

// full pages
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = () => {
      y += 500;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight + 500) setTimeout(step, 100);
      else resolve(null);
    };
    step();
  });
});
await page.waitForTimeout(1000);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await page.screenshot({ path: "/home/user/previews/fx-desktop-full.png", fullPage: true });

const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.goto("http://localhost:3000", { waitUntil: "networkidle" });
await m.waitForTimeout(2200);
await m.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = () => {
      y += 450;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight + 450) setTimeout(step, 90);
      else resolve(null);
    };
    step();
  });
});
await m.waitForTimeout(900);
await m.evaluate(() => window.scrollTo(0, 0));
await m.waitForTimeout(600);
await m.screenshot({ path: "/home/user/previews/fx-mobile-full.png", fullPage: true });

await browser.close();
console.log("errors:", JSON.stringify(errors));
console.log("showcase done");
