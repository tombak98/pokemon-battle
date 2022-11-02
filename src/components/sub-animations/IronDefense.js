import React from "react";
import anime from "animejs/lib/anime.es.js";
import useSound from "use-sound";

const IronDefense = () => {

    anime({
        targets: ".defense",
        opacity: [
            {value: 1, duration: 1000},
            {value: 0, delay: 700}
        ],
        scale: [
            {value: 2, duration: 1000}
        ],
        duration: 1500,
        easing: "easeOutCubic"
    })


    return (
        <div className="defense steel"></div>
    )
}

export default IronDefense