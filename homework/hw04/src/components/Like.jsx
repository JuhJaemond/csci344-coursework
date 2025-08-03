import React, { useState } from "react";

export default function LikeButton({ token, likeId, postId }) {
    const [stateLikeId, setStateLikeId] = useState(likeId);

    async function handleClick() {
        if (stateLikeId) {
            // Unlike
            const response = await fetch(`/api/posts/${postId}/likes/${stateLikeId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setStateLikeId(null);
            }
        } else {
            // Like
            const response = await fetch(`/api/posts/${postId}/likes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setStateLikeId(data.id);
            }
        }
    }

    return (
        <button
            onClick={handleClick}
            aria-label={stateLikeId ? "Unlike this post" : "Like this post"}
            aria-pressed={!!stateLikeId}
            role="switch"
        >
            <i className={stateLikeId ? "fas fa-heart text-red-700" : "far fa-heart"}></i>
        </button>
    );
}
