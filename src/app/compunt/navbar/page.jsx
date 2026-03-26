import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Left name */}
      <h1 className="text-xl font-bold text-blue-600">
        MyApp
      </h1>

      {/* Right links (اسمين فقط) */}
      <div className="flex gap-6">
        <Link href="/here" className="text-gray-700 hover:text-blue-600 transition">
          product
        </Link>

        <Link href="product" className="text-gray-700 hover:text-blue-600 transition">
          About
        </Link>
      </div>

    </nav>
  );
}