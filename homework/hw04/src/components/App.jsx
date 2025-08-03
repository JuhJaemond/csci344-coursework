import React from "react";

// custom components:
import NavBar from "./NavBar";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Stories from "./Stories";
import Posts from "./Posts";

export default function App({ username, token }) {
    return (
        <>
            {/* Navbar (already implemented for you) */}
            <NavBar username={username} />

            {/* Page Content */}
            <div className="flex flex-col md:flex-row mt-[100px] px-6 md:px-0">
                {/* Main Panel */}
                <main className="md:w-[60vw] md:ml-[5vw] lg:ml-[10vw]">
                    <Stories token={token} />
                    <Posts token={token} />
                </main>

                {/* Right Panel */}
                <aside
                    className="hidden md:block md:w-[25vw] max-w-[300px] ml-auto pr-[5vw] lg:pr-[10vw]"
                    role="complementary"
                    aria-label="Sidebar with profile and suggestions"
                >
                    <Profile token={token} />
                    <Suggestions token={token} />
                </aside>
            </div>
        </>
    );
}
