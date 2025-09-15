'use client'

import { useEffect } from "react";
import { LyricsProp } from "@/lyrics";

export default function Gauge({
  fullLyric,
  onGameEnd
}: {
  fullLyric: LyricsProp[];
  onGameEnd?: () => void;
}) {
  const whole = fullLyric.length;
  const founded = fullLyric.filter(l => l.isFound === true).length;
  const percentage = (founded / whole) * 100;

  useEffect(() => {
    if (percentage >= 91) {
      onGameEnd?.();
    }
  }, [percentage]);

  return (
    <div className="absolute -top-6 w-auto h-auto flex items-center gap-2 text-xs font-mono">
      <p className="text-white">{Math.floor(percentage)}%</p>
      <div className="w-20 h-2 border border-white rounded-full flex items-start overflow-hidden">
        <div
          className="h-full bg-white"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {percentage === 100 && <p>Complete!</p>}
    </div>
  )
}