import { ArrowDown } from "lucide-react";

/** Rotating circular-text badge with an ink core arrow. */
export default function CircularBadge({ text }: { text: string }) {
  return (
    <div className="circle-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="cb-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" fill="none" />
        </defs>
        <text>
          <textPath href="#cb-path">{text}</textPath>
        </text>
      </svg>
      <span className="badge-core">
        <ArrowDown size={18} strokeWidth={2.4} />
      </span>
    </div>
  );
}
