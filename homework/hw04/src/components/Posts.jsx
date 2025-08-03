import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Post from "./Post";

export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getDataFromServer(token, "/api/posts");
                console.log("Fetched posts data:", data);
                    // this took FOREVER TO FIX >:/
                setPosts(Array.isArray(data.posts) ? data.posts : []);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setPosts([]);
            }
        }
        fetchPosts();
    }, [token]);

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} token={token} postData={post} />
            ))}
        </div>
    );
}
