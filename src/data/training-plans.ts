export interface TrainingDay {
  day: string;
  workout: string;
  type: "easy" | "tempo" | "interval" | "long" | "rest";
  distance: number;
}

export interface TrainingWeek {
  weekNumber: number;
  totalDistance: number;
  days: TrainingDay[];
}

export interface TrainingPlan {
  id: string;
  level: "beginner" | "intermediate" | "advanced";
  targetRace: string;
  weeks: TrainingWeek[];
}

export const trainingPlans: TrainingPlan[] = [
  {
    id: "beginner-5k",
    level: "beginner",
    targetRace: "5K",
    weeks: [
      {
        weekNumber: 1, totalDistance: 12,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 2 },
          { day: "Tuesday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 2.5 },
          { day: "Thursday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 2 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 3.5 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 2, totalDistance: 14,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 2.5 },
          { day: "Tuesday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 3 },
          { day: "Thursday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 2.5 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 4 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 3, totalDistance: 16,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 3 },
          { day: "Tuesday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Wednesday", workout: "Tempo Run", type: "tempo", distance: 3 },
          { day: "Thursday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 2.5 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 4.5 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 4, totalDistance: 18,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 3 },
          { day: "Tuesday", workout: "Intervals", type: "interval", distance: 3 },
          { day: "Wednesday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Thursday", workout: "Easy Run", type: "easy", distance: 3 },
          { day: "Friday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 5 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
    ],
  },
  {
    id: "intermediate-half",
    level: "intermediate",
    targetRace: "Half Marathon",
    weeks: [
      {
        weekNumber: 1, totalDistance: 32,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 5 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 6 },
          { day: "Wednesday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 5 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 4 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 12 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 2, totalDistance: 36,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 5 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 7 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 4 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 6 },
          { day: "Friday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 14 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 3, totalDistance: 40,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 6 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 8 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 5 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 6 },
          { day: "Friday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 15 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 4, totalDistance: 34,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 5 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 6 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 4 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 5 },
          { day: "Friday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 10 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
    ],
  },
  {
    id: "advanced-marathon",
    level: "advanced",
    targetRace: "Marathon",
    weeks: [
      {
        weekNumber: 1, totalDistance: 64,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 8 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 10 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 8 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 10 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 6 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 22 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 2, totalDistance: 72,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 10 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 12 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 8 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 10 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 6 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 26 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 3, totalDistance: 76,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 10 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 14 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 8 },
          { day: "Thursday", workout: "Intervals", type: "interval", distance: 12 },
          { day: "Friday", workout: "Easy Run", type: "easy", distance: 6 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 30 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
      {
        weekNumber: 4, totalDistance: 50,
        days: [
          { day: "Monday", workout: "Easy Run", type: "easy", distance: 8 },
          { day: "Tuesday", workout: "Tempo Run", type: "tempo", distance: 8 },
          { day: "Wednesday", workout: "Easy Run", type: "easy", distance: 6 },
          { day: "Thursday", workout: "Easy Run", type: "easy", distance: 5 },
          { day: "Friday", workout: "Rest", type: "rest", distance: 0 },
          { day: "Saturday", workout: "Long Run", type: "long", distance: 16 },
          { day: "Sunday", workout: "Rest", type: "rest", distance: 0 },
        ],
      },
    ],
  },
];
