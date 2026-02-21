"use client";

import { useState } from "react";
import Link from "next/link";
import { T, Var, Num, DateTime, Plural, Branch } from "gt-next";
import { races } from "@/data/races";

export default function RaceFilters() {
  const [tab, setTab] = useState<"upcoming" | "completed">("upcoming");
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [terrainFilter, setTerrainFilter] = useState("all");

  const filtered = races.filter((r) => {
    if (r.status !== tab) return false;
    if (distanceFilter !== "all" && r.distanceLabel !== distanceFilter) return false;
    if (terrainFilter !== "all" && r.terrain !== terrainFilter) return false;
    return true;
  });

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("upcoming")}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            tab === "upcoming" ? "bg-[#065F46] text-white" : "bg-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          <T>Upcoming</T>
        </button>
        <button
          onClick={() => setTab("completed")}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            tab === "completed" ? "bg-[#065F46] text-white" : "bg-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          <T>Completed</T>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "5K", "10K", "8K", "Half Marathon", "Marathon"].map((d) => (
          <button
            key={d}
            onClick={() => setDistanceFilter(d)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              distanceFilter === d ? "bg-[#065F46] text-white" : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {d === "all" ? <T>All Distances</T> : d}
          </button>
        ))}
        <span className="border-l border-gray-700 mx-1" />
        {(["all", "road", "trail", "track", "cross-country"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTerrainFilter(t)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              terrainFilter === t ? "bg-[#065F46] text-white" : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {t === "all" ? (
              <T>All Terrain</T>
            ) : (
              <T>
                <Branch
                  branch={t}
                  road={<>Road</>}
                  trail={<>Trail</>}
                  track={<>Track</>}
                  cross-country={<>Cross Country</>}
                />
              </T>
            )}
          </button>
        ))}
      </div>

      <T>
        <p className="text-sm text-gray-400 mb-4">
          <Plural n={filtered.length}
            singular={<><Num>{filtered.length}</Num> race found</>}
            plural={<><Num>{filtered.length}</Num> races found</>}
          />
        </p>
      </T>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((race) => (
          <Link
            key={race.id}
            href={`/races/${race.id}`}
            className="block bg-[#1F2937] rounded-lg p-5 border border-gray-700 hover:border-[#065F46] transition-colors"
          >
            <T>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold"><Var>{race.name}</Var></h3>
                <span className="text-xs px-2 py-0.5 rounded bg-[#065F46]/20 text-[#ECFDF5]">
                  <Var>{race.distanceLabel}</Var>
                </span>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p><DateTime>{new Date(race.date)}</DateTime></p>
                <p><Var>{race.location}</Var></p>
                <div className="flex gap-4 mt-2">
                  <span>
                    <Branch
                      branch={race.terrain}
                      road={<>Road</>}
                      trail={<>Trail</>}
                      track={<>Track</>}
                      cross-country={<>Cross Country</>}
                    />
                  </span>
                  <span><Num>{race.elevationGain}</Num>m elevation</span>
                </div>
              </div>
            </T>
          </Link>
        ))}
      </div>
    </div>
  );
}
