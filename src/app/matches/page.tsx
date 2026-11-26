"use client";

import { useState, useEffect } from "react";
import { mockUsers } from "@/lib/mockUsers";
import Link from "next/link";

export default function MatchesPage() {
  const [matchedUsers, setMatchedUsers] = useState<typeof mockUsers>([]);

  useEffect(() => {
    const saved = localStorage.getItem("matches");
    if (saved) {
      const ids: string[] = JSON.parse(saved);
      const matched = mockUsers.filter((u) => ids.includes(u.id));
      setMatchedUsers(matched);
    }
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-rose-600">← Home</Link>
          <h1 className="text-2xl font-bold text-rose-600">Matches</h1>
          <Link href="/discover" className="text-rose-600">Discover</Link>
        </div>

        {matchedUsers.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No matches yet.</p>
            <p className="text-sm mt-2">Start liking people in Discover!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {matchedUsers.map((user) => (
              <div key={user.id} className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
                <img src={user.photo} alt={user.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{user.name}, {user.age}</h3>
                  <p className="text-sm text-gray-600">{user.town}, {user.county}</p>
                </div>
                <button className="text-rose-500 text-sm font-medium">Chat</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
