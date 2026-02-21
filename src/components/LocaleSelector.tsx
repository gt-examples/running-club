"use client";

import { useLocale, useSetLocale } from "gt-next/client";

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Espanol" },
  { code: "fr", label: "Francais" },
  { code: "ja", label: "Japanese" },
  { code: "zh", label: "Chinese" },
];

export default function LocaleSelector() {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
      className="bg-[#1F2937] text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:border-[#065F46]"
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
