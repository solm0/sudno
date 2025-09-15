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

  const [isEnd, setIsEnd] = useState(false);
  
  function resetGame() {
    setFullLyric(Lyrics.map(item => ({ ...item })));
    setIsEnd(false);
  }
  
  const [lyric, setLyric] = useState<string | null>(null);
  const [about, setAbout] = useState(false);


  return (
    <div className="w-full h-full flex items-center justify-center">
      <main className={`h-[30rem] relative transition-[width] duration-300 ${isEnd ? 'w-full' : 'w-[50rem]'}`}>
        <Scene
          lyric={lyric}
          setLyric={setLyric}
          markFound={markFound}
          fullLyric={fullLyric}
        />

        <Gauge
          fullLyric={fullLyric}
          onGameEnd={() => {
            markFound('end');
            setIsOpen(true);
            setIsEnd(true)
          }}
        />
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
          <p>들리는 음악은 벨라루스의 포스트펑크 밴드 Молчат Дома의 곡 Судно이다. 해당 곡의 가사는 러시아 시인 Борис Рыжий의 시를 인용한 것이다.</p>
          <p>‘에나멜 칠 요강, 쪽창, 탁자, 침대, ... ... .’ 시의 묘사에 따라 방을 재현하였다.</p>
          <p>시구들을 모아 시인에 대한 단서를 찾아 보자.</p>
          <p className="opacity-40">제 18회 조형전 - 코로로 정솔미</p>
        </div>
      }
    </div>
  );
}
