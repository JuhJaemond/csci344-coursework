import React, { useState, useEffect } from "react";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchSuggestions() {
      try {
        const res = await fetch("/api/suggestions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch suggestions");
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSuggestions();
  }, [token]);

  return (
    <section>
      <h2 className="font-bold mb-3">Suggestions for you!!!!</h2>
      {suggestions.length === 0 && <p>It's okay, no one's good enough to be suggested anyway.</p>}
      {suggestions.map((user) => (
        <Suggestion key={user.id} postData={user} token={token} />
      ))}
    </section>
  );
}
