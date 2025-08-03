import React, { useState } from "react";
import { Image, Drawer, Button, Carousel, Collapse } from 'antd';
import NavBar from "./NavBar";
import { UnorderedListOutlined, SmallDashOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function App() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    return (
        <>
            <NavBar />

            {/* drawer */}
            <Drawer
                title="Navigation"
                placement="right"
                onClose={closeDrawer}
                open={drawerVisible}
            >
                <p>Home</p>
                <p>Gallery</p>
                <p>About</p>
                <p>Contact</p>
            </Drawer>

            <main className="min-h-screen max-w-[1000px] mt-12 mx-auto">
                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Photo Gallery!
                </h2>

                {/* carousel n drawer */}
                <div className="relative mb-8">
                    <Carousel autoplay>
                        <div>
                            <Image src="https://picsum.photos/800/400?id=101" preview={false} />
                        </div>
                        <div>
                            <Image src="https://picsum.photos/800/400?id=102" preview={false} />
                        </div>
                        <div>
                            <Image src="https://picsum.photos/800/400?id=103" preview={false} />
                        </div>
                    </Carousel>

                    <Button
                        type="primary"
                        className="absolute top-4 right-4 z-10"
                        onClick={drawerVisible ? closeDrawer : showDrawer}
                        icon={drawerVisible ? <SmallDashOutlined /> : <UnorderedListOutlined />}
                        aria-label={drawerVisible ? "Close menu" : "Open menu"}
                    />
                </div>

                {/* img grid */}
                <div className="flex flex-wrap gap-4 content-start">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Image
                            key={i}
                            src={`https://picsum.photos/600/600?id=${i + 1}`}
                            width={200}
                        />
                    ))}
                </div>

                {/* collapse */}
                <div className="mt-12">
                    <Collapse>
                        <Panel header="What's this gallery doing here?!?" key="1">
                            <p>This is my gallery display! I could use this for art portfolios</p>
                        </Panel>
                        <Panel header="What's with these weird photos" key="2">
                            <p>Sorry fellas, they're randomly generated :(</p>
                        </Panel>
                        <Panel header="Can I add my own photos?" key="3">
                            <p>Nope, I have no idea how to do all that</p>
                        </Panel>
                    </Collapse>
                </div>
            </main>
        </>
    );
}
