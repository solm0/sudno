'use client'

import { useEffect, useRef, useState } from "react";

function formatTime(sec: number) {
  if (isNaN(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function AudioPlayer({
  src,
  onTimeUpdate,
}: {
  src: string;
  onTimeUpdate?: (time: number) => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrent(audio.currentTime);
      onTimeUpdate?.(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [onTimeUpdate]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
  
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        alert("Safari에서 지원되지 않는 기능입니다😭");
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />

      {!hasStarted ? (
        <div className="absolute bg-black w-full h-full top-0 left-0 flex items-center justify-center">
          <button
            onClick={() => {
              togglePlay();
              setHasStarted(true);
            }}
            className="underline underline-offset-4 hover:no-underline text-lg"
          >
            Play
          </button>
        </div>
      ): (
        <div className="absolute mt-3 text-xs flex gap-2 items-center font-mono">
          <button onClick={togglePlay} className="underline underline-offset-4 hover:no-underline">
            {playing ? "Pause" : "Play"}
          </button>

          <span>{formatTime(current)}</span>
          <span>/</span>
          <span>2:22</span>

          <button onClick={toggleMute} className="underline underline-offset-4 hover:no-underline">
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>
      )}
    </>
  );
}