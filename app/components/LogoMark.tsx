'use client';

interface LogoMarkProps {
  size?: number;
  id?: string;
}

export default function LogoMark({ size = 36, id = 'lm' }: LogoMarkProps) {
  const gId  = `lm-g-${id}`;
  const aId  = `lm-a-${id}`;
  const bgId = `lm-bg-${id}`;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Subtle glass background */}
      <rect width="40" height="40" rx="10" fill={`url(#${bgId})`} />
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="9.25"
        stroke={`url(#${gId})`} strokeWidth="0.8" opacity="0.35" />

      {/* ── G arc: from upper-right, counter-clockwise all the way to middle-right, then crossbar */}
      {/* Center ≈ (19, 22), radius ≈ 11 */}
      <path
        d="M 27 13 A 11 11 0 1 0 30 22 L 21 22"
        stroke={`url(#${gId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Circuit node dots on the G arc */}
      <circle cx="10" cy="16" r="2"   fill="#0ea5e9" opacity="0.85" />
      <circle cx="8"  cy="29" r="1.4" fill="#06b6d4" opacity="0.65" />
      <circle cx="21" cy="22" r="2.2" fill="#7c3aed" opacity="0.85" />

      {/* ── Small circuit traces extending outward */}
      <line x1="4" y1="16" x2="10" y2="16" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />
      <circle cx="3" cy="16" r="1.1" fill="#0ea5e9" opacity="0.4" />

      {/* ── Arrow: shaft + arrowhead pointing upper-right (like the original logo) */}
      <line
        x1="24" y1="15"
        x2="33" y2="6"
        stroke={`url(#${aId})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Arrowhead — triangle tip at (36,3), base at (30,7) and (33,10) */}
      <polygon points="36,3 30,7 33,10" fill={`url(#${aId})`} />

      <defs>
        {/* G arc + border gradient */}
        <linearGradient id={gId} x1="4" y1="36" x2="32" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="0.5" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>

        {/* Arrow gradient — brighter cyan */}
        <linearGradient id={aId} x1="24" y1="15" x2="36" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>

        {/* Background fill — very subtle */}
        <linearGradient id={bgId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" stopOpacity="0.12" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0.08" />
        </linearGradient>
      </defs>
    </svg>
  );
}
