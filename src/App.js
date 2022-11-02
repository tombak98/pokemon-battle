import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PlayerStats from "./components/PlayerStats";
import EnemyStats from "./components/EnemyStats";
import PlayerActions from "./components/PlayerActions";
import PlayerMoves from "./components/PlayerMoves";
import Animation from "./components/Animation";
import { _playerTakeDamage, _playerBoost, _playerPotion } from "./store/player";
import TypedText from "./components/TypedText";
import { _enemyTakeDamage, _enemyBoost } from "./store/enemy";
import anime from "animejs/lib/anime.es.js";
import useSound from "use-sound";
import PlayerItems from "./components/PlayerItems";

function App(){

    // state management
    const [toggleOptions, setToggleOptions] = React.useState('menu')
    const [statusText, setStatusText] = React.useState("")
    const [revealedLetters, setRevealedLetters] = React.useState(0)
    const [waiting, setWaiting] = React.useState(false)
    const [battleState, setBattle] = React.useState(1)
    const [animation, setAnimation] = React.useState("testing mode")
    const [audio, setAudio] = React.useState('https://vgmsite.com/soundtracks/pokemon-firered-leafgreen-enhanced-soundtrack/iueoobedzt/11%20Trainer%20Battle%21.mp3')
    const [playingMusic, setPlayingMusic] = React.useState(false)
    const [potions, setPotions] = React.useState([1,1,1])
    
    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)
    const dispatch = useDispatch()

    // animations
    const enemySprite = document.getElementsByClassName('enemy-sprite')
    const playerSprite = document.getElementsByClassName('player-sprite')
    const playerStatBox = document.getElementsByClassName('player')
    const enemyStatBox = document.getElementsByClassName('enemy')

    //sound effects
    const [battleMusic, {stop}] = useSound('/sounds/battle.mp3', {volume: 0.1})
    const [play1] = useSound('/sounds/powerup.mp3', {volume: 0.50})
    const [play2] = useSound('/sounds/hydropump.mp3', {volume: 0.50})
    const [play3] = useSound('/sounds/bite.mp3', {volume: 0.50})
    const [play4] = useSound('/sounds/blip.mp3', {volume: 0.50})
    const [play5] = useSound('/sounds/bubble.mp3', {volume: 0.50})
    const [play6] = useSound('/sounds/death.mp3', {volume: 0.50})
    const [play7] = useSound('/sounds/fireblast.mp3', {volume: 0.50})
    const [play8] = useSound('/sounds/headbutt.mp3', {volume: 0.50})
    const [play9] = useSound('/sounds/otherbite.mp3', {volume: 0.50})
    const [play10] = useSound('/sounds/potion.mp3', {volume: 0.50})
    const [play11] = useSound('/sounds/powerup.mp3', {volume: 0.50})
    const [play12] = useSound('/sounds/victory.mp3', {volume: 0.1})


    React.useEffect(async()=>{
        anime({
            targets: ".intro-right",
            translateX: [
                {value: '100vw', duration: 5000}
            ],
            easing: "linear"
        })
        anime({
            targets: ".intro-left",
            translateX: [
                {value: '-100vw', duration: 5000}
            ],
            easing: "linear"
        })
        anime({
            targets: [enemySprite],
            translateX: ['160vw',0],
            duration: 8000,
            easing: "linear"
        })
        anime({
            targets: [playerSprite],
            translateX: ['-160vw',0],
            duration: 8000,
            easing: "linear"
        })
        anime({
            targets: [playerStatBox],
            translateX: ['120vw',0],
            duration: 2000,
            delay: 6000,
            easing: "linear"
        })
        anime({
            targets: [enemyStatBox],
            translateX: ['-120vw',0],
            duration: 2000,
            delay: 6000,
            easing: "linear"
        })
        await wait(8000)
        setStatusText("Charizard wants to Battle!")
        resetReveal()
    },[])

    // helper functions

    function changeView(view) {
        setToggleOptions(view)
    }

    function updateReveal() {
        setRevealedLetters(l => l+1)
    }

    function resetReveal() {
        setRevealedLetters(0)
    }

    function wait(ms) {
        setWaiting(true)
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            setWaiting(false)
            resolve(ms)
          }, ms )
        })
      }
      
    function soundEffect(moveName) {
        if (moveName === "Hydro Pump") {
            play2()
        } else if (moveName === "Bite") {
            play3()
        } else if (moveName === "Water Pulse") {
            play5()
            setTimeout(()=>{
                play5()
            }, 1600)
            setTimeout(()=>{
                play5()
            }, 1700)
            setTimeout(()=>{
                play5()
            }, 1900)
            setTimeout(()=>{
                play5()
            }, 2000)
        } else if (moveName === "Iron Defense") {
            play1()
        } else if (moveName === "Fire Blast") {
            play7()
        } else if (moveName === "Headbutt") {
            setTimeout(()=>{
                play8()
            }, 800)
        } else if (moveName === "Scratch") {
            play3()
        } else if (moveName === "Swords Dance") {
            play1()
        }
    }

    // battle related

    function enemyAttacks() {
        let randNum = Math.floor(Math.random()*4)
        if (enemy.moves[randNum].cat === "boost") {
            dispatch(_enemyBoost(enemy.moves[randNum].stat))
        } else {
            dispatch(_playerTakeDamage(enemy,randNum))
        }
        setStatusText(`${enemy.name} used ${enemy.moves[randNum].name}!`)
        soundEffect(`${enemy.moves[randNum].name}`)
        resetReveal()
        setAnimation(enemy.moves[randNum].name)
    }

    async function battleSequence(event) {
        event.preventDefault()
        let moveNum = event.target.getAttribute('index')
        if (player.moves[moveNum].cat === "boost") {
            dispatch(_playerBoost(player.moves[moveNum].stat))
        } else {
            dispatch(_enemyTakeDamage(player,moveNum))
        }
        changeView('menu')
        setStatusText(`${player.name} used ${player.moves[moveNum].name}!`)
        resetReveal()
        soundEffect(`${player.moves[moveNum].name}`)
        setAnimation(`${player.moves[moveNum].name}`)
        await wait(4000)
        setAnimation("")
        setBattle(2)
    }

    async function potionSequence(event) {
        event.preventDefault()
        // insert here
        dispatch(_playerPotion(parseInt(event.target.getAttribute('value'))))
        //
        changeView('menu')
        let potionName = ''
        if (event.target.getAttribute('value') === '20') {
            potionName= ' Potion'
        } else if (event.target.getAttribute('value') === '50') {
            potionName = 'Super Potion'
        } else {
            potionName = 'Hyper Potion'
        }
        setStatusText(`${player.name} used a ${potionName}!`)
        resetReveal()
        play10()
        await wait(4000)
        setBattle(2)
    }

    React.useEffect(()=>{
        async function continueBattle() {
            if (battleState === 2) {
                if (enemy.stats.health === 0) {
                    setStatusText(`${enemy.name} fainted! You win!`)
                    resetReveal()
                    anime({
                        targets: enemySprite,
                        translateY: '10vh',
                        opacity: 0,
                        easing: "linear",
                        duration: 300,
                    })
                    stop()
                    play12()
                } else {
                    enemyAttacks()
                    await wait(4000)
                    setAnimation("")
                    setBattle(3)
                    setStatusText(`${player.name} is waiting for your orders!`)
                    resetReveal()
                }
            } else if (battleState === 3) {
                if (player.stats.health == 0) {
                    setStatusText(`${player.name} fained! You whited out!`)
                    resetReveal()
                    anime({
                        targets: playerSprite,
                        translateY: '10vh',
                        opacity: 0,
                        easing: "linear",
                        duration: 300,
                    })
                } else {
                    setBattle(1)
                }
            }
        }
        continueBattle()
    },[battleState])

    return(
        <>
        <div className="intro-left one"></div>
        <div className="intro-right two"></div>
        <div className="intro-left three"></div>
        <div className="intro-right four"></div>
        <div id="battle-scene">
            <PlayerStats/>
            <EnemyStats/>
            <img className="player-sprite" src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif" alt="Blastoise"></img>
            <img className="enemy-sprite" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard"></img>
            <div className="battle-animation">
                {animation ? <Animation move={animation}/> : <div></div>}
            </div>
        </div>
        <div id="text-section">
            <div style={playingMusic ? {display: 'none'} : {display: 'block'}}>
                <button onClick={()=>{
                    battleMusic()
                    setPlayingMusic(true)
                }}>Play Music</button>
            </div>
            <div className="status-box">
                <TypedText updateReveal={updateReveal} revealedLetters={revealedLetters} children={statusText} delay={30}/>
            </div>
            <div className="player-options">
                {waiting ? <div className="option">Waiting...</div> : 
                (toggleOptions === 'menu' ? <PlayerActions changeView={changeView} setStatusText={setStatusText} resetReveal={resetReveal}/>
                : (toggleOptions === 'attacks' ? <PlayerMoves resetReveal={resetReveal} setStatusText={setStatusText} 
                changeView={changeView} wait={wait} enemyAttacks={enemyAttacks}
                battleSequence={battleSequence}/> : 
                (toggleOptions === 'bag' ? <PlayerItems 
                setPotions={setPotions} potions={potions} 
                potionSequence={potionSequence} changeView={changeView}
                setStatusText={setStatusText} resetReveal={resetReveal}/> : <></>)))
                }
            </div>
        </div>
        </>

    )
}

export default App;