'use client'

import Gauge from "@/component/gauge";
import DynamicLyric from "@/component/lyric";
import Scene from "@/component/scene";
import { Lyrics } from "@/app/data/lyrics";
import { useState } from "react";
import Menu from "@/component/menu";
import About from "@/component/about";

export default function Game() {
  const [fullLyric, setFullLyric] = useState(() =>
    Lyrics.map(item => ({ ...item }))
  );
  const [isOpen, setIsOpen] = useState(false);
  const [lyric, setLyric] = useState<string | null>(null);
  const [about, setAbout] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  function markFound(name: string) {
    setFullLyric(prev =>
      prev.map(item =>
        item.name === name ? { ...item, isFound: true } : item
      )
    );
  }

  function resetGame() {
    setFullLyric(Lyrics.map(item => ({ ...item })));
    setIsEnd(false);
  }

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
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          about={about}
          setAbout={setAbout}
          resetGame={resetGame}
        />
      </main>

      {isOpen && <DynamicLyric lyric={fullLyric} />}
      {about && <About />}
    </div>
  );
}
