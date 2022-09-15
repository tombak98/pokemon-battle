import React from "react";
import anime from "animejs/lib/anime.es.js";

const Headbutt = () => {

    const enemy = document.getElementsByClassName('enemy-sprite')

    anime({
        targets: enemy,
        translateX: [
            {value: '-20vw', duration: 500, delay:300},
            {value: 0, duration: 500, delay: 800}
        ],
        translateY: [
            {value: '20vh', duration: 500, delay:300},
            {value: 0 , duration: 500, delay: 800}
        ],
        rotate: [
            {value: -45, duration: 300},
            {value: 0, duration: 300, delay: 1300}
        ],
        scale: [
            {value: 1.25, duration:500, delay:300},
            {value: 1, duration: 500, delay: 800}
        ],
        easing: 'easeOutCubic'
    })

    return (
        <></>
    )
}

export default Headbutt