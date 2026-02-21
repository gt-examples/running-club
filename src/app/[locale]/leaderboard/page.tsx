import { T } from "gt-next";
import LeaderboardTable from "@/components/LeaderboardTable";
import PaceCalculator from "@/components/PaceCalculator";

export default function LeaderboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-gray-400 mb-8">All-time rankings for Stride Club members. Sort by any column and filter by category.</p>
      </T>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeaderboardTable />
        </div>
        <div>
          <PaceCalculator />
        </div>
      </div>
    </div>
  );
}
