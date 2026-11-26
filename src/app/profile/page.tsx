"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    county: "Nairobi",
    town: "",
    bio: "",
    interests: "",
    tribe: "",
    religion: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile saved!");
  };

  return (
    <div className="min-h-screen p-6 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-rose-600">← Home</Link>
          <h1 className="text-2xl font-bold text-rose-600">My Profile</h1>
          <div></div>
        </div>

        <div className="space-y-4">
          <input name="name" placeholder="Name" value={profile.name} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <input name="age" type="number" placeholder="Age" value={profile.age} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <select name="county" value={profile.county} onChange={handleChange} className="w-full p-3 border rounded-xl">
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Kiambu</option>
            <option>Nakuru</option>
            <option>Uasin Gishu</option>
            <option>Other</option>
          </select>
          <input name="town" placeholder="Town / Estate" value={profile.town} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <textarea name="bio" placeholder="Bio" value={profile.bio} onChange={handleChange} rows={3} className="w-full p-3 border rounded-xl" />
          <input name="interests" placeholder="Interests (comma separated)" value={profile.interests} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <input name="tribe" placeholder="Tribe (optional)" value={profile.tribe} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <input name="religion" placeholder="Religion (optional)" value={profile.religion} onChange={handleChange} className="w-full p-3 border rounded-xl" />

          <button onClick={handleSave} className="w-full bg-rose-500 text-white font-semibold py-3 rounded-full hover:bg-rose-600">
            Save Profile
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Data stored locally in browser (prototype)
        </p>
      </div>
    </div>
  );
}
