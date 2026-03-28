"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Product from "../api/product";

export default function IMG() {
  const [data, setData] = useState([]);

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

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-500 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left border-l-4 border-blue-600 pl-8">
          <div className="space-y-4">
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-sky-400 dark:to-blue-600 bg-clip-text text-transparent italic leading-[0.8]">
              Cinema Hub
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-lg">
              Explore your personal library of timeless masterpieces and cinematic wonders.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {data.map((re) => (
            <Link key={re.id} href={`/product/${re.id}`} className="group">
              <div className="relative h-[550px] bg-slate-100 dark:bg-slate-800/20 rounded-[3rem] shadow-sm dark:shadow-none overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-4 border border-slate-200 dark:border-slate-800">
                {/* Image Wrapper */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={re.poster}
                    alt={re.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-10 z-10 flex flex-col justify-end min-h-[60%] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="glass px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
                      {re.genre}
                    </span>
                    <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">
                      {re.year}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {re.title}
                  </h2>
                  
                  <p className="text-sm text-slate-300/90 line-clamp-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 leading-relaxed font-medium">
                    {re.plot}
                  </p>
                  
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-[10px] font-black text-white/40 tracking-[0.3em] uppercase">
                    <span>Explore More</span>
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Accent line */}
                <div className="absolute top-0 right-0 w-2 h-0 bg-blue-600 group-hover:h-full transition-all duration-1000" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}