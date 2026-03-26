"use client";

import { useRouter } from "next/navigation";

export default function Actions({ posterUrl }) {
  const router = useRouter();

  const handleWatchNow = () => {
    if (posterUrl) {
      // Redirecting to the image directly to simulate "watching" the content
      window.open(posterUrl, "_blank");
    } else {
      alert("🍿 Starting your movie! Enjoy the show.");
    }
  };

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Gallery
      </button>

      <button
        onClick={handleWatchNow}
        className="group relative flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 overflow-hidden"
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transition-all group-hover:h-full"></div>
        <span className="relative z-10 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
          Watch Now
        </span>
      </button>
    </div>
  );
}
