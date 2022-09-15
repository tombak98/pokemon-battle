import React from "react";
import anime from "animejs/lib/anime.es.js";

const Bite = () => {

    anime({
        targets:"#upper-jaw",
        translateY: "10vh",
        easing: "easeOutCubic",
        duration: 400,
        opacity: [
            {value: 0, delay: 500}
        ]
    })

    anime({
        targets:"#lower-jaw",
        translateY: "-10vh",
        easing: "easeOutCubic",
        duration: 400,
        opacity: [
            {value: 0, delay: 500}
        ]
    })

    return (
        <>
            <div id="upper-jaw">
                <div className="tooth-down"></div>
                <div className="tooth-down"></div>
                <div className="tooth-down"></div>
                <div className="tooth-down"></div>
                <div className="tooth-down"></div>
                <div className="tooth-down"></div>
            </div>
            <div id="lower-jaw">
                <div className="tooth-up"></div>
                <div className="tooth-up"></div>
                <div className="tooth-up"></div>
                <div className="tooth-up"></div>
                <div className="tooth-up"></div>
                <div className="tooth-up"></div>
            </div>
        </>
    )
}

export default Bite