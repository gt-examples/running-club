"use client";

import { useGT } from "gt-next/client";

export default function CourseMap({ terrain }: { terrain: string }) {
  const gt = useGT();
  const isTrail = terrain === "trail" || terrain === "cross-country";

  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 rounded-lg" fill="none">
      <rect width="400" height="200" fill="#1F2937" />
      {isTrail ? (
        <>
          <path d="M 40 160 Q 80 80 140 100 T 240 60 T 360 140" stroke="#065F46" strokeWidth="3" strokeDasharray="8 4" fill="none" />
          <circle cx="40" cy="160" r="6" fill="#ECFDF5" />
          <circle cx="360" cy="140" r="6" fill="#ECFDF5" />
          <circle cx="140" cy="100" r="4" fill="#065F46" opacity="0.6" />
          <circle cx="240" cy="60" r="4" fill="#065F46" opacity="0.6" />
          {[80, 160, 200, 300].map((x, i) => (
            <polygon key={i} points={`${x},${180 - i * 10} ${x + 10},${150 - i * 12} ${x + 20},${180 - i * 10}`} fill="#374151" opacity="0.5" />
          ))}
        </>
      ) : (
        <>
          <rect x="60" y="40" width="280" height="120" rx="20" stroke="#065F46" strokeWidth="3" fill="none" />
          <circle cx="60" cy="100" r="6" fill="#ECFDF5" />
          <circle cx="340" cy="100" r="6" fill="#ECFDF5" />
          <circle cx="200" cy="40" r="4" fill="#065F46" opacity="0.6" />
          <circle cx="200" cy="160" r="4" fill="#065F46" opacity="0.6" />
          <path d="M 60 100 L 60 60 Q 60 40 80 40 L 320 40 Q 340 40 340 60 L 340 100" stroke="#065F46" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
        </>
      )}
      <text x="40" y="185" fill="#9CA3AF" fontSize="10">{gt("Start")}</text>
      <text x="340" y="185" fill="#9CA3AF" fontSize="10">{gt("Finish")}</text>
    </svg>
  );
}
