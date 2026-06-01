"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "UI Designer", "React Developer", "Web Developer"];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = deleting ? 55 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((p) => p + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((p) => p - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <>
      <div className="p-25 bg-[#262624] w-full h-screen relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#eeedfe] opacity-10" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[220px] h-[220px] rounded-full bg-[#9fe1cb] opacity-10" />

        <div className="w-35 p-11 h-35 rounded-[50%] bg-[#eeedfe] text-[#4e4795] font-black text-4xl">SR</div>

        <div className="w-60 h-10 bg-[#eeedfe] rounded-3xl text-[#4e4795] font-bold p-2 pl-3 mt-10 text-center">
          Frontend Developer
        </div>

        <h1 className="text-[#faf9f5] text-6xl font-bold mt-8">Sanjar Rasulberdiyev</h1>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#a89fe8] text-3xl font-semibold"><span className="text-[20px] text-gray-500">{`>_ `} </span>{text}</span>
          <span className="w-[2px] h-7 bg-[#a89fe8] animate-pulse inline-block" />
        </div>

        <h1 className="text-[#aeaca3] text-2xl w-160 mt-6">
          Foydalanuvchilarga qulay va chiroyli interfeyislar yarataman.
          Har bir loyiha — bu yangi muammo va ijodiy yechim.
        </h1>

        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-2 w-40 h-11  text-white rounded-2xl mt-10 font-medium border transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            <Link href="/contact">Bog'lanish</Link>
          </button>
          <button className="flex items-center justify-center gap-2 w-40 h-11 border border-[#aeaca3] text-[#aeaca3] rounded-2xl mt-10 font-medium hover:border-white hover:text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
            <Link href={"/projects"}>Loyihalar</Link>
          </button>
        </div>
        <div className="flex gap-3 mt-8">
          <button className="w-11 h-11 rounded-full bg-[#333331] flex items-center justify-center text-[#aeaca3] hover:text-[#a89fe8] hover:bg-[#3d3d3b] transition-colors cursor-pointer">
            <a target="_blank" href="https://github.com/sanjar-rse"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg></a>
          </button>
          <button className="w-11 h-11 rounded-full bg-[#333331] flex items-center justify-center text-[#aeaca3] hover:text-[#a89fe8] hover:bg-[#3d3d3b] transition-colors cursor-pointer">
            <a target="_blank" href="https://www.instagram.com/1_.sanjar._1/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
          </button>
          <button className="w-11 h-11 rounded-full bg-[#333331] flex items-center justify-center text-[#aeaca3] hover:text-[#a89fe8] hover:bg-[#3d3d3b] transition-colors cursor-pointer">
            <a target="_blank" href="https://web.telegram.org/sanjar_rse"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></a>
          </button>
        </div>
      </div>
    </>
  );
}