import { T, Var, Num, DateTime, Plural } from "gt-next";
import CountdownTimer from "@/components/CountdownTimer";
import { getNextRace, races } from "@/data/races";
import Link from "next/link";

export default function Home() {
  const nextRace = getNextRace();
  const completedRaces = races.filter((r) => r.status === "completed");
  const lastRace = completedRaces[0];
  const totalMembers = 156;
  const totalRacesCount = races.length;
  const totalDistanceKm = 2847;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <T>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stride Club</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join our community of runners. Train together, race together, achieve together.
          </p>
        </div>
      </T>

      {nextRace && (
        <div className="mb-16">
          <T>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-1">Next Race</h2>
              <p className="text-[#ECFDF5] font-medium"><Var>{nextRace.name}</Var></p>
              <p className="text-gray-400 text-sm"><DateTime>{new Date(nextRace.date)}</DateTime> — <Var>{nextRace.location}</Var></p>
            </div>
          </T>
          <CountdownTimer targetDate={nextRace.date} />
        </div>
      )}

      <T>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#1F2937] rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-[#ECFDF5]"><Num>{totalMembers}</Num></p>
            <p className="text-sm text-gray-400 mt-1"><Plural n={totalMembers} singular={<>Member</>} plural={<>Members</>} /></p>
          </div>
          <div className="bg-[#1F2937] rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-[#ECFDF5]"><Num>{totalRacesCount}</Num></p>
            <p className="text-sm text-gray-400 mt-1"><Plural n={totalRacesCount} singular={<>Race</>} plural={<>Races</>} /></p>
          </div>
          <div className="bg-[#1F2937] rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-[#ECFDF5]"><Num>{totalDistanceKm}</Num></p>
            <p className="text-sm text-gray-400 mt-1">km covered</p>
          </div>
          <div className="bg-[#1F2937] rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-[#ECFDF5]">4:22</p>
            <p className="text-sm text-gray-400 mt-1">avg pace /km</p>
          </div>
        </div>
      </T>

      {lastRace && lastRace.results.length > 0 && (
        <div className="mb-16">
          <T>
            <h2 className="text-2xl font-semibold mb-6">Recent Results: <Var>{lastRace.name}</Var></h2>
          </T>
          <div className="grid gap-4 md:grid-cols-3">
            {lastRace.results.slice(0, 3).map((result) => (
              <div key={result.rank} className="bg-[#1F2937] rounded-lg p-5 border border-gray-700">
                <T>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-[#ECFDF5]">#<Num>{result.rank}</Num></span>
                    <span className="text-white font-medium"><Var>{result.runnerName}</Var></span>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>Time: <Var>{result.finishTime}</Var></p>
                    <p>Pace: <Var>{result.pace}</Var> /km</p>
                    <p>Age group: <Var>{result.ageGroup}</Var></p>
                  </div>
                </T>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/races" className="bg-[#065F46] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#065F46]/80 transition-colors">
          <T>View All Races</T>
        </Link>
        <Link href="/training" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
          <T>Training Plans</T>
        </Link>
        <Link href="/leaderboard" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
          <T>Leaderboard</T>
        </Link>
      </div>
    </div>
  );
}
