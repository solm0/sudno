import { LyricsProp } from "@/app/data/lyrics";
import clsx from "clsx";
import { Fragment } from "react";

export default function DynamicLyric({
  lyric, current,
}: {
  lyric: LyricsProp[];
  current: string | null;
}) {
  console.log('current from dynamicLyric', current)
  return (
    <div className="absolute w-[50rem] flex flex-col items-center text-center justify-center h-screen overflow-y-scroll pointer-events-none">{lyric.map(l => (
      <Fragment
        key={l.name}
      >
        {l.lyric.map(p => (
          <div
            key={p.ru}
            className="h-14 font-mono text-sm pt"
          >
            <p className={clsx(
              'bg-black text-white',
              l.isFound ? 'opacity-100' : 'opacity-5',
              current === l.name && 'text-[#ffff9d]!'
            )}>{p.ru}</p>
            {l.isFound && <p className={clsx('text-xs pt-1 bg-black text-white', current === l.name && 'text-[#ffff9d]!')}>{p.kr}</p>}
          </div>
        ))}
      </Fragment>
    ))}</div>
  )
}