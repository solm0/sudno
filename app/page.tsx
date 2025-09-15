'use client'

import Scene from "@/component/scene";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <main className="w-[50rem] h-[30rem] border border-white">
        <Scene />
      </main>
    </div>
  );
}
