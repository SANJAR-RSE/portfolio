export default function Footer() {
  return (
    <footer className="w-full bg-[#262624] border-t border-[#333331] py-6 px-10 flex items-center justify-between">

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#eeedfe] text-[#4e4795] font-bold text-xs flex items-center justify-center">
          SR
        </div>
        <span className="text-[#aeaca3] text-sm">Sanjar Rasulberdiyev</span>
      </div>

      <p className="text-[#aeaca3] text-sm">
        © 2026 — Barcha huquqlar Sanjar tomonidan himoyalangan
      </p>

      <div className="flex items-center gap-2">
        <a href="https://github.com" className="w-8 h-8 rounded-full bg-[#333331] flex items-center justify-center text-[#aeaca3] hover:text-white transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href="https://linkedin.com" className="w-8 h-8 rounded-full bg-[#333331] flex items-center justify-center text-[#aeaca3] hover:text-white transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://t.me" className="w-8 h-8 rounded-full bg-[#333331] flex items-center justify-center text-[#aeaca3] hover:text-white transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </a>
      </div>

    </footer>
  )
}