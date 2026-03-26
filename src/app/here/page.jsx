export default async function Here() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🛒 Products Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full object-contain p-3"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold line-clamp-1">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex justify-between mt-3 text-sm">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {item.category}
                </span>

                <span className="font-bold text-green-600">
                  ${item.price}
                </span>
              </div>

              {/* Extra info */}
              <div className="mt-3 text-xs text-gray-500 space-y-1">
                <p>📦 Stock: {item.stock}</p>
                <p>🚚 {item.shippingInformation}</p>
                <p>🔄 {item.returnPolicy}</p>
                <p>🛡 {item.warrantyInformation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}