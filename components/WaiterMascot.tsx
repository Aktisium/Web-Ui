type WaiterMascotProps = {
  className?: string;
};

/** Work section waiter — tray + welcoming gesture */
export default function WaiterMascot({ className }: WaiterMascotProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="65" cy="160" rx="34" ry="5" fill="currentColor" opacity="0.1" />

      <path d="M54 118 L50 154 L62 154 L66 118 Z" fill="#3A2F28" />
      <path d="M76 118 L80 154 L68 154 L64 118 Z" fill="#3A2F28" />
      <ellipse cx="56" cy="154" rx="9" ry="4" fill="#2A2018" />
      <ellipse cx="74" cy="154" rx="9" ry="4" fill="#2A2018" />

      <path
        d="M48 74 Q38 78 34 88 Q32 92 36 94 Q40 96 44 88 Q46 82 50 78"
        fill="#FFFBF6"
        stroke="#E3D9CC"
        strokeWidth="0.75"
      />
      <ellipse cx="32" cy="92" rx="12" ry="4" fill="#8B7355" />
      <ellipse cx="32" cy="91" rx="10" ry="3" fill="#A08968" />
      <path d="M28 86 L28 90 Q32 92 36 90 L36 86 Z" fill="#FFFBF6" stroke="#E3D9CC" strokeWidth="0.5" />

      <path d="M44 68 Q65 62 86 68 L90 118 Q65 124 40 118 Z" fill="#FFFBF6" />
      <path d="M52 68 L65 76 L78 68 L82 112 Q65 118 48 112 Z" fill="#3A2F28" />
      <path d="M56 78 L65 84 L74 78 L78 116 Q65 120 52 116 Z" fill="#A66B47" />
      <path d="M65 84 L65 116" stroke="#8B5A3C" strokeWidth="1" opacity="0.45" />
      <path d="M58 68 L65 72 L72 68 L65 76 Z" fill="#A66B47" />
      <circle cx="65" cy="72" r="2.5" fill="#8B5A3C" />

      <path
        d="M86 74 Q94 70 100 66 Q104 64 102 60 Q100 58 96 60 Q90 64 84 70"
        fill="#FFFBF6"
        stroke="#E3D9CC"
        strokeWidth="0.75"
      />
      <circle cx="101" cy="61" r="5" fill="#FFFBF6" stroke="#E3D9CC" strokeWidth="0.75" />

      <rect x="60" y="54" width="10" height="14" rx="3" fill="#E8C4A8" />
      <ellipse cx="65" cy="44" rx="22" ry="24" fill="#E8C4A8" />
      <path d="M43 40 Q46 22 65 20 Q84 22 87 40 Q83 28 65 26 Q47 28 43 40" fill="#3A2F28" />
      <ellipse cx="44" cy="44" rx="4" ry="5" fill="#E8C4A8" />
      <ellipse cx="86" cy="44" rx="4" ry="5" fill="#E8C4A8" />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill="#3A2F28" />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill="#3A2F28" />
      <circle cx="58.5" cy="41.5" r="1" fill="#FFFBF6" />
      <circle cx="72.5" cy="41.5" r="1" fill="#FFFBF6" />
      <path d="M59 52 Q65 56 71 52" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="54" cy="48" rx="4" ry="2" fill="#E8B4A0" opacity="0.4" />
      <ellipse cx="76" cy="48" rx="4" ry="2" fill="#E8B4A0" opacity="0.4" />
    </svg>
  );
}
