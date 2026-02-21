import { T, Var, Branch } from "gt-next";
import { trainingPlans } from "@/data/training-plans";
import WeekSelector from "@/components/WeekSelector";

export default function TrainingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-3xl font-bold mb-2">Training Plans</h1>
        <p className="text-gray-400 mb-8">Structured training plans for every level. Select a week to view the daily schedule.</p>
      </T>

      <div className="space-y-12">
        {trainingPlans.map((plan) => (
          <div key={plan.id} className="bg-[#1F2937] rounded-lg p-6 border border-gray-700">
            <T>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-semibold text-white">
                    <Branch
                      branch={plan.level}
                      beginner={<>Beginner</>}
                      intermediate={<>Intermediate</>}
                      advanced={<>Advanced</>}
                    />
                  </h2>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#065F46]/20 text-[#ECFDF5]"><Var>{plan.targetRace}</Var></span>
                </div>
                <p className="text-sm text-gray-400">
                  <Branch
                    branch={plan.level}
                    beginner={<>Perfect for new runners building up to their first 5K.</>}
                    intermediate={<>For experienced runners targeting a half marathon PR.</>}
                    advanced={<>High-mileage marathon preparation for competitive runners.</>}
                  />
                </p>
              </div>
            </T>
            <WeekSelector plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}
