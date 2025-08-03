import React, { useState, useEffect } from "react";

export default function Stories({ token }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await fetch("/api/stories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch stories");
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchStories();
  }, [token]);

  return (
    <header className="flex gap-6 bg-white border p-2 overflow-x-auto mb-6">
      {stories.length === 0 && <p>Uh Oh, no stories available :(</p>}
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-1">
          <img
            src={story.user.thumb_url}
            alt={`${story.user.username}'s story`}
            className="w-14 h-14 rounded-full border-2 border-red-500 object-cover"
          />
          <p className="text-xs text-center">{story.user.username}</p>
        </div>
      ))}
    </header>
  );
}
