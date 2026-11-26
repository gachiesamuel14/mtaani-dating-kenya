"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [locationStatus, setLocationStatus] = useState<"idle" | "requesting" | "granted" | "denied">("idle");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const requestLocation = () => {
    setLocationStatus("requesting");
    if (!navigator.geolocation) {
      setLocationStatus("denied");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationStatus("granted");
        localStorage.setItem("userLocation", JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }));
      },
      () => setLocationStatus("denied")
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">❤️</div>
        <h1 className="text-4xl font-bold text-rose-600 mb-2">Mtaani</h1>
        <p className="text-gray-600 mb-6">
          Location-based dating for Kenya.<br />
          Find your match in Nairobi, Mombasa, Kisumu & beyond.
        </p>

        <div className="space-y-4">
          <button
            onClick={requestLocation}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            {locationStatus === "requesting" ? "Getting location..." :
             locationStatus === "granted" ? "Location enabled ✓" :
             "Enable Location Matching"}
          </button>

          {locationStatus === "granted" && coords && (
            <p className="text-sm text-green-600">
              Nearby matching ready! Lat: {coords.lat.toFixed(2)}, Lng: {coords.lng.toFixed(2)}
            </p>
          )}

          {locationStatus === "denied" && (
            <p className="text-sm text-red-500">Location denied. You can still browse by county.</p>
          )}

          <Link
            href="/discover"
            className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Start Discovering
          </Link>

          <div className="flex gap-4 justify-center pt-4">
            <Link href="/profile" className="text-rose-600 hover:underline">My Profile</Link>
            <Link href="/matches" className="text-rose-600 hover:underline">Matches</Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Prototype • Kenya-focused location matchmaking
        </p>
      </div>
    </div>
  );
}
