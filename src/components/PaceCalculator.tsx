"use client";

import { useState } from "react";
import { T } from "gt-next";

export default function PaceCalculator() {
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const totalSeconds = (parseInt(hours || "0") * 3600) + (parseInt(minutes || "0") * 60) + parseInt(seconds || "0");
  const dist = parseFloat(distance || "0");
  const paceSeconds = dist > 0 && totalSeconds > 0 ? totalSeconds / dist : 0;
  const paceMin = Math.floor(paceSeconds / 60);
  const paceSec = Math.floor(paceSeconds % 60);

  return (
    <div className="bg-[#1F2937] rounded-lg p-6">
      <T>
        <h3 className="text-lg font-semibold text-white mb-4">Pace Calculator</h3>
      </T>
      <div className="space-y-4">
        <div>
          <T><label className="block text-sm text-gray-400 mb-1">Distance (km)</label></T>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="10"
            className="w-full bg-gray-800 text-white rounded px-3 py-2 text-sm border border-gray-600 focus:border-[#065F46] focus:outline-none"
          />
        </div>
        <div>
          <T><label className="block text-sm text-gray-400 mb-1">Time</label></T>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="0h"
              className="bg-gray-800 text-white rounded px-3 py-2 text-sm border border-gray-600 focus:border-[#065F46] focus:outline-none"
            />
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="45m"
              className="bg-gray-800 text-white rounded px-3 py-2 text-sm border border-gray-600 focus:border-[#065F46] focus:outline-none"
            />
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              placeholder="0s"
              className="bg-gray-800 text-white rounded px-3 py-2 text-sm border border-gray-600 focus:border-[#065F46] focus:outline-none"
            />
          </div>
        </div>
        {paceSeconds > 0 && (
          <div className="bg-[#065F46]/20 border border-[#065F46]/30 rounded p-4 text-center">
            <T><p className="text-sm text-gray-400">Your pace</p></T>
            <p className="text-2xl font-bold text-[#ECFDF5]">
              {paceMin}:{paceSec.toString().padStart(2, "0")} <T><span className="text-sm font-normal text-gray-400">per km</span></T>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
