export interface LeaderboardEntry {
  rank: number;
  name: string;
  totalRaces: number;
  totalDistance: number;
  bestPace: string;
  points: number;
  category: "5K" | "10K" | "Half Marathon" | "Marathon";
}

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Marcus Chen", totalRaces: 24, totalDistance: 482, bestPace: "3:45", points: 2840, category: "Marathon" },
  { rank: 2, name: "Sarah Williams", totalRaces: 22, totalDistance: 418, bestPace: "3:52", points: 2710, category: "Marathon" },
  { rank: 3, name: "Ahmed Hassan", totalRaces: 28, totalDistance: 356, bestPace: "3:13", points: 2680, category: "10K" },
  { rank: 4, name: "Kevin Nakamura", totalRaces: 32, totalDistance: 290, bestPace: "3:22", points: 2550, category: "5K" },
  { rank: 5, name: "Sophie Martin", totalRaces: 20, totalDistance: 380, bestPace: "3:35", points: 2490, category: "Half Marathon" },
  { rank: 6, name: "David Okafor", totalRaces: 18, totalDistance: 425, bestPace: "3:58", points: 2380, category: "Marathon" },
  { rank: 7, name: "Elena Rodriguez", totalRaces: 26, totalDistance: 310, bestPace: "3:28", points: 2340, category: "Half Marathon" },
  { rank: 8, name: "Patrick O'Brien", totalRaces: 30, totalDistance: 275, bestPace: "3:17", points: 2290, category: "10K" },
  { rank: 9, name: "Lisa Tanaka", totalRaces: 16, totalDistance: 395, bestPace: "4:05", points: 2180, category: "Marathon" },
  { rank: 10, name: "Daniel Kim", totalRaces: 22, totalDistance: 265, bestPace: "3:25", points: 2150, category: "10K" },
  { rank: 11, name: "Maria Santos", totalRaces: 34, totalDistance: 240, bestPace: "3:38", points: 2080, category: "5K" },
  { rank: 12, name: "Tom Bradley", totalRaces: 19, totalDistance: 350, bestPace: "3:48", points: 2020, category: "Half Marathon" },
  { rank: 13, name: "Nina Petrova", totalRaces: 25, totalDistance: 285, bestPace: "3:23", points: 1960, category: "10K" },
  { rank: 14, name: "James Park", totalRaces: 15, totalDistance: 370, bestPace: "4:10", points: 1890, category: "Marathon" },
  { rank: 15, name: "Rachel Adams", totalRaces: 28, totalDistance: 220, bestPace: "3:34", points: 1840, category: "5K" },
];
