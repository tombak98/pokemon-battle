import React from "react";
import anime from "animejs/lib/anime.es.js";

const WaterPulse = () => {

    anime({
        targets: [".pulse1", '.pulse2', '.pulse3', '.pulse4'],
        translateX: [
            {value: '20vw', duration: 700}
        ],
        translateY: [
            {value: '-10vh', duration: 700}
        ],
        scale: [
            {value: 1.5, duration: 200, delay: anime.stagger(100)},
            {value: 1, duration: 200, delay: anime.stagger(100)},
            {value: 8, duration: 700, delay: 700}
        ],
        opacity: [
            {value: 0, duration: 2000, delay: 1000}
        ],
        easing: "easeOutCubic"
    })

    return (
        <div className="water-pulse">
            <div className="pulse1 water"></div>
            <div className="pulse2 water"></div>
            <div className="pulse3 water"></div>
            <div className="pulse4 water"></div>
        </div>
    )
}

export default WaterPulse