import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      {/* Container for Spinner */}
      <div className="relative w-24 h-24 mb-6">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        {/* Spinner rings */}
        <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-2 border-blue-400 border-b-transparent rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Elegant Text */}
      <div className="space-y-4 text-center px-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-pulse">
          Loading Cinematic Experience
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">
          One moment, preparing the data...
        </p>
      </div>

      {/* Simple Progress Bar using animate-pulse */}
      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-full"></div>
      </div>
    </div>
  )
}