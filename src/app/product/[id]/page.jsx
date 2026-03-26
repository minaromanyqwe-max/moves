import Proid from '@/app/api/proid'

export default async function Pro({ params }) {
  console.log('Product page params:', params)
  const resolvedParams = await params
  const { id } = resolvedParams
  console.log('Resolved product id:', id)
  const res = await Proid(id)
  const data = res.data


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-10">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Banner Image / Poster */}
        <div className="md:w-1/3 relative bg-gray-900 group">
          <img
            src={data.poster}
            alt={data.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {data.genre}
              </span>
              <span className="text-gray-400 text-sm font-medium">
                {data.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {data.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed italic mb-8 border-l-4 border-blue-600 pl-6">
              "{data.plot}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Actors
                  </span>
                  <p className="text-gray-800 font-medium">{data.actors}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Director
                  </span>
                  <p className="text-gray-800 font-medium">{data.director}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Awards
                  </span>
                  <p className="text-gray-800 font-medium">{data.awards}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Country
                  </span>
                  <p className="text-gray-800 font-medium">{data.country}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
            <div className="flex gap-4">
              {/* Star Rating Mockup */}
              <div className="flex text-yellow-500 font-bold items-center gap-1">
                ★ <span className="text-gray-900 text-lg">9.4</span>
              </div>
            </div>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
