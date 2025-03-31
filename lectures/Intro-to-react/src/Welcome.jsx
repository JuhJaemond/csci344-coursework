import React, {useState} from "react";
import "./Welcome.css";

export function Welcome({name, imgUrl}) {

    // state var. go at the top
    const [style, setStyle] = useState("card"); // pass in initial value
    const [times, setTimes] = useState(0);

    function toggleClass() {
        console.log("Change the card class!")
        if (style === "card") {
            setStyle("active-card");
        } else {
            setStyle("card");
        }
    } 

    function addOne(ev) {
        setTimes(times + 1);
        ev.stopPropagation();
    }

    return (
        <section className={style} onClick={toggleClass}> 
        <h2>Hello, {name}</h2>
        <img src={imgUrl} />
        <button onClick={addOne}>This has been clicked {times} times.</button>
    </section>
    );
}


// link to homepage?
// run a different command in in terminal > 
// add 1 more line to package.json
// "dev": "vite dev"
// npm run build in terminal
// creates a new folder (dist) and created a new html folder 
// with everything compacted and reformatted into javascript