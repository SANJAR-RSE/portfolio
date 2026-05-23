export default function Aboutme() {
  const techs = [
    { name: "React / Next.js", pct: 90 },
    { name: "JavaScript", pct: 88 },
    { name: "TypeScript", pct: 80 },
    { name: "Tailwind CSS", pct: 85 },
    { name: "Python", pct: 75 },
    { name: "Figma", pct: 70 },
    { name: "Node.js", pct: 60 },
  ];

  const skills = [
    { label: "UI/UX Design", color: "bg-[#EEEDFE] text-[#3C3489]" },
    { label: "Responsive Layout", color: "bg-[#EEEDFE] text-[#3C3489]" },
    { label: "REST API", color: "bg-[#E1F5EE] text-[#085041]" },
    { label: "Git & GitHub", color: "bg-[#E1F5EE] text-[#085041]" },
    { label: "Problem Solving", color: "bg-[#FAECE7] text-[#712B13]" },
    { label: "Team Work", color: "bg-[#FAECE7] text-[#712B13]" },
  ];

  return (
    <section className="w-full min-h-screen bg-[#262624] px-10 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Chap tomon */}
        <div>
          <span className="text-xs text-[#534AB7] font-semibold tracking-widest uppercase">About me</span>
          <h2 className="text-4xl font-bold text-[#faf9f5] mt-3 mb-6 leading-tight">Men haqimda</h2>

          <p className="text-[#aeaca3] text-[15px] leading-relaxed mb-4">
            Men Sanjar Rasulberdiyev — foydalanuvchi tajribasini birinchi o'ringa qo'yuvchi Frontend Developer. 2+ yil davomida zamonaviy web ilovalar yaratib kelmoqdaman.
          </p>
          <p className="text-[#aeaca3] text-[15px] leading-relaxed">
            Kodni faqat ishlaydigan qilish emas, balki toza, qayta ishlatiluvchi va kengaytiriladigan qilib yozishga harakat qilaman.
          </p>

          <div className="flex gap-10 mt-10">
            {[
              { num: "2+", label: "Yil tajriba" },
              { num: "20+", label: "Loyihalar" },
              { num: "12+", label: "Texnologiyalar" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#faf9f5]">{s.num}</div>
                <div className="text-xs text-[#aeaca3] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* O'ng tomon */}
        <div className="flex flex-col gap-5">

          {/* Ko'nikmalar */}
          <div className="bg-[#2e2e2c] border border-[#333331] rounded-2xl p-5">
            <div className="flex items-center gap-2 text-[#faf9f5] text-sm font-medium mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              Ko'nikmalar
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s.label} className={`text-xs px-3 py-1.5 rounded-full font-medium ${s.color}`}>
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Texnologiyalar */}
          <div className="bg-[#2e2e2c] border border-[#333331] rounded-2xl p-5">
            <div className="flex items-center gap-2 text-[#faf9f5] text-sm font-medium mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Texnologiyalar
            </div>
            <div className="flex flex-col gap-3">
              {techs.map((t) => (
                <div key={t.name} className="flex items-center gap-3">
                  <span className="text-[#aeaca3] text-sm w-36 shrink-0">{t.name}</span>
                  <div className="flex-1 h-1 bg-[#333331] rounded-full">
                    <div className="h-1 bg-[#534AB7] rounded-full" style={{ width: `${t.pct}%` }} />
                  </div>
                  <span className="text-[#5F5E5A] text-xs w-8 text-right">{t.pct}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}