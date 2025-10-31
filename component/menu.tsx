export default function Menu({
  isOpen, setIsOpen, about, setAbout, resetGame,
}: {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void;
  about: boolean,
  setAbout: (about: boolean) => void;
  resetGame: () => void;
}) {
  return (
    <div className='absolute right-4 flex flex-col items-end gap-2 mt-3 h-auto w-auto text-sm font-mono'>
      <button
        className={`h-6 flex items-center underline underline-offset-4 hover:no-underline hover:cursor-pointer ${isOpen && 'bg-white text-black'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '가사 숨기기' : '가사 보이기'}
      </button>
      <button className="underline underline-offset-4 hover:no-underline hover:cursor-pointer" onClick={resetGame}>리셋</button>
      <button
        className={`h-6 flex items-center underline underline-offset-4 hover:no-underline hover:cursor-pointer ${about && 'bg-white text-black'}`}
        onClick={() => setAbout(!about)}
      >
        대해서
      </button>
    </div>
  )
}