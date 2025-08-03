import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function BookmarkButton({ token, bookmarkId, postId }) {
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark() {
        const sendData = { post_id: postId };
        const responseData = await postDataToServer(
            token,
            "/api/bookmarks/",
            sendData
        );
        if (responseData?.id) {
            setStateBookmarkId(responseData.id);
        }
    }

    async function deleteBookmark() {
        const responseData = await deleteDataFromServer(
            token,
            `/api/bookmarks/${stateBookmarkId}`
        );
        if (responseData) {
            setStateBookmarkId(null);
        }
    }

    return stateBookmarkId ? (
        <button
            aria-label="Unbookmark this post"
            aria-pressed="true"
            role="switch"
            onClick={deleteBookmark}
        >
            <i className="fas fa-bookmark"></i>
        </button>
    ) : (
        <button
            aria-label="Bookmark this post"
            aria-pressed="false"
            role="switch"
            onClick={createBookmark}
        >
            <i className="far fa-bookmark"></i>
        </button>
    );
}
