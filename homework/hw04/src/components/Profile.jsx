import React, { useState, useEffect } from "react";

export default function Profile({ token }) {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setUserProfile(data);
      } catch (err) {
        console.error(err);
        setUserProfile(null);
      }
    }
    fetchProfile();
  }, [token]);

  if (!userProfile) {
    return <p>Profile data is not available :( </p>;
  }

  return (
    <header className="flex gap-4 items-center p-4 border rounded bg-white">
      <img
        src={userProfile.image_url}
        alt={`${userProfile.username}'s avatar`}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-bold">{userProfile.username}</p>
        <p className="text-sm text-gray-600">{userProfile.full_name}</p>
      </div>
    </header>
  );
}
