import React from "react";
import anime from "animejs/lib/anime.es.js";
import HydroPump from "./sub-animations/HydroPump";

const Animation = (props) => {
    
    if (props.move === "Hydro Pump") {
        return (
            <HydroPump/>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Animation