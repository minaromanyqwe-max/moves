"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Product from "../api/product";

export default function IMG() {
  const [data, setData] = useState([]);
  const [mood, setMood] = useState("white");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Product();
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMood(savedMood);
      document.documentElement.classList.toggle("dark", savedMood === "dark");
    }
  }, []);

  const toggleMood = () => {
    const newMood = mood === "white" ? "dark" : "white";
    setMood(newMood);
    localStorage.setItem("mood", newMood);
    document.documentElement.classList.toggle("dark", newMood === "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
             <h1 className="text-6xl font-black tracking-tight bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent italic">
              Cinema Hub
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-lg mx-auto md:mx-0">
              Explore your personal library of timeless masterpieces and cinematic wonders.
            </p>
          </div>
          
          <button
            onClick={toggleMood}
            className="group relative flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-200/50 dark:shadow-none transition hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="flex items-center gap-2">
               {mood === "dark" ? (
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21.75a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.106 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 00-1.06-1.061l-1.591 1.59zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm2.106-5.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 101.061-1.06l-1.59-1.591z" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-900">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.662.454C11.188 4.413 10.988 7.512 9.4 9.6c.04.053.08.105.118.158A10.457 10.457 0 0110.518 11.23a.75.75 0 01-.634 1.144l-.155.03c-2.456.491-4.113 2.148-4.604 4.604l-.03.155a.75.75 0 01-1.144.634 10.457 10.457 0 01-1.472-1.001 10.43 10.43 0 01-.158-.118C5.012 10.988 8.113 11.188 10.375 10.19a.75.75 0 01.454-.662l1.718-.528z" clipRule="evenodd" />
                 </svg>
               )}
               {mood === "dark" ? "Light View" : "Night View"}
            </span>
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {data.map((re) => (
            <Link key={re.id} href={`/product/${re.id}`} className="group">
              <div className="relative h-[480px] bg-slate-100 dark:bg-slate-800/50 rounded-[2.5rem] shadow-sm dark:shadow-none overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-4 border border-slate-100 dark:border-slate-800">
                {/* Image Wrapper */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={re.poster}
                    alt={re.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-8 z-10 flex flex-col justify-end min-h-[50%] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="glass px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                      {re.genre}
                    </span>
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                      {re.year}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {re.title}
                  </h2>
                  
                  <p className="text-sm text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {re.plot}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">
                    <span>Explore More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 translate-x-0 group-hover:translate-x-2 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}