export default async function Here() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section for Products */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Featured Products
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Discover our curated collection of high-quality items, from the latest tech to premium lifestyle essentials.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.products.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col h-[500px] bg-card dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-800/20 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="glass px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                   <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">
                    ${item.price}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 flex flex-col">
                <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                   <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                        ⭐
                      </div>
                      <span className="text-sm font-bold self-center">{item.rating}</span>
                   </div>
                   <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                      View Details
                   </button>
                </div>
              </div>
              
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}