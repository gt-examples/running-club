"use client";

import { useState } from "react";
import { T, Var, Num, Branch } from "gt-next";
import type { TrainingPlan } from "@/data/training-plans";

const typeColors: Record<string, string> = {
  easy: "bg-green-900/50 text-green-300 border-green-700",
  tempo: "bg-yellow-900/50 text-yellow-300 border-yellow-700",
  interval: "bg-red-900/50 text-red-300 border-red-700",
  long: "bg-blue-900/50 text-blue-300 border-blue-700",
  rest: "bg-gray-800/50 text-gray-400 border-gray-700",
};

export default function WeekSelector({ plan }: { plan: TrainingPlan }) {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const week = plan.weeks[selectedWeek];

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {plan.weeks.map((w, i) => (
          <button
            key={i}
            onClick={() => setSelectedWeek(i)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              i === selectedWeek
                ? "bg-[#065F46] text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            <T>Week <Num>{w.weekNumber}</Num></T>
          </button>
        ))}
      </div>

      <T>
        <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-400">
            Total distance: <span className="text-white font-medium"><Num>{week.totalDistance}</Num> km</span>
          </p>
        </div>
      </T>

      <div className="space-y-2">
        {week.days.map((day) => (
          <div
            key={day.day}
            className={`flex items-center justify-between rounded-lg border px-4 py-3 ${typeColors[day.type]}`}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium"><Var>{day.day}</Var></span>
              <T>
                <span className="text-sm opacity-75">
                  <Branch branch={day.type}
                    easy={<>Easy Run</>}
                    tempo={<>Tempo Run</>}
                    interval={<>Intervals</>}
                    long={<>Long Run</>}
                    rest={<>Rest</>}
                  />
                </span>
              </T>
            </div>
            {day.distance > 0 && (
              <span className="text-sm font-medium">
                <Num>{day.distance}</Num> km
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
