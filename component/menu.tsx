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
  )
}