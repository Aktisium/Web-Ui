type CharacterProps = {
  className?: string;
};

const SKIN = "#E8C4A8";
const SKIN_SHADOW = "#E8B4A0";
const HAIR = "#3A2F28";
const SHIRT = "#FFFBF6";
const STROKE = "#E3D9CC";

function Shadow() {
  return <ellipse cx="65" cy="160" rx="34" ry="5" fill="currentColor" opacity="0.1" />;
}

/** Step 1 — Host greeter: open arms, bow tie, counter bell */
export function HostGreeterCharacter({ className }: CharacterProps) {
  return (
    <svg className={className} viewBox="0 0 130 168" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Shadow />
      <path d="M54 118 L50 154 L62 154 L66 118 Z" fill="#3A2F28" />
      <path d="M76 118 L80 154 L68 154 L64 118 Z" fill="#3A2F28" />
      <ellipse cx="56" cy="154" rx="9" ry="4" fill="#2A2018" />
      <ellipse cx="74" cy="154" rx="9" ry="4" fill="#2A2018" />
      <path d="M44 72 Q28 68 20 58 Q16 54 20 50 Q24 46 30 52 Q38 60 46 68" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <circle cx="19" cy="51" r="5" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <path d="M86 72 Q102 68 110 58 Q114 54 110 50 Q106 46 100 52 Q92 60 84 68" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <circle cx="111" cy="51" r="5" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <path d="M44 68 Q65 62 86 68 L90 118 Q65 124 40 118 Z" fill={SHIRT} />
      <path d="M52 68 L65 76 L78 68 L82 112 Q65 118 48 112 Z" fill={HAIR} />
      <path d="M56 78 L65 84 L74 78 L78 116 Q65 120 52 116 Z" fill="#A66B47" />
      <path d="M65 84 L65 116" stroke="#8B5A3C" strokeWidth="1" opacity="0.45" />
      <path d="M58 68 L65 72 L72 68 L65 76 Z" fill="#A66B47" />
      <circle cx="65" cy="72" r="2.5" fill="#8B5A3C" />
      <rect x="60" y="54" width="10" height="14" rx="3" fill={SKIN} />
      <ellipse cx="65" cy="44" rx="22" ry="24" fill={SKIN} />
      <path d="M43 40 Q46 22 65 20 Q84 22 87 40 Q83 28 65 26 Q47 28 43 40" fill={HAIR} />
      <ellipse cx="44" cy="44" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="86" cy="44" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <path d="M59 52 Q65 56 71 52" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="65" cy="128" rx="10" ry="3" fill="#8B7355" opacity="0.5" />
      <path d="M65 118 L65 126" stroke="#B8956B" strokeWidth="2" strokeLinecap="round" />
      <path d="M61 118 Q65 114 69 118" stroke="#B8956B" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/** Step 2 — Seated guest in cream sweater, reading menu in lap */
export function CustomerCharacter({ className }: CharacterProps) {
  return (
    <svg className={className} viewBox="0 0 130 168" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Shadow />

      {/* stool */}
      <ellipse cx="65" cy="148" rx="28" ry="6" fill="#8B7355" opacity="0.45" />
      <rect x="58" y="132" width="14" height="16" rx="2" fill="#6F5A42" />

      {/* seated legs bent */}
      <path d="M48 108 L38 132 L50 134 L58 112 Z" fill="#4A5568" />
      <path d="M82 108 L92 132 L80 134 L72 112 Z" fill="#4A5568" />
      <ellipse cx="42" cy="133" rx="8" ry="3.5" fill="#2A2018" />
      <ellipse cx="88" cy="133" rx="8" ry="3.5" fill="#2A2018" />

      {/* arms on menu in lap */}
      <path d="M42 88 Q34 94 32 102 Q30 106 34 108 Q38 110 42 102 Q44 96 48 90" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <path d="M88 88 Q96 94 98 102 Q100 106 96 108 Q92 110 88 102 Q86 96 82 90" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />

      {/* cream sweater */}
      <path d="M40 72 Q65 66 90 72 L94 112 Q65 118 36 112 Z" fill="#EDE6DC" />
      <path d="M44 76 L65 84 L86 76 L90 108 Q65 114 40 108 Z" fill="#D4C8B8" opacity="0.35" />
      <path d="M52 72 L65 80 L78 72" stroke="#C4B5A3" strokeWidth="0.75" opacity="0.6" />

      {/* head */}
      <rect x="60" y="54" width="10" height="14" rx="3" fill={SKIN} />
      <ellipse cx="65" cy="44" rx="22" ry="24" fill={SKIN} />
      <path d="M43 40 Q46 22 65 20 Q84 22 87 40 Q83 28 65 26 Q47 28 43 40" fill="#5C4332" />
      <path d="M44 46 Q40 52 43 58 Q47 54 49 48" fill="#5C4332" />
      <path d="M86 46 Q90 52 87 58 Q83 54 81 48" fill="#5C4332" />
      <ellipse cx="44" cy="44" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="86" cy="44" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <circle cx="58.5" cy="41.5" r="1" fill={SHIRT} />
      <circle cx="72.5" cy="41.5" r="1" fill={SHIRT} />
      <path d="M59 52 Q65 55 71 52" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="54" cy="48" rx="4" ry="2" fill={SKIN_SHADOW} opacity="0.4" />
      <ellipse cx="76" cy="48" rx="4" ry="2" fill={SKIN_SHADOW} opacity="0.4" />
      <circle cx="58" cy="42" r="5.5" fill="none" stroke="#3A2F28" strokeWidth="0.7" opacity="0.5" />
      <circle cx="72" cy="42" r="5.5" fill="none" stroke="#3A2F28" strokeWidth="0.7" opacity="0.5" />
      <path d="M63.5 42 H66.5" stroke="#3A2F28" strokeWidth="0.7" opacity="0.5" />

      {/* menu in lap */}
      <rect x="44" y="100" width="42" height="22" rx="2" fill={SHIRT} stroke="#D4C8B8" strokeWidth="1" transform="rotate(-4 65 111)" />
      <path d="M50 106 H78 M50 111 H74 M50 116 H70" stroke="#A66B47" strokeWidth="0.6" opacity="0.5" transform="rotate(-4 65 111)" />
    </svg>
  );
}

/** Step 3 — Standing guest in rust jacket, pointing at menu board */
export function CustomerOrderingCharacter({ className }: CharacterProps) {
  return (
    <svg className={className} viewBox="0 0 130 168" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Shadow />

      <path d="M52 118 L48 154 L60 154 L64 118 Z" fill="#3A2F28" />
      <path d="M78 118 L82 154 L70 154 L66 118 Z" fill="#3A2F28" />
      <ellipse cx="54" cy="154" rx="9" ry="4" fill="#2A2018" />
      <ellipse cx="76" cy="154" rx="9" ry="4" fill="#2A2018" />

      {/* pointing arm */}
      <path d="M84 76 Q96 70 108 58 Q112 54 108 50 Q104 46 98 52 Q88 62 82 72" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <path d="M108 50 L118 46" stroke={SKIN} strokeWidth="3" strokeLinecap="round" />
      <circle cx="119" cy="45" r="2" fill={SKIN} />

      {/* other arm on hip */}
      <path d="M42 78 Q34 82 30 90 Q28 94 32 96 Q36 98 40 90 Q42 84 46 80" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />

      {/* rust bomber jacket */}
      <path d="M42 68 Q65 62 88 68 L92 118 Q65 124 38 118 Z" fill="#A66B47" />
      <path d="M46 72 L65 80 L84 72 L88 114 Q65 120 42 114 Z" fill="#8B5A3C" opacity="0.3" />
      <path d="M42 78 L42 118" stroke="#7A4E38" strokeWidth="1.5" opacity="0.4" />
      <path d="M88 78 L88 118" stroke="#7A4E38" strokeWidth="1.5" opacity="0.4" />
      <path d="M58 68 L65 76 L72 68" fill={SHIRT} />

      {/* short cropped hair */}
      <rect x="60" y="54" width="10" height="14" rx="3" fill={SKIN} />
      <ellipse cx="65" cy="44" rx="20" ry="22" fill={SKIN} />
      <path d="M45 40 Q48 24 65 22 Q82 24 85 40 Q82 30 65 28 Q48 30 45 40" fill="#2A2018" />
      <ellipse cx="45" cy="44" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="85" cy="44" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <path d="M59 52 Q65 55 71 52" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />

      {/* wall menu board */}
      <rect x="98" y="24" width="26" height="52" rx="3" fill="#5C4332" stroke="#3A2F28" strokeWidth="1" />
      <rect x="102" y="30" width="18" height="40" rx="1" fill="#FFFBF6" />
      <path d="M106 36 H116 M106 42 H114 M106 48 H116 M106 54 H112" stroke="#A66B47" strokeWidth="0.6" opacity="0.6" />
    </svg>
  );
}

/** Step 4 — Barista at espresso machine: tee, full apron, cap */
export function BaristaCharacter({ className }: CharacterProps) {
  return (
    <svg className={className} viewBox="0 0 130 168" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Shadow />

      {/* espresso machine */}
      <rect x="8" y="52" width="36" height="72" rx="4" fill="#4A5568" />
      <rect x="12" y="58" width="28" height="20" rx="2" fill="#2A2F28" opacity="0.5" />
      <circle cx="26" cy="90" r="8" fill="#3A2F28" stroke="#6B7280" strokeWidth="1.5" />
      <circle cx="26" cy="90" r="4" fill="#1C1814" />
      <rect x="14" y="104" width="24" height="6" rx="2" fill="#6B7280" />

      <path d="M54 118 L50 154 L62 154 L66 118 Z" fill="#3A2F28" />
      <path d="M76 118 L80 154 L68 154 L64 118 Z" fill="#3A2F28" />
      <ellipse cx="56" cy="154" rx="9" ry="4" fill="#2A2018" />
      <ellipse cx="74" cy="154" rx="9" ry="4" fill="#2A2018" />

      {/* arms at machine */}
      <path d="M48 76 Q40 78 36 84 Q34 88 38 90 Q42 92 46 86 Q48 82 52 78" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <path d="M44 80 L36 86" stroke={SKIN} strokeWidth="2.5" strokeLinecap="round" />

      {/* white tee only */}
      <path d="M46 68 Q65 62 86 68 L90 118 Q65 124 40 118 Z" fill={SHIRT} />

      {/* long dark full apron */}
      <path d="M50 72 L65 80 L80 72 L86 124 Q65 128 44 124 Z" fill="#3A2F28" />
      <path d="M65 80 L65 124" stroke="#2A2018" strokeWidth="0.75" opacity="0.5" />
      <rect x="58" y="88" width="14" height="10" rx="1" fill="#A66B47" opacity="0.8" />

      {/* baseball cap */}
      <rect x="60" y="54" width="10" height="14" rx="3" fill={SKIN} />
      <ellipse cx="65" cy="42" rx="21" ry="22" fill={SKIN} />
      <path d="M42 36 Q65 28 88 36 L92 40 Q65 34 38 40 Z" fill="#2A2018" />
      <path d="M88 36 L102 40 L88 42 Z" fill="#2A2018" />
      <ellipse cx="44" cy="42" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="86" cy="42" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <path d="M59 50 Q65 53 71 50" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />

      {/* steam from machine */}
      <path d="M26 48 Q24 40 26 34" stroke="#A89B8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M30 46 Q32 38 30 32" stroke="#A89B8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** Step 5 — Server with ponytail, sage apron, presenting cup on saucer */
export function ServerCharacter({ className }: CharacterProps) {
  return (
    <svg className={className} viewBox="0 0 130 168" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Shadow />

      <path d="M54 118 L50 154 L62 154 L66 118 Z" fill="#3A2F28" />
      <path d="M76 118 L80 154 L68 154 L64 118 Z" fill="#3A2F28" />
      <ellipse cx="56" cy="154" rx="9" ry="4" fill="#2A2018" />
      <ellipse cx="74" cy="154" rx="9" ry="4" fill="#2A2018" />

      {/* ponytail */}
      <path d="M82 32 Q96 36 98 52 Q96 48 88 44 Q84 38 82 32" fill="#5C4332" />

      {/* left arm presenting cup */}
      <path d="M40 76 Q28 72 22 64 Q18 60 22 56 Q26 52 32 58 Q38 64 44 70" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <ellipse cx="18" cy="62" rx="12" ry="3.5" fill="#D4C8B8" />
      <path d="M14 56 L14 62 Q18 66 22 62 L22 56 Z" fill={SHIRT} stroke={STROKE} strokeWidth="0.5" />
      <path d="M14 58 L22 58" stroke="#6B4423" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M16 52 Q18 48 20 52" stroke="#A89B8C" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* right arm relaxed */}
      <path d="M88 78 Q96 82 98 90 Q100 94 96 96 Q92 98 88 90 Q86 84 84 80" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />

      {/* terracotta blouse */}
      <path d="M44 68 Q65 62 86 68 L90 118 Q65 124 40 118 Z" fill="#C4896A" opacity="0.25" />
      <path d="M44 68 Q65 62 86 68 L90 118 Q65 124 40 118 Z" fill={SHIRT} />

      {/* sage apron only — no vest */}
      <path d="M52 74 L65 82 L78 74 L84 120 Q65 126 46 120 Z" fill="#6B7F5E" />
      <path d="M65 82 L65 120" stroke="#5A6D4E" strokeWidth="0.75" opacity="0.5" />

      <rect x="60" y="54" width="10" height="14" rx="3" fill={SKIN} />
      <ellipse cx="65" cy="44" rx="21" ry="23" fill={SKIN} />
      <path d="M44 38 Q46 20 65 18 Q84 20 86 38 Q84 28 65 26 Q46 28 44 38" fill="#5C4332" />
      <ellipse cx="44" cy="42" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="86" cy="42" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <circle cx="58.5" cy="41.5" r="1" fill={SHIRT} />
      <circle cx="72.5" cy="41.5" r="1" fill={SHIRT} />
      <path d="M59 52 Q65 56 71 52" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="54" cy="48" rx="4" ry="2" fill={SKIN_SHADOW} opacity="0.4" />
      <ellipse cx="76" cy="48" rx="4" ry="2" fill={SKIN_SHADOW} opacity="0.4" />

      {/* sparkle — served fresh */}
      <path d="M108 36 L110 42 L116 44 L110 46 L108 52 L106 46 L100 44 L106 42 Z" fill="#D4AD7A" opacity="0.7" />
    </svg>
  );
}

/** Reception — welcoming wave, sage cardigan, low bun, guest book at desk */
export function ReceptionistCharacter({ className }: CharacterProps) {
  return (
    <svg className={className} viewBox="0 0 130 168" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Shadow />

      {/* legs behind counter */}
      <path d="M54 118 L50 154 L62 154 L66 118 Z" fill="#4A5568" />
      <path d="M76 118 L80 154 L68 154 L64 118 Z" fill="#4A5568" />
      <ellipse cx="56" cy="154" rx="9" ry="4" fill="#2A2018" />
      <ellipse cx="74" cy="154" rx="9" ry="4" fill="#2A2018" />

      {/* waving right arm */}
      <path d="M88 74 Q104 58 112 44 Q116 38 112 34 Q108 30 102 38 Q94 50 86 66" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <circle cx="113" cy="33" r="5.5" fill={SKIN} stroke={STROKE} strokeWidth="0.5" />

      {/* left arm on guest book */}
      <path d="M40 78 Q30 82 26 90 Q24 94 28 96 Q32 98 38 90 Q42 84 46 80" fill={SHIRT} stroke={STROKE} strokeWidth="0.75" />
      <rect x="14" y="88" width="22" height="16" rx="2" fill="#FFF8EE" stroke="#D4C8B8" strokeWidth="0.75" />
      <path d="M17 93 H33" stroke="#C4B5A3" strokeWidth="0.75" opacity="0.6" />
      <path d="M17 97 H29" stroke="#C4B5A3" strokeWidth="0.75" opacity="0.45" />

      {/* cream blouse */}
      <path d="M44 68 Q65 62 86 68 L90 118 Q65 124 40 118 Z" fill={SHIRT} />

      {/* sage cardigan */}
      <path d="M42 70 Q65 64 88 70 L92 116 Q65 122 38 116 Z" fill="#6B7F5E" />
      <path d="M42 70 L48 118" stroke="#5A6D4E" strokeWidth="0.75" opacity="0.45" />
      <path d="M88 70 L82 118" stroke="#5A6D4E" strokeWidth="0.75" opacity="0.45" />
      <path d="M52 74 L65 80 L78 74" stroke="#5A6D4E" strokeWidth="0.75" opacity="0.5" />

      {/* name tag */}
      <rect x="54" y="86" width="22" height="10" rx="2" fill="#E8C9A0" stroke="#B8956B" strokeWidth="0.5" />
      <path d="M57 92 H73" stroke="#8B7355" strokeWidth="0.75" opacity="0.5" />

      <rect x="60" y="54" width="10" height="14" rx="3" fill={SKIN} />
      <ellipse cx="65" cy="44" rx="21" ry="23" fill={SKIN} />

      {/* hair with low bun */}
      <path d="M44 38 Q46 20 65 18 Q84 20 86 38 Q84 28 65 26 Q46 28 44 38" fill="#5C4332" />
      <circle cx="82" cy="30" r="7" fill="#5C4332" />
      <circle cx="82" cy="30" r="4" fill="#6F5A42" opacity="0.5" />

      <ellipse cx="44" cy="42" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="86" cy="42" rx="4" ry="5" fill={SKIN} />
      <ellipse cx="58" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <ellipse cx="72" cy="42" rx="2.5" ry="3" fill={HAIR} />
      <circle cx="58.5" cy="41.5" r="1" fill={SHIRT} />
      <circle cx="72.5" cy="41.5" r="1" fill={SHIRT} />
      <path d="M59 52 Q65 56 71 52" stroke="#C4896A" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="54" cy="48" rx="4" ry="2" fill={SKIN_SHADOW} opacity="0.35" />
      <ellipse cx="76" cy="48" rx="4" ry="2" fill={SKIN_SHADOW} opacity="0.35" />

      {/* small desk bell on counter edge */}
      <ellipse cx="108" cy="128" rx="9" ry="7" fill="#D4AD7A" stroke="#B8956B" strokeWidth="0.5" />
      <rect x="104" y="134" width="8" height="3" rx="1" fill="#8B7355" />
    </svg>
  );
}
