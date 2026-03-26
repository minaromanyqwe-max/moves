"use client"; // مهم عشان تستخدم useState و useEffect

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Product from "../api/product";

export default function IMG() {
  const [data, setData] = useState([]);
  const [mood, setMood] = useState("white"); // default

  // تجيب البيانات
  useEffect(() => {
    async function fetchData() {
      const res = await Product();
      setData(res.data);
    }
    fetchData();
  }, []);

  // تجيب الـ mood من localStorage
  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) setMood(savedMood);
  }, []);

  // تغير بين light و dark
  const toggleMood = () => {
    const newMood = mood === "white" ? "dark" : "white";
    setMood(newMood);
    localStorage.setItem("mood", newMood);
  };

  return (
    <div className={mood === "dark" ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <button
        onClick={toggleMood}
        className="p-2 m-4 border rounded"
      >
        Toggle {mood === "dark" ? "Light" : "Dark"} Mode
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((re) => (
          <Link key={re.id} href={`/product/${re.id}`}>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
              <img
                src={re.poster}
                alt={re.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold">{re.title}</h2>
                <p className="text-sm text-gray-500">
                  🎬 {re.genre} | {re.year}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">{re.plot}</p>
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
    </div>
  );
}