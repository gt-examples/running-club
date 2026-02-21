import { T, Var, Num, DateTime, Plural, Branch } from "gt-next";
import { getGT } from "gt-next/server";
import { races, getRaceById } from "@/data/races";
import { notFound } from "next/navigation";
import ElevationChart from "@/components/ElevationChart";
import CourseMap from "@/components/CourseMap";
import Link from "next/link";

export default async function RaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const race = getRaceById(id);
  if (!race) return notFound();
  const gt = await getGT();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/races" className="text-[#065F46] hover:text-[#ECFDF5] text-sm mb-4 inline-block transition-colors">
        <T>&larr; Back to Races</T>
      </Link>

      <T>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2"><Var>{race.name}</Var></h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span><DateTime>{new Date(race.date)}</DateTime></span>
            <span><Var>{race.location}</Var></span>
            <span><Var>{race.distanceLabel}</Var></span>
            <span>
              <Branch
                branch={race.terrain}
                road={<>Road</>}
                trail={<>Trail</>}
                track={<>Track</>}
                cross-country={<>Cross Country</>}
              />
            </span>
            <span>
              <Branch
                branch={race.status}
                upcoming={<>Upcoming</>}
                completed={<>Completed</>}
              />
            </span>
          </div>
        </div>
      </T>

      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <div>
          <T><h2 className="text-xl font-semibold mb-4">Course Map</h2></T>
          <CourseMap terrain={race.terrain} />
        </div>
        <div>
          <T><h2 className="text-xl font-semibold mb-4">Elevation Profile</h2></T>
          <ElevationChart data={race.elevationProfile} />
          <T>
            <div className="flex gap-6 mt-3 text-sm text-gray-400">
              <span>Elevation gain: <Num>{race.elevationGain}</Num>m</span>
              <span>Distance: <Num>{race.distance}</Num> km</span>
            </div>
          </T>
        </div>
      </div>

      <div className="mb-12">
        <T>
          <h2 className="text-xl font-semibold mb-4">Aid Stations</h2>
          <p className="text-sm text-gray-400 mb-4">
            <Plural n={race.aidStations.length}
              singular={<><Num>{race.aidStations.length}</Num> aid station on the course</>}
              plural={<><Num>{race.aidStations.length}</Num> aid stations on the course</>}
            />
          </p>
        </T>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {race.aidStations.map((station, i) => (
            <div key={i} className="bg-[#1F2937] rounded-lg p-4 border border-gray-700">
              <T>
                <h3 className="text-white font-medium mb-1"><Var>{station.name}</Var></h3>
                <p className="text-sm text-gray-400 mb-2">km <Num>{station.distanceKm}</Num></p>
              </T>
              <div className="flex flex-wrap gap-1">
                {station.supplies.map((s) => (
                  <span key={s} className="text-xs bg-[#065F46]/20 text-[#ECFDF5] px-2 py-0.5 rounded">
                    {s === "Water" ? gt("Water") : s === "Electrolytes" ? gt("Electrolytes") : s === "Gels" ? gt("Gels") : s === "Fruit" ? gt("Fruit") : s === "First Aid" ? gt("First Aid") : s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {race.results.length > 0 && (
        <div>
          <T>
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <p className="text-sm text-gray-400 mb-4">
              <Plural n={race.results.length}
                singular={<><Num>{race.results.length}</Num> finisher</>}
                plural={<><Num>{race.results.length}</Num> finishers</>}
              />
            </p>
          </T>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <T>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Rank</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Runner</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Pace</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Age Group</th>
                  </T>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {race.results.map((r) => (
                  <tr key={r.rank} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3 text-sm text-[#ECFDF5] font-medium"><Num>{r.rank}</Num></td>
                    <td className="px-4 py-3 text-sm text-white">{r.runnerName}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{r.finishTime}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{r.pace} {gt("/km")}</td>
                    <td className="px-4 py-3 text-sm text-gray-300">{r.ageGroup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
