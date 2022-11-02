import React from "react";
import anime from "animejs/lib/anime.es.js";
import HydroPump from "./sub-animations/HydroPump";
import Bite from "./sub-animations/Bite";
import WaterPulse from "./sub-animations/WaterPulse";
import IronDefense from "./sub-animations/IronDefense";
import FireBlast from "./sub-animations/FireBlast";
import Headbutt from "./sub-animations/Headbutt";
import Scratch from "./sub-animations/Scratch";
import SwordsDance from "./sub-animations/SwordsDance";
import useSound from "use-sound";

const Animation = (props) => {

    if (props.move === "Hydro Pump") {
        return <HydroPump/>
    } else if (props.move === "Bite") {
        return <Bite/>
    } else if (props.move === "Water Pulse") {
        return <WaterPulse/>
    } else if (props.move === "Iron Defense") {
        return <IronDefense/>
    } else if (props.move === "Fire Blast") {
        return <FireBlast/>
    } else if (props.move === "Headbutt") {
        return <Headbutt/>
    } else if (props.move === "Slash") {
        return <Scratch/>
    } else if (props.move === "Swords Dance") {
        return <SwordsDance/>
    } else {
        return (
            <div></div>
        )
    }
}

export default Animation