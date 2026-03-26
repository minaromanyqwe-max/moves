import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mb-6"></div>
      
      {/* Text */}
      <h1 className="text-2xl font-semibold text-gray-700 animate-pulse">
        Loading...
      </h1>

      {/* Optional subtitle */}
      <p className="text-gray-500 mt-2">
        Please wait while we fetch your data
      </p>
    </div>
  )
}