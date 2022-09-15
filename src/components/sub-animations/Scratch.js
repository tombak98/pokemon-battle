import React from "react";
import anime from "animejs/lib/anime.es.js";

const Scratch = () => {

    anime({
        targets: '.scratch',
        rotate: [
            {value: 45, duration: 10}
        ],
        translateX: [
            {value: '10vw', duration: 800}
        ],
        translateX: [
            {value: '10vw', duration: 800}
        ],
        opacity: [
            {value: 1, duration: 200},
            {value: 0, duration: 200, delay: 400}
        ],
        easing: 'easeOutCubic'
    })

    return (
        <>
            <div className="scratch rect1"></div>
            <div className="scratch rect2"></div>
            <div className="scratch rect3"></div>
        </>
    )

}

export default Scratch