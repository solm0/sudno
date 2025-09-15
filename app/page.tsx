'use client'

import Gauge from "@/component/gauge";
import DynamicLyric from "@/component/dynamicLyric";
import Scene from "@/component/scene";
import { Lyrics } from "@/app/data/lyrics";
import { useEffect, useState } from "react";
import Menu from "@/component/menu";
import About from "@/component/about";
import { useRef } from "react";
import AudioPlayer from "@/component/audioPlayer";

export default function Game() {
  const [fullLyric, setFullLyric] = useState(() =>
    Lyrics.map(item => ({ ...item }))
  );
  const [isOpen, setIsOpen] = useState(true);
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

  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [timeLyric, setTimeLyric] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    }
  }, [])

  // 가사 싱크 맞추기
  useEffect(() => {
    console.log('currentTime', currentTime)
    const current = Lyrics.find(l => 
      l.time?.some(time =>
        (time?.start ?? 99) <= currentTime && (time?.end ?? 0) >= currentTime
      )
    );
    if (current) {
      setTimeLyric(current.name);
      console.log('timeLyric', timeLyric)
    } else {
      setTimeLyric(null)
    }
  }, [currentTime]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <main className={`relative transition-[width] duration-300 ${isEnd ? 'w-full h-[40rem]' : 'w-[50rem] h-[30rem]'}`}>
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
        <AudioPlayer 
          src="/music.mp3" 
          onTimeUpdate={setCurrentTime}
        />
      </main>

      {isOpen && <DynamicLyric lyric={fullLyric} current={timeLyric} />}
      {about && <About setAbout={setAbout} />}
    </div>
  );
}
