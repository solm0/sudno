'use client'

import { LyricsProp } from "@/lyrics";

export default function Gauge({
  fullLyric
}: {
  fullLyric: LyricsProp[];
}) {
  const whole = fullLyric.length;
  const founded = fullLyric.filter(l => l.isFound === true).length;
  const percentage = (founded / whole) * 100;

  return (
    <div className="absolute -top-6 w-auto h-auto flex items-center gap-2">
      <p className="text-white text-xs font-mono">{Math.floor(percentage)}%</p>
      <div className="w-20 h-2 border border-white rounded-full flex items-start overflow-hidden">
        <div
          className="h-full bg-white"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}