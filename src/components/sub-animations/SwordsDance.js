import React from "react";
import anime from "animejs/lib/anime.es.js";

const SwordsDance = () => {
    
    anime({
        targets: ".sword",
        rotate: [
            {value: 720, duration: 400}
        ],
        translateY: [
            {value: '-10vh', duration: 200, delay: 400}
        ],
        opacity: [
            {value: 0, delay: 600}
        ],
        easing: "linear"
    })
    
    return (
        <>
            <div className="sword sword1"></div>
            <div className="sword sword2"></div>
            <div className="sword sword3"></div>
        </>
    )
}

export default SwordsDance