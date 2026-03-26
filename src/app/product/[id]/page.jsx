import Proid from '@/app/api/proid'
import Actions from './Actions'

export default async function Pro({ params }) {
  const resolvedParams = await params
  const { id } = resolvedParams
  const res = await Proid(id)
  const data = res.data

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-10 transition-colors duration-500">
      <div className="max-w-6xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800 transition-all">
        
        {/* Banner Image / Poster */}
        <div className="md:w-5/12 relative bg-slate-900 group overflow-hidden">
          <img
            src={data.poster}
            alt={data.title}
            className="w-full h-full object-cover transition duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="glass px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Premium Quality
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-between relative bg-white dark:bg-slate-900">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black px-5 py-2 rounded-2xl uppercase tracking-[0.1em]">
                {data.genre}
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-sm font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                {data.year}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              {data.title}
            </h1>

            <div className="relative mb-12">
              <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic">
                "{data.plot}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                  <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 underline decoration-blue-500/30 decoration-2 underline-offset-4">
                    Top Cast
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{data.actors}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                  <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">
                    Directed By
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{data.director}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                  <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">
                    Recognition
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{data.awards}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                  <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">
                    Origin
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{data.country}</p>
                </div>
              </div>
            </div>
          </div>

          <Actions posterUrl={data.poster} />
          
          <div className="absolute top-12 right-12 flex flex-col items-end">
             <div className="flex items-center gap-1.5 text-yellow-500 font-black text-2xl">
                <span className="text-slate-900 dark:text-white mr-1 text-[10px] bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-widest font-black">IMDB</span>
                ★ 9.4
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
