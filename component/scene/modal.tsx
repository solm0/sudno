import { LyricsProp } from "@/app/data/lyrics"

export default function Modal({
  modalData, markFound, setLyric
}: {
  modalData: LyricsProp;
  markFound: (name: string) => void;
  setLyric: (name: string | null) => void;
}){
  return (
    <div
      className="absolute w-96 h-72 z-10 bg-black border border-white flex flex-col items-center justify-between p-12"
      onClick={() => setLyric(null)}
    >
      <div className="relative w-72 h-auto grow flex flex-col text-center">
        {modalData.lyric.map(p => (
          <div
            key={p.ru}
            className="h-14 font-mono text-sm pt"
          >
            <p>{p.ru}</p>
            <p className="text-xs pt-1">{p.kr}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-mono">
        <button
          className={`px-4 py-0.5 border border-white ${modalData.isFound ? 'opacity-30' : 'opacity-100 hover:bg-white hover:text-black'}`}
          onClick={() => markFound(modalData.name)}
          disabled={modalData.isFound}
        >
          {modalData.isFound ? 'saved' : 'save'}
        </button>
        <button
          className="px-4 py-0.5 border border-white hover:bg-white hover:text-black"
          onClick={() => setLyric(null)}
        >close</button>
      </div>
    </div>
  )
}