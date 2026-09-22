import React from "react";

/* Chalk marginalia. Requires <ChalkDefs /> once per page for the noise filter. */
export function ChalkDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="q-chalk" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

const MARKS = {
  sun: { w: 92, h: 92, el: (c) => (<g><circle cx="46" cy="46" r="22" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.92" /><path d="M46 14V6M46 86v-8M14 46H6M86 46h8M24 24l-6-6M68 68l6 6M68 24l6-6M24 68l-6 6" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.8" /></g>) },
  wave: { w: 170, h: 40, el: (c) => (<path d="M8 26c18-6 26-22 40-22s16 22 32 22 22-22 38-22 26 18 44 16" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.9" />) },
  underline: { w: 160, h: 16, el: (c) => (<path d="M6 10c40 8 96 8 148-2" stroke={c} strokeWidth="2.6" strokeLinecap="round" opacity="0.7" />) },
  star: { w: 64, h: 64, el: (c) => (<path d="M32 6l8 18 20 3-15 13 4 20-17-10-17 10 4-20L4 27l20-3z" stroke={c} strokeWidth="2.6" strokeLinejoin="round" opacity="0.92" />) },
  arrow: { w: 80, h: 70, el: (c) => (<g><path d="M8 62c0-26 10-40 34-46" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.85" /><path d="M34 14l10 2-4 10" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" /></g>) },
  scallop: { w: 120, h: 40, el: (c) => (<path d="M8 28c6-14 14-14 20 0s14 14 20 0 14-14 20 0 14 14 20 0" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.9" />) },
};

export function ChalkMark({ mark = "sun", color = "var(--manteiga)", scale = 1, style, ...rest }) {
  const m = MARKS[mark];
  if (!m) return null;
  return (
    <svg width={m.w * scale} height={m.h * scale} viewBox={`0 0 ${m.w} ${m.h}`} fill="none" filter="url(#q-chalk)" aria-hidden="true" style={style} {...rest}>
      {m.el(color)}
    </svg>
  );
}

ChalkMark.marks = Object.keys(MARKS);
