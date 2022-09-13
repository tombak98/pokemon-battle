import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PlayerStats from "./components/PlayerStats";
import EnemyStats from "./components/EnemyStats";
import PlayerActions from "./components/PlayerActions";
import PlayerMoves from "./components/PlayerMoves";
import { _playerTakeDamage } from "./store/player";


function App(){

    const [toggleOptions, setToggleOptions] = React.useState(true)
    const [statusText, setStatusText] = React.useState("Charizard wants to Battle!")
    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)
    const dispatch = useDispatch()

    function enemyAttacks() {
        let randNum = Math.floor(Math.random()*4)
        dispatch(_playerTakeDamage(enemy,randNum))
        setStatusText(`${enemy.name} used ${enemy.moves[randNum].name}`)
    }

    function changeView() {
        setToggleOptions(!toggleOptions)
    }

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
                <p className="status-text">{statusText}</p>
            </div>
            <div className="player-options">
                {toggleOptions ? <PlayerActions changeView={changeView}/>:<PlayerMoves setStatusText={setStatusText} changeView={changeView}/>}
            </div>
        </div>
        </>

    )
}

export default App;