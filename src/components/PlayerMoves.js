import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _enemyTakeDamage } from "../store/enemy";
import { _playerBoost } from "../store/player";

const PlayerMoves = (props) => {
    const player = useSelector(state => state.player)
    const dispatch = useDispatch()

    function damageHandler(event) {
        event.preventDefault()
        let moveNum = event.target.getAttribute('index')
        if (player.moves[moveNum].cat === "boost") {
            dispatch(_playerBoost(player.moves[moveNum].stat))
        } else {
            dispatch(_enemyTakeDamage(player,moveNum))
        }
        props.changeView()
        props.setStatusText(`${player.name} used ${player.moves[moveNum].name}!`)
        props.resetReveal()
    }

    return (
    <>
        {player.moves.map((move,idx) =>
            <div key={idx} index={idx} onClick={damageHandler} 
                className={"option " +`${move.type}`}>{move.name}
            </div>
            )}
    </>
    )
}

export default PlayerMoves