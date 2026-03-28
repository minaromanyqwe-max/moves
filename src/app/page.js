import Link from "next/link";
import Here from "./here/page";
import PRO from "./product/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block glass px-6 py-2 rounded-full text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in">
            Experience Evolution
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="block text-slate-900 dark:text-white">Design is the</span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent italic">
              Future of Web
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 leading-relaxed">
            Welcome to MyApp, where we blend high-performance engineering with premium, 
            cinematic design aesthetics to create unforgettable digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/here" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-500/40 hover:-translate-y-1 active:scale-95"
            >
              Explore Products
            </Link>
            <Link 
              href="/product" 
              className="px-10 py-5 glass hover:bg-white/10 dark:hover:bg-slate-800 text-slate-900 dark:text-white border-white/20 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 active:scale-95"
            >
              Cinema Hub
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
        </div>
      </section>

      {/* Preview Sections */}
      <div className="relative z-10 space-y-32 py-32 bg-background/50 backdrop-blur-3xl">
        <div className="border-t border-slate-200 dark:border-slate-800 pt-32">
          <Here />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-32">
          <PRO />
        </div>
      </div>
    </main>
  );
}

