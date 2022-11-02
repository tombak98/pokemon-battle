import React from "react";
import anime from "animejs/lib/anime.es.js";
import useSound from "use-sound";

const FireBlast = () => {

    anime({
        targets: '.blast1',
        translateX: [
            {value: '-30vw', duration: 500}
        ],
        translateY: [
            {value: '25vh', duration: 500},
            {value: '15vh', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        opacity: [
            {value: 0, delay: 1400}
        ],
        delay: anime.stagger(50, {start:0}),
        easing: 'easeOutCubic'
    })

    anime({
        targets: '.blast2',
        translateX: [
            {value: '-30vw', duration: 500},
            {value: '-40vw', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        translateY: [
            {value: '25vh', duration: 500}
        ],
        opacity: [
            {value: 0, delay: 1400}
        ],
        delay: anime.stagger(50, {start:0}),
        easing: 'easeOutCubic'
    })

    anime({
        targets: '.blast3',
        translateX: [
            {value: '-30vw', duration: 500},
            {value: '-37vw', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        translateY: [
            {value: '25vh', duration: 500},
            {value: '40vh', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        opacity: [
            {value: 0, delay: 1400}
        ],
        delay: anime.stagger(50, {start:0}),
        easing: 'easeOutCubic'
    })

    anime({
        targets: '.blast4',
        translateX: [
            {value: '-30vw', duration: 500},
            {value: '-23vw', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        translateY: [
            {value: '25vh', duration: 500},
            {value: '40vh', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        opacity: [
            {value: 0, delay: 1400}
        ],
        delay: anime.stagger(50, {start:0}),
        easing: 'easeOutCubic'
    })

    anime({
        targets: '.blast5',
        translateX: [
            {value: '-30vw', duration: 500},
            {value: '-20vw', duration: 300, delay: anime.stagger(10, {start:500})}
        ],
        translateY: [
            {value: '25vh', duration: 500},
        ],
        opacity: [
            {value: 0, delay: 1400}
        ],
        delay: anime.stagger(50, {start:0}),
        easing: 'easeOutCubic'
    })

    function fireBallMaker(layer) {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(`${layer}`)
        }
        return arr
    }

    return (
        <>
            {fireBallMaker(1).map((element)=> 
            <>
                <div className={`fire blast-orb blast${element}`}></div>
                <div className={`orange blast-orb blast${element}`}></div>
            </>
            )}
            {fireBallMaker(2).map((element)=> 
            <>
                <div className={`fire blast-orb blast${element}`}></div>
                <div className={`orange blast-orb blast${element}`}></div>
            </>
            )}
            {fireBallMaker(3).map((element)=> 
            <>
                <div className={`fire blast-orb blast${element}`}></div>
                <div className={`orange blast-orb blast${element}`}></div>
            </>
            )}
            {fireBallMaker(4).map((element)=> 
            <>
                <div className={`fire blast-orb blast${element}`}></div>
                <div className={`orange blast-orb blast${element}`}></div>
            </>
            )}
            {fireBallMaker(5).map((element)=> 
            <>
                <div className={`fire blast-orb blast${element}`}></div>
                <div className={`orange blast-orb blast${element}`}></div>
            </>
            )}
        </>
    )
}

export default FireBlast