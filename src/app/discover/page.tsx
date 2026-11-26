"use client";

import { useState, useEffect } from "react";
import { mockUsers, User } from "@/lib/mockUsers";
import Link from "next/link";

export default function DiscoverPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("matches");
    if (saved) setMatches(JSON.parse(saved));
  }, []);

  const currentUser = users[currentIndex];

  const handleLike = () => {
    if (!currentUser) return;
    const newMatches = [...matches, currentUser.id];
    setMatches(newMatches);
    localStorage.setItem("matches", JSON.stringify(newMatches));
    nextUser();
  };

  const handlePass = () => {
    nextUser();
  };

  const nextUser = () => {
    setCurrentIndex((prev) => (prev + 1) % users.length);
  };

  if (!currentUser) {
    return <div className="p-8 text-center">No more users nearby.</div>;
  }

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="text-rose-600 font-semibold">← Home</Link>
          <h1 className="text-2xl font-bold text-rose-600">Discover</h1>
          <Link href="/matches" className="text-rose-600 font-semibold">Matches ({matches.length})</Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={currentUser.photo}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h2 className="text-3xl font-bold">{currentUser.name}, {currentUser.age}</h2>
              <p className="text-sm opacity-90">{currentUser.town}, {currentUser.county}</p>
              {currentUser.tribe && <p className="text-xs opacity-75">{currentUser.tribe}</p>}
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-700 mb-4">{currentUser.bio}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {currentUser.interests.map((interest) => (
                <span key={interest} className="bg-rose-100 text-rose-700 text-xs px-3 py-1 rounded-full">
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-8">
              <button
                onClick={handlePass}
                className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-3xl transition"
              >
                ✕
              </button>
              <button
                onClick={handleLike}
                className="w-16 h-16 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center text-3xl text-white transition"
              >
                ♥
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Location-based matching prototype • Kenya
        </p>
      </div>
    </div>
  );
}
