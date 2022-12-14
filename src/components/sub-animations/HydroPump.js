import React from "react";
import anime from "animejs/lib/anime.es.js";
import useSound from "use-sound";

const HydroPump = () => {

    anime({
        targets: ".hydro-ball-1",
        translateY: `-20vh`,
        translateX: `45vh`,
        duration: 500,
        opacity: [
            {value: 0, delay: 2000}
        ],
        easing: `easeOutCubic`,
        delay: anime.stagger(50, {start: 0}),
    })

    anime({
        targets: ".hydro-ball-2",
        translateY: `-20vh`,
        translateX: `45vh`,
        duration: 500,
        easing: `easeOutCubic`,
        opacity: [
            {value: 0, delay: 2000}
        ],
        delay: anime.stagger(50, {start: 0}),
    })

    function hydroBallMaker(layer) {
        let arr = []
        for (let i = 0; i < 15; i++) {
            arr.push(`${layer}`)
        }
        return arr
    }

    return (
        <>
            <div id="hydro-pump">
                {hydroBallMaker(1).map((element) =>
                <>
                    <div className={`hydro-ball-${element} water layer${element}`}></div>
                    <div className={`hydro-ball-${element} flying layer${element}`}></div>
                </>
                )}
                {hydroBallMaker(2).map((element) =>
                <>
                    <div className={`hydro-ball-${element} water layer${element}`}></div>
                    <div className={`hydro-ball-${element} flying layer${element}`}></div>
                </>
                )}
            </div>
        </>
        
    )
}

export default HydroPump