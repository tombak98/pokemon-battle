import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _enemyTakeDamage } from "../store/enemy";

const PlayerMoves = (props) => {
    const player = useSelector(state => state.player)
    const dispatch = useDispatch()

    function damageHandler(event) {
        event.preventDefault()
        let moveNum = event.target.getAttribute('index')
        dispatch(_enemyTakeDamage(player,moveNum))
        props.changeView()
        props.setStatusText(`${player.name} used ${player.moves[moveNum].name}!`)
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