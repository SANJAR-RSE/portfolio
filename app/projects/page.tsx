function Projects() {


    const projects = [
  {
    name: "Admin Dashboard",
    desc: "Zamonaviy admin panel — foydalanuvchilar, statistika va boshqaruv imkoniyatlari bilan.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    demo: "https://",
    github: "https://",
    featured: true,
    bg: "#1e1e3a",
  },
  {
    name: "E-Commerce App",
    desc: "To'liq funksional onlayn do'kon — savat, to'lov va mahsulot filtri bilan.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    demo: "https://",
    github: "https://",
    featured: false,
    bg: "#1a2e1a",
  },
  {
    name: "Chat Application",
    desc: "Real-time chat ilovasi — xonalar, online holat va fayl yuborish imkoniyati bilan.",
    tags: ["React", "Socket.io", "Express", "Tailwind"],
    demo: "https://",
    github: "https://",
    featured: false,
    bg: "#2a1e1e",
  },
];

  return (
    <section className="w-full min-h-screen bg-[#262624] px-10 py-20">
      <div className="max-w-5xl mx-auto">

        <span className="text-xs text-[#534AB7] font-semibold tracking-widest uppercase">Portfolio</span>
        <h2 className="text-4xl font-bold text-[#faf9f5] mt-3 mb-10">Loyihalarim</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-[#2e2e2c] border border-[#333331] rounded-2xl overflow-hidden hover:border-[#534AB7] transition-colors"
            >
              <div className="w-full h-40 flex items-center justify-center relative" style={{ background: p.bg }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity={0.3}>
                  <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
                {p.featured && (
                  <span className="absolute top-3 left-3 bg-[#534AB7] text-white text-[11px] font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-[#faf9f5] font-semibold text-base mb-2">{p.name}</h3>
                <p className="text-[#aeaca3] text-sm leading-relaxed mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-[#333331] text-[#aeaca3] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 border-t border-[#333331] pt-4">
                  <a href={"https://github.com/sanjar-rse"} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-[#534AB7] hover:bg-[#3C3489] text-white text-xs font-medium py-2 rounded-xl transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={"https://github.com/sanjar-rse"} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-[#333331] hover:bg-[#3d3d3b] text-[#aeaca3] hover:text-[#faf9f5] text-xs font-medium py-2 rounded-xl transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects