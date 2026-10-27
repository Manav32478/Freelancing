"use client";

/* Abstract "product" artwork per project — rendered in the house dark
   palette so every card feels part of the same luxury system. */

type Props = {
  kind: "commerce" | "arcade" | "safety" | "portfolio";
};

const C = {
  canvas: "#081020",
  panel: "#0c1526",
  panelStroke: "rgba(126, 164, 214, 0.18)",
  barStrong: "rgba(230, 238, 250, 0.14)",
  barSoft: "rgba(230, 238, 250, 0.07)",
  gold: "#b9cfe8",
  goldSoft: "rgba(126, 164, 214, 0.35)",
  glyph: "rgba(183, 208, 240, 0.8)",
};

export default function ProjectArt({ kind }: Props) {
  return (
    <svg viewBox="0 0 800 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`art-gold-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f74a8" />
          <stop offset="1" stopColor="#d7e4f7" />
        </linearGradient>
      </defs>

      {/* canvas */}
      <rect width="800" height="560" fill={C.canvas} />

      {kind === "commerce" && (
        <g>
          {/* e-commerce storefront mock */}
          <rect x="150" y="120" width="300" height="330" rx="16" fill={C.panel} stroke={C.panelStroke} />
          <rect x="178" y="148" width="120" height="8" rx="4" fill={C.barStrong} />
          <rect x="178" y="172" width="200" height="26" rx="6" fill={`url(#art-gold-${kind})`} opacity="0.9" />
          <rect x="178" y="222" width="110" height="120" rx="10" fill={C.barSoft} stroke={C.panelStroke} />
          <rect x="300" y="222" width="110" height="120" rx="10" fill={C.barSoft} stroke={C.panelStroke} />
          <rect x="178" y="366" width="232" height="30" rx="8" fill={C.barSoft} />
          <rect x="178" y="408" width="150" height="14" rx="7" fill={C.goldSoft} />

          {/* product cards */}
          <rect x="490" y="150" width="160" height="120" rx="12" fill={C.panel} stroke={C.panelStroke} />
          <circle cx="570" cy="196" r="22" fill="none" stroke={C.goldSoft} strokeWidth="1.5" />
          <rect x="520" y="234" width="100" height="8" rx="4" fill={C.barStrong} />
          <rect x="490" y="294" width="160" height="120" rx="12" fill={C.panel} stroke={C.panelStroke} />
          <rect x="520" y="318" width="100" height="8" rx="4" fill={C.barStrong} />
          <rect x="520" y="338" width="70" height="8" rx="4" fill={C.barSoft} />
          <rect x="520" y="368" width="100" height="22" rx="11" fill={`url(#art-gold-${kind})`} opacity="0.9" />

          {/* petals */}
          <g transform="translate(620 460)">
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <ellipse key={a} cx="0" cy="-26" rx="10" ry="26" transform={`rotate(${a})`} fill="none" stroke={C.goldSoft} />
            ))}
            <circle r="7" fill={C.gold} opacity="0.7" />
          </g>
          <rect x="120" y="486" width="560" height="6" rx="3" fill={C.barSoft} />
        </g>
      )}

      {kind === "arcade" && (
        <g>
          {/* region map */}
          <circle cx="240" cy="180" r="5" fill={C.gold} />
          <circle cx="430" cy="130" r="5" fill={C.glyph} />
          <circle cx="580" cy="230" r="5" fill={C.gold} />
          <circle cx="360" cy="300" r="5" fill={C.glyph} />
          <circle cx="520" cy="380" r="5" fill={C.gold} />
          <path d="M240 180 L430 130 M430 130 L580 230 M580 230 L360 300 M360 300 L520 380 M240 180 L360 300" stroke={C.goldSoft} strokeWidth="1.4" fill="none" />
          <circle cx="430" cy="130" r="12" fill="none" stroke={C.goldSoft} />
          <circle cx="580" cy="230" r="12" fill="none" stroke={C.goldSoft} />

          {/* S3 bucket */}
          <ellipse cx="250" cy="330" rx="70" ry="24" fill="none" stroke={C.goldSoft} strokeWidth="1.6" />
          <path d="M180 330 v120 a70 24 0 0 0 140 0 v-120" fill="none" stroke={C.goldSoft} strokeWidth="1.6" />
          <ellipse cx="250" cy="375" rx="70" ry="24" fill="none" stroke={C.goldSoft} opacity="0.5" />
          <ellipse cx="250" cy="420" rx="70" ry="24" fill="none" stroke={C.goldSoft} opacity="0.35" />

          {/* API console */}
          <rect x="430" y="300" width="250" height="160" rx="14" fill={C.panel} stroke={C.panelStroke} />
          <circle cx="452" cy="322" r="4" fill={C.goldSoft} />
          <circle cx="468" cy="322" r="4" fill={C.goldSoft} />
          <circle cx="484" cy="322" r="4" fill={C.goldSoft} />
          <rect x="452" y="344" width="120" height="8" rx="4" fill={C.barStrong} />
          <rect x="452" y="362" width="190" height="8" rx="4" fill={C.barSoft} />
          <rect x="452" y="380" width="150" height="8" rx="4" fill={C.barSoft} />
          <rect x="452" y="414" width="90" height="22" rx="11" fill={`url(#art-gold-${kind})`} opacity="0.9" />

          <text x="120" y="130" fontSize="15" fill={C.glyph} fontFamily="ui-monospace, monospace">{"PUT /media"}</text>
          <text x="600" y="120" fontSize="15" fill={C.glyph} fontFamily="ui-monospace, monospace">{"200 OK"}</text>
        </g>
      )}

      {kind === "safety" && (
        <g>
          {/* radar */}
          <g transform="translate(250 280)">
            <circle r="130" fill="none" stroke={C.goldSoft} opacity="0.5" />
            <circle r="88" fill="none" stroke={C.goldSoft} opacity="0.7" />
            <circle r="46" fill="none" stroke={C.goldSoft} />
            <path d="M0 0 L130 0" stroke={C.gold} strokeWidth="1.6" />
            <path d="M0 0 L0 -130" stroke={C.goldSoft} strokeWidth="1.2" />
            <circle r="6" fill={C.gold} />
            <circle cx="78" cy="-52" r="5" fill={C.glyph} />
            <circle cx="-60" cy="70" r="5" fill={C.glyph} />
          </g>

          {/* mobile app */}
          <rect x="470" y="140" width="190" height="330" rx="22" fill={C.panel} stroke={C.panelStroke} />
          <rect x="530" y="158" width="70" height="8" rx="4" fill={C.barStrong} />
          <circle cx="565" cy="250" r="42" fill="none" stroke={`url(#art-gold-${kind})`} strokeWidth="2" />
          <path d="M553 250 l9 10 l18 -22" fill="none" stroke={C.gold} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="502" y="318" width="126" height="20" rx="10" fill={C.barSoft} />
          <rect x="502" y="350" width="126" height="20" rx="10" fill={C.barSoft} />
          <rect x="502" y="400" width="126" height="34" rx="17" fill={`url(#art-gold-${kind})`} opacity="0.9" />

          <text x="120" y="480" fontSize="15" fill={C.glyph} fontFamily="ui-monospace, monospace">{"SOS ▸ location locked"}</text>
        </g>
      )}

      {kind === "portfolio" && (
        <g>
          {/* browser */}
          <rect x="150" y="120" width="340" height="250" rx="14" fill={C.panel} stroke={C.panelStroke} />
          <circle cx="176" cy="146" r="5" fill={C.goldSoft} />
          <circle cx="196" cy="146" r="5" fill={C.goldSoft} />
          <circle cx="216" cy="146" r="5" fill={C.goldSoft} />
          <rect x="176" y="172" width="180" height="20" rx="10" fill={`url(#art-gold-${kind})`} opacity="0.9" />
          <rect x="176" y="210" width="260" height="8" rx="4" fill={C.barStrong} />
          <rect x="176" y="228" width="220" height="8" rx="4" fill={C.barSoft} />
          <rect x="176" y="266" width="90" height="70" rx="8" fill={C.barSoft} />
          <rect x="280" y="266" width="90" height="70" rx="8" fill={C.barSoft} />
          <rect x="384" y="266" width="80" height="70" rx="8" fill={C.goldSoft} />

          {/* code panel */}
          <rect x="520" y="180" width="170" height="200" rx="12" fill={C.panel} stroke={C.panelStroke} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x="540" y={204 + i * 26} width={i % 2 === 0 ? 110 : 70} height="7" rx="3.5" fill={i === 2 ? C.goldSoft : C.barSoft} />
          ))}

          {/* identity mark */}
          <g transform="translate(610 450)">
            <rect x="-24" y="-24" width="48" height="48" rx="10" fill="none" stroke={`url(#art-gold-${kind})`} strokeWidth="2" transform="rotate(12)" />
            <text y="8" textAnchor="middle" fontSize="22" fill={C.gold} fontFamily="Georgia, serif">{"MS"}</text>
          </g>

          <text x="120" y="440" fontSize="15" fill={C.glyph} fontFamily="ui-monospace, monospace">{"identity ▸ shipped"}</text>
        </g>
      )}
    </svg>
  );
}
