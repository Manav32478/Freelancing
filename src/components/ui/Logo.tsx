import { SITE } from "@/config/site";

/**
 * Brand mark: two interlocking squares — two founders, one studio.
 * Used in the navbar, footer and mirrored by /icon.svg (favicon).
 */
export default function Logo({ withName = true }: { withName?: boolean }) {
  return (
    <span className="nav-logo">
      <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f74a8" />
            <stop offset="1" stopColor="#d7e4f7" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="32" height="32" rx="9" fill="none" stroke="url(#logo-grad)" strokeWidth="5" />
        <rect x="26" y="26" width="32" height="32" rx="9" fill="url(#logo-grad)" />
      </svg>
      {withName && <span>{SITE.name}</span>}
    </span>
  );
}
