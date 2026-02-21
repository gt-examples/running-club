"use client";

import { useState, useEffect } from "react";
import { T, Num } from "gt-next";

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      <div className="bg-[#1F2937] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#ECFDF5]"><Num>{timeLeft.days}</Num></div>
        <div className="text-xs text-gray-400 mt-1"><T>Days</T></div>
      </div>
      <div className="bg-[#1F2937] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#ECFDF5]"><Num>{timeLeft.hours}</Num></div>
        <div className="text-xs text-gray-400 mt-1"><T>Hours</T></div>
      </div>
      <div className="bg-[#1F2937] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#ECFDF5]"><Num>{timeLeft.minutes}</Num></div>
        <div className="text-xs text-gray-400 mt-1"><T>Minutes</T></div>
      </div>
      <div className="bg-[#1F2937] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#ECFDF5]"><Num>{timeLeft.seconds}</Num></div>
        <div className="text-xs text-gray-400 mt-1"><T>Seconds</T></div>
      </div>
    </div>
  );
}
