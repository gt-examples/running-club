"use client";

import Link from "next/link";
import { useState } from "react";
import { T } from "gt-next";
import GitHubIcon from "./GitHubIcon";
import LocaleSelector from "./LocaleSelector";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1F2937] border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          <T>Stride Club</T>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/races" className="text-gray-300 hover:text-white text-sm transition-colors">
            <T>Races</T>
          </Link>
          <Link href="/training" className="text-gray-300 hover:text-white text-sm transition-colors">
            <T>Training Plans</T>
          </Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white text-sm transition-colors">
            <T>Leaderboard</T>
          </Link>
          <LocaleSelector />
          <GitHubIcon />
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/races" className="block text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>
            <T>Races</T>
          </Link>
          <Link href="/training" className="block text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>
            <T>Training Plans</T>
          </Link>
          <Link href="/leaderboard" className="block text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>
            <T>Leaderboard</T>
          </Link>
          <div className="pt-2">
            <LocaleSelector />
          </div>
          <GitHubIcon />
        </div>
      )}
    </nav>
  );
}
