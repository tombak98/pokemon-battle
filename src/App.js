import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PlayerStats from "./components/PlayerStats";
import EnemyStats from "./components/EnemyStats";


function App(){

    return(
        <>
        <div id="battle-scene">
            <PlayerStats/>
            <EnemyStats/>
            <img className="player-sprite" src="https://img.pokemondb.net/sprites/black-white/back-normal/blastoise.png" alt="Blastoise"></img>
            <img className="enemy-sprite" src="https://img.pokemondb.net/sprites/black-white/normal/charizard.png" alt="Charizard"></img>
            <div className="battle-animation">Animation goes here later</div>
        </div>
        <div id="text-section">
            <div className="status-box">
                <p className="status-text">Charizard wants to battle!</p>
            </div>
            <div className="player-options">
                <div className="option red">Fight</div>
                <div className="option yellow">Bag</div>
                <div className="option green">Pokemon</div>
                <div className="option blue">Run</div>
            </div>
        </div>
        </>

    )
}

export default App;