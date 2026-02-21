"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  data: { distance: number; elevation: number }[];
}

export default function ElevationChart({ data }: Props) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="elevGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#065F46" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#065F46" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="distance" stroke="#6B7280" tick={{ fontSize: 12 }} unit=" km" />
          <YAxis stroke="#6B7280" tick={{ fontSize: 12 }} unit=" m" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "8px", color: "#E5E7EB" }}
            labelFormatter={(v) => `${v} km`}
            formatter={(v) => [`${v} m`, "Elevation"]}
          />
          <Area type="monotone" dataKey="elevation" stroke="#065F46" fill="url(#elevGradient)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
