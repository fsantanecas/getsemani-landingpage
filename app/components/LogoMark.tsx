'use client';

interface LogoMarkProps {
  size?: number;
  id?: string;
}

export default function LogoMark({ size = 36, id = 'lm' }: LogoMarkProps) {
  const gradId = `grad-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="9" fill={`url(#${gradId})`} />
      {/* Circuit dot accents */}
      <circle cx="6" cy="6" r="1.2" fill="white" opacity="0.22" />
      <circle cx="30" cy="30" r="1.2" fill="white" opacity="0.22" />
      <circle cx="30" cy="6" r="0.9" fill="white" opacity="0.18" />
      <line x1="6" y1="6" x2="9" y2="6" stroke="white" strokeWidth="0.8" opacity="0.18" />
      <line x1="6" y1="6" x2="6" y2="9" stroke="white" strokeWidth="0.8" opacity="0.18" />
      {/* G letter */}
      <text
        x="18"
        y="25"
        textAnchor="middle"
        fill="white"
        fontSize="21"
        fontWeight="900"
        fontFamily="Inter, system-ui, sans-serif"
      >
        G
      </text>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="0.5" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
