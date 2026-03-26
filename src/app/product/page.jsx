import React from 'react'
import Image from 'next/image'
import Product from '../api/product'
import Link from 'next/link'

export default async function IMG() {
  let res = await Product()
  let data = res.data

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {data.map((re) => (
        <Link key={re.id} href={`/product/${re.id}`}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
            
            <img
              src={re.poster}
              alt={re.title}
              className="w-full h-64 object-cover"
            />


            <div className="p-4 space-y-2">
              <h2 className="text-lg font-bold text-gray-800">
                {re.title}
              </h2>

              <p className="text-sm text-gray-500">
                🎬 {re.genre} | {re.year}
              </p>

              <p className="text-sm text-gray-600 line-clamp-3">
                {re.plot}
              </p>

              <div className="text-xs text-gray-500 space-y-1">
                <p>👤 {re.actors}</p>
                <p>🎥 {re.director}</p>
                <p>🌍 {re.country}</p>
                <p>🏆 {re.awards}</p>
              </div>
            </div>

          </div>
        </Link>
      ))}
    </div>
  )
}