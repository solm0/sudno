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

  // update current time + send up
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

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPlaying(true);
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
    <div className="absolute mt-3 text-xs flex gap-2 items-center font-mono">
      <audio ref={audioRef} src={src} preload="auto" />

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
  );
}