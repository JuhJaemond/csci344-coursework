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
                console.error("Error fetching suggestions:", err);
            }
        }

        fetchSuggestions();
    }, [token]);

    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            {suggestions.map((user) => (
                <Suggestion key={user.id} postData={user} token={token} />
            ))}
        </div>
    );
}
