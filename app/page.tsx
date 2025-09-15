'use client'

import Gauge from "@/component/gauge";
import Scene from "@/component/scene";
import { Lyrics } from "@/lyrics";
import clsx from "clsx";
import { useState } from "react";
import { Fragment } from "react";

export default function Game() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullLyric, setFullLyric] = useState(() =>
    Lyrics.map(item => ({ ...item }))
  );

  function markFound(name: string) {
    setFullLyric(prev =>
      prev.map(item =>
        item.name === name ? { ...item, isFound: true } : item
      )
    );
  }

  function resetGame() {
    setFullLyric(Lyrics.map(item => ({ ...item })));
  }
  
  const [lyric, setLyric] = useState<string | null>(null);
  const [about, setAbout] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <main className="w-[50rem] h-[30rem] relative">
        <Scene lyric={lyric} setLyric={setLyric} markFound={markFound} fullLyric={fullLyric} />

        <Gauge fullLyric={fullLyric} />
        <div className='flex flex-col items-end gap-2 absolute mt-3 h-auto w-auto right-0 text-sm font-mono'>
          <button
            className={`h-6 flex items-center underline underline-offset-4 hover:no-underline hover:cursor-pointer ${isOpen && 'bg-white text-black'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Lyrics
          </button>
          <button className="underline underline-offset-4 hover:no-underline hover:cursor-pointer" onClick={resetGame}>Restart</button>
          <button
            className={`h-6 flex items-center underline underline-offset-4 hover:no-underline hover:cursor-pointer ${about && 'bg-white text-black'}`}
            onClick={() => setAbout(!about)}
          >About</button>
        </div>

      </main>
      {isOpen && (
        <div className="absolute w-[50rem] flex flex-col items-center text-center justify-center h-screen overflow-y-scroll pointer-events-none">{fullLyric.map(lyric => (
          <Fragment
            key={lyric.name}
          >
            {lyric.lyric.map(p => (
              <div
                key={p.ru}
                className="h-14 font-mono text-sm pt"
              >
                <p className={clsx(
                  'bg-black text-white',
                  lyric.isFound ? 'opacity-100' : 'opacity-5'
                )}>{p.ru}</p>
                {lyric.isFound && <p className="text-xs pt-1 bg-black text-white">{p.kr}</p>}
              </div>
            ))}
          </Fragment>
        ))}</div>
      )}
      {about &&
        <div className="absolute w-80 text-xs break-keep font-mono text-center h-72 p-8 bg-black border border-white flex flex-col items-center justify-between">
          <p>벨라루스 민스크에서 2017년 결성된 포스트펑크 밴드 Молчат Дома의 2집 Этажи의 곡 Судно를 소재로 만든 웹이다. 해당 곡은 러시아 시인 Борис Рыжий의 시를 인용한 것이다.</p>
          <p>‘에나멜 칠 요강, 쪽창문, 서랍장, 침대,<br/> ... ... .’ <br/> 시의 묘사에 따라 재현된 방에서 시인에 대한 단서들을 이어 맞춰 보자.</p>
          <p>제 18회 조형전 - 코로로 정솔미</p>
        </div>
      }
    </div>
  );
}
