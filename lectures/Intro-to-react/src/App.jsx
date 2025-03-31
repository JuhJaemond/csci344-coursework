import React from "react";
import { Welcome } from "./Welcome.jsx";
import "./App.css";

 export default function App() {

     return (
         <>
             <header>
                 <h1>My First App</h1>
             </header>
             <main>
                 <Welcome 
                name="Jaemond"
                imgUrl="https://picsum.photos/200?a=b" 
                />
                <Welcome 
                name="Jaemond"
                imgUrl="https://picsum.photos/200?a=d" 
                />
                <Welcome 
                name="Jaemond"
                imgUrl="https://picsum.photos/200?a=c" 
                />
                <p>Hello React!</p>
                <p>god knows if this'll work</p>
             </main>
         </>
     );
 }

//  remember to do "npm run dev" in the terminal!