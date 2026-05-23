import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 bg-[#262624]/90 backdrop-blur-md border-b border-[#333331] flex items-center justify-between px-10 sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-9 h-9 rounded-xl bg-[#eeedfe] text-[#4e4795] font-black text-sm flex items-center justify-center shadow-lg">
          SR
        </div>

        <div className="flex flex-col leading-none">
          <span className="text-[#faf9f5] font-semibold text-[15px]">
            Sanjar
          </span>

          <span className="text-[#77756d] text-[11px]">
            Frontend Developer
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-2 bg-[#2d2d2b] border border-[#333331] p-1 rounded-2xl">

        <Link
          href="/"
          className="text-[#faf9f5] bg-[#333331] text-sm px-4 py-2 rounded-xl transition-all"
        >
          Home
        </Link>

        <Link
          href="/aboutme"
          className="text-[#aeaca3] text-sm px-4 py-2 rounded-xl hover:bg-[#333331] hover:text-[#faf9f5] transition-all"
        >
          Haqimda
        </Link>

        <Link
          href="/projects"
          className="text-[#aeaca3] text-sm px-4 py-2 rounded-xl hover:bg-[#333331] hover:text-[#faf9f5] transition-all"
        >
          Loyihalar
        </Link>

        <Link
          href="/contact"
          className="text-[#aeaca3] text-sm px-4 py-2 rounded-xl hover:bg-[#333331] hover:text-[#faf9f5] transition-all"
        >
          Aloqa
        </Link>

      </nav>

      <Link href={"/contact"}>
      <button className="flex items-center gap-2 bg-[#534AB7] text-white text-sm font-medium px-5 py-2.5 rounded-2xl hover:bg-[#3C3489] hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-[#534AB7]/20">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>

        Resume
      </button>
      </Link>
      

    </header>
  )
}