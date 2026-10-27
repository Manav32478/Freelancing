"use client";

/* Lightweight conversion tracking.
   Pushes events to window.dataLayer (Google Tag Manager / GA4 compatible)
   so clicks and submissions can be measured once a tag is configured.
   See README → "Analytics & Search Console" for setup. */

type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;
  const entry = { event, ...payload, ts: new Date().toISOString() };
  (window.dataLayer ||= []).push(entry);
  if (process.env.NODE_ENV === "development") console.debug("[track]", entry);
}

/** Attach to anchors/buttons: tracks then allows default navigation. */
export function trackClick(event: string, payload: TrackPayload = {}) {
  track(event, payload);
}
