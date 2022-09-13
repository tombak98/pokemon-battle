import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PlayerStats from "./components/PlayerStats";
import EnemyStats from "./components/EnemyStats";
import PlayerActions from "./components/PlayerActions";
import PlayerMoves from "./components/PlayerMoves";
import { _playerTakeDamage, _playerBoost } from "./store/player";
import TypedText from "./components/TypedText";
import { _enemyTakeDamage, _enemyBoost } from "./store/enemy";


function App(){

    const [toggleOptions, setToggleOptions] = React.useState(true)
    const [statusText, setStatusText] = React.useState("Charizard wants to Battle!")
    const [revealedLetters, setRevealedLetters] = React.useState(0)
    const [waiting, setWaiting] = React.useState(false)
    const [battleState, setBattle] = React.useState(1)
    
    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)
    const dispatch = useDispatch()

    function enemyAttacks() {
        let randNum = Math.floor(Math.random()*4)
        if (enemy.moves[randNum].cat === "boost") {
            dispatch(_enemyBoost(enemy.moves[randNum].stat))
        } else {
            dispatch(_playerTakeDamage(enemy,randNum))
        }
        setStatusText(`${enemy.name} used ${enemy.moves[randNum].name}!`)
        resetReveal()
    }

    function changeView() {
        setToggleOptions(!toggleOptions)
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

    async function battleSequence(event) {
        event.preventDefault()
        let moveNum = event.target.getAttribute('index')
        if (player.moves[moveNum].cat === "boost") {
            dispatch(_playerBoost(player.moves[moveNum].stat))
        } else {
            dispatch(_enemyTakeDamage(player,moveNum))
        }
        changeView()
        setStatusText(`${player.name} used ${player.moves[moveNum].name}!`)
        resetReveal()
        await wait(3000)
        setBattle(2)
    }

    React.useEffect(()=>{
        async function continueBattle() {
            if (battleState === 2) {
                if (enemy.stats.health === 0) {
                    setStatusText(`${enemy.name} fainted! You win!`)
                    resetReveal()
                } else {
                    enemyAttacks()
                    await wait(3000)
                    setBattle(3)
                    setStatusText(`${player.name} is waiting for your orders!`)
                    resetReveal()
                }
            } else if (battleState === 3) {
                if (player.stats.health == 0) {
                    setStatusText(`${player.name} fained! You whited out!`)
                    resetReveal()
                } else {
                    setBattle(1)
                }
            }
        }
        continueBattle()
    },[battleState])

    return(
        <>
        <div id="battle-scene">
            <PlayerStats/>
            <EnemyStats/>
            <img className="player-sprite" src="https://img.pokemondb.net/sprites/black-white/back-normal/blastoise.png" alt="Blastoise"></img>
            <img onClick={enemyAttacks} className="enemy-sprite" src="https://img.pokemondb.net/sprites/black-white/normal/charizard.png" alt="Charizard"></img>
            <div className="battle-animation">Animation goes here later</div>
        </div>
        <div id="text-section">
            <div className="status-box">
                <TypedText updateReveal={updateReveal} revealedLetters={revealedLetters} children={statusText} delay={20}/>
            </div>
            <div className="player-options">
                {waiting ? <div className="option">Waiting...</div> : 
                (toggleOptions ? <PlayerActions changeView={changeView}/>
                :<PlayerMoves resetReveal={resetReveal} setStatusText={setStatusText} 
                changeView={changeView} wait={wait} enemyAttacks={enemyAttacks}
                battleSequence={battleSequence}/>)
                }
            </div>
        </div>
        </>

    )
}

export default App;