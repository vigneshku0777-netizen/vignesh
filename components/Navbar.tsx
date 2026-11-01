import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between bg-black/80 backdrop-blur-xl px-6 sm:px-12 py-4 border-b border-yellow-500/20">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-yellow-400 p-[1.5px] flex items-center justify-center shadow-lg shadow-yellow-500/20">
          <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
            <span className="text-xs font-black text-yellow-400">V</span>
          </div>
        </div>
        <Link href="#hero" className="text-lg font-bold tracking-tight text-white hover:text-yellow-400 transition-colors">
          Vignesh K U
        </Link>
        <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/30">
          FT &bull; NIFT
        </span>
      </div>

      <ul className="flex items-center gap-6 sm:gap-8 text-sm font-medium">
        <li>
          <Link href="#hero" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#works" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Works
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Contact
          </Link>
        </li>
        <li>
          <a
            href="/Vignesh_KU_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-1.5 text-xs shadow-md shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
