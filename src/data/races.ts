export interface AidStation {
  name: string;
  distanceKm: number;
  supplies: string[];
}

export interface RaceResult {
  rank: number;
  runnerName: string;
  finishTime: string;
  pace: string;
  ageGroup: string;
}

export interface Race {
  id: string;
  name: string;
  date: string;
  distance: number;
  distanceLabel: string;
  terrain: "road" | "trail" | "track" | "cross-country";
  location: string;
  elevationGain: number;
  status: "upcoming" | "completed";
  aidStations: AidStation[];
  elevationProfile: { distance: number; elevation: number }[];
  results: RaceResult[];
}

export const races: Race[] = [
  {
    id: "spring-classic-10k",
    name: "Spring Classic 10K",
    date: "2026-04-12T08:00:00",
    distance: 10,
    distanceLabel: "10K",
    terrain: "road",
    location: "Central Park, New York",
    elevationGain: 85,
    status: "upcoming",
    aidStations: [
      { name: "Mile 2 Station", distanceKm: 3.2, supplies: ["Water", "Electrolytes"] },
      { name: "Halfway Point", distanceKm: 5.0, supplies: ["Water", "Electrolytes", "Gels"] },
      { name: "Mile 5 Station", distanceKm: 8.0, supplies: ["Water", "Electrolytes"] },
    ],
    elevationProfile: [
      { distance: 0, elevation: 25 }, { distance: 1, elevation: 35 }, { distance: 2, elevation: 50 },
      { distance: 3, elevation: 45 }, { distance: 4, elevation: 60 }, { distance: 5, elevation: 55 },
      { distance: 6, elevation: 40 }, { distance: 7, elevation: 50 }, { distance: 8, elevation: 35 },
      { distance: 9, elevation: 30 }, { distance: 10, elevation: 25 },
    ],
    results: [],
  },
  {
    id: "mountain-trail-half",
    name: "Mountain Trail Half Marathon",
    date: "2026-05-24T06:30:00",
    distance: 21.1,
    distanceLabel: "Half Marathon",
    terrain: "trail",
    location: "Blue Ridge Mountains, Virginia",
    elevationGain: 920,
    status: "upcoming",
    aidStations: [
      { name: "Trailhead Station", distanceKm: 4.0, supplies: ["Water", "Electrolytes", "Fruit"] },
      { name: "Ridge Checkpoint", distanceKm: 8.5, supplies: ["Water", "Electrolytes", "Gels", "First Aid"] },
      { name: "Valley Station", distanceKm: 13.0, supplies: ["Water", "Electrolytes", "Gels", "Fruit"] },
      { name: "Summit Station", distanceKm: 17.0, supplies: ["Water", "Electrolytes", "Gels"] },
    ],
    elevationProfile: [
      { distance: 0, elevation: 400 }, { distance: 2, elevation: 520 }, { distance: 4, elevation: 680 },
      { distance: 6, elevation: 750 }, { distance: 8, elevation: 900 }, { distance: 10, elevation: 1050 },
      { distance: 12, elevation: 980 }, { distance: 14, elevation: 820 }, { distance: 16, elevation: 700 },
      { distance: 18, elevation: 550 }, { distance: 21.1, elevation: 400 },
    ],
    results: [],
  },
  {
    id: "city-marathon-2025",
    name: "City Marathon 2025",
    date: "2025-10-15T07:00:00",
    distance: 42.2,
    distanceLabel: "Marathon",
    terrain: "road",
    location: "Downtown Chicago, Illinois",
    elevationGain: 150,
    status: "completed",
    aidStations: [
      { name: "Mile 3 Station", distanceKm: 4.8, supplies: ["Water", "Electrolytes"] },
      { name: "Mile 6 Station", distanceKm: 9.7, supplies: ["Water", "Electrolytes", "Gels"] },
      { name: "Halfway Station", distanceKm: 21.1, supplies: ["Water", "Electrolytes", "Gels", "Fruit", "First Aid"] },
      { name: "Mile 18 Station", distanceKm: 29.0, supplies: ["Water", "Electrolytes", "Gels"] },
      { name: "Mile 23 Station", distanceKm: 37.0, supplies: ["Water", "Electrolytes", "Gels", "Fruit"] },
    ],
    elevationProfile: [
      { distance: 0, elevation: 180 }, { distance: 5, elevation: 185 }, { distance: 10, elevation: 190 },
      { distance: 15, elevation: 195 }, { distance: 20, elevation: 200 }, { distance: 25, elevation: 195 },
      { distance: 30, elevation: 190 }, { distance: 35, elevation: 185 }, { distance: 42.2, elevation: 180 },
    ],
    results: [
      { rank: 1, runnerName: "Marcus Chen", finishTime: "2:48:12", pace: "3:58", ageGroup: "M30-34" },
      { rank: 2, runnerName: "Sarah Williams", finishTime: "2:52:45", pace: "4:05", ageGroup: "F25-29" },
      { rank: 3, runnerName: "David Okafor", finishTime: "2:55:30", pace: "4:09", ageGroup: "M35-39" },
      { rank: 4, runnerName: "Elena Rodriguez", finishTime: "3:01:18", pace: "4:17", ageGroup: "F30-34" },
      { rank: 5, runnerName: "James Park", finishTime: "3:05:42", pace: "4:23", ageGroup: "M25-29" },
      { rank: 6, runnerName: "Lisa Tanaka", finishTime: "3:08:55", pace: "4:28", ageGroup: "F35-39" },
      { rank: 7, runnerName: "Robert Mueller", finishTime: "3:12:20", pace: "4:33", ageGroup: "M40-44" },
      { rank: 8, runnerName: "Ana Costa", finishTime: "3:15:08", pace: "4:37", ageGroup: "F25-29" },
    ],
  },
  {
    id: "autumn-trail-5k",
    name: "Autumn Trail 5K",
    date: "2025-11-02T09:00:00",
    distance: 5,
    distanceLabel: "5K",
    terrain: "trail",
    location: "Redwood State Park, California",
    elevationGain: 120,
    status: "completed",
    aidStations: [
      { name: "Forest Station", distanceKm: 2.5, supplies: ["Water"] },
    ],
    elevationProfile: [
      { distance: 0, elevation: 100 }, { distance: 1, elevation: 150 },
      { distance: 2, elevation: 200 }, { distance: 3, elevation: 180 },
      { distance: 4, elevation: 140 }, { distance: 5, elevation: 100 },
    ],
    results: [
      { rank: 1, runnerName: "Kevin Nakamura", finishTime: "0:18:42", pace: "3:44", ageGroup: "M25-29" },
      { rank: 2, runnerName: "Maria Santos", finishTime: "0:19:15", pace: "3:51", ageGroup: "F20-24" },
      { rank: 3, runnerName: "Tom Bradley", finishTime: "0:20:08", pace: "4:02", ageGroup: "M30-34" },
      { rank: 4, runnerName: "Yuki Yamamoto", finishTime: "0:20:55", pace: "4:11", ageGroup: "F30-34" },
      { rank: 5, runnerName: "Chris Walker", finishTime: "0:21:30", pace: "4:18", ageGroup: "M35-39" },
    ],
  },
  {
    id: "track-invitational",
    name: "Track Invitational 10K",
    date: "2025-09-20T10:00:00",
    distance: 10,
    distanceLabel: "10K",
    terrain: "track",
    location: "Olympic Training Center, Colorado Springs",
    elevationGain: 0,
    status: "completed",
    aidStations: [
      { name: "Lap Station", distanceKm: 5.0, supplies: ["Water", "Electrolytes"] },
    ],
    elevationProfile: [
      { distance: 0, elevation: 1840 }, { distance: 2, elevation: 1840 },
      { distance: 4, elevation: 1840 }, { distance: 6, elevation: 1840 },
      { distance: 8, elevation: 1840 }, { distance: 10, elevation: 1840 },
    ],
    results: [
      { rank: 1, runnerName: "Ahmed Hassan", finishTime: "0:32:15", pace: "3:13", ageGroup: "M25-29" },
      { rank: 2, runnerName: "Sophie Martin", finishTime: "0:33:42", pace: "3:22", ageGroup: "F25-29" },
      { rank: 3, runnerName: "Daniel Kim", finishTime: "0:34:08", pace: "3:25", ageGroup: "M30-34" },
      { rank: 4, runnerName: "Emma Johnson", finishTime: "0:35:20", pace: "3:32", ageGroup: "F20-24" },
      { rank: 5, runnerName: "Lucas Fernandez", finishTime: "0:36:05", pace: "3:36", ageGroup: "M35-39" },
    ],
  },
  {
    id: "cross-country-championship",
    name: "Cross Country Championship",
    date: "2025-12-07T08:30:00",
    distance: 8,
    distanceLabel: "8K",
    terrain: "cross-country",
    location: "Prospect Park, Brooklyn",
    elevationGain: 65,
    status: "completed",
    aidStations: [
      { name: "Midpoint Station", distanceKm: 4.0, supplies: ["Water"] },
    ],
    elevationProfile: [
      { distance: 0, elevation: 30 }, { distance: 1, elevation: 45 },
      { distance: 2, elevation: 55 }, { distance: 3, elevation: 40 },
      { distance: 4, elevation: 60 }, { distance: 5, elevation: 50 },
      { distance: 6, elevation: 35 }, { distance: 7, elevation: 45 },
      { distance: 8, elevation: 30 },
    ],
    results: [
      { rank: 1, runnerName: "Patrick O'Brien", finishTime: "0:26:18", pace: "3:17", ageGroup: "M25-29" },
      { rank: 2, runnerName: "Nina Petrova", finishTime: "0:27:05", pace: "3:23", ageGroup: "F25-29" },
      { rank: 3, runnerName: "Michael Chang", finishTime: "0:27:42", pace: "3:28", ageGroup: "M30-34" },
      { rank: 4, runnerName: "Rachel Adams", finishTime: "0:28:30", pace: "3:34", ageGroup: "F30-34" },
      { rank: 5, runnerName: "Victor Mendez", finishTime: "0:29:15", pace: "3:39", ageGroup: "M20-24" },
    ],
  },
];

export function getNextRace(): Race | undefined {
  return races.find((r) => r.status === "upcoming");
}

export function getRaceById(id: string): Race | undefined {
  return races.find((r) => r.id === id);
}
