"use client";

import { useState } from "react";
import { T, Num, Plural } from "gt-next";
import { useGT } from "gt-next/client";
import { leaderboard, type LeaderboardEntry } from "@/data/leaderboard";

type SortKey = "rank" | "totalRaces" | "totalDistance" | "points";

export default function LeaderboardTable() {
  const gt = useGT();
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortAsc, setSortAsc] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? leaderboard
    : leaderboard.filter((e) => e.category === filter);

  const sorted = [...filtered].sort((a, b) => {
    const diff = sortKey === "rank" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    return sortAsc ? diff : -diff;
  });

  const handleSort = (key: SortKey) => {
    if (key === sortKey) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const SortHeader = ({ k, children }: { k: SortKey; children: React.ReactNode }) => (
    <th
      className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase cursor-pointer hover:text-white transition-colors"
      onClick={() => handleSort(k)}
    >
      <span className="flex items-center gap-1">
        {children}
        {sortKey === k && <span>{sortAsc ? "\u2191" : "\u2193"}</span>}
      </span>
    </th>
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {["all", "5K", "10K", "Half Marathon", "Marathon"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-[#065F46] text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {cat === "all" ? <T>All</T> : cat}
          </button>
        ))}
      </div>

      <T>
        <p className="text-sm text-gray-400 mb-4">
          <Plural n={sorted.length}
            singular={<><Num>{sorted.length}</Num> runner</>}
            plural={<><Num>{sorted.length}</Num> runners</>}
          />
        </p>
      </T>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-700">
            <tr>
              <SortHeader k="rank"><T>Rank</T></SortHeader>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase"><T>Name</T></th>
              <SortHeader k="totalRaces"><T>Races</T></SortHeader>
              <SortHeader k="totalDistance"><T>Distance</T></SortHeader>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase"><T>Best Pace</T></th>
              <SortHeader k="points"><T>Points</T></SortHeader>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {sorted.map((entry) => (
              <tr key={entry.name} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-300"><Num>{entry.rank}</Num></td>
                <td className="px-4 py-3 text-sm text-white font-medium">{entry.name}</td>
                <td className="px-4 py-3 text-sm text-gray-300"><Num>{entry.totalRaces}</Num></td>
                <td className="px-4 py-3 text-sm text-gray-300"><Num>{entry.totalDistance}</Num> {gt("km")}</td>
                <td className="px-4 py-3 text-sm text-gray-300">{entry.bestPace} {gt("/km")}</td>
                <td className="px-4 py-3 text-sm text-[#ECFDF5] font-medium"><Num>{entry.points}</Num></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
