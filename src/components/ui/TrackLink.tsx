"use client";

import Link from "next/link";
import { track } from "@/lib/track";
import type { ReactNode } from "react";

/** Link that records a conversion event (dataLayer) on click. */
export default function TrackLink({
  href,
  event,
  payload,
  className,
  children,
  external,
}: {
  href: string;
  event: string;
  payload?: Record<string, string>;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const onClick = () => track(event, payload);
  if (external)
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  return (
    <Link className={className} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
