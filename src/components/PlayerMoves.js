import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _enemyTakeDamage } from "../store/enemy";
import { _playerBoost } from "../store/player";

const PlayerMoves = (props) => {
    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)

    return (
    <>
        {player.moves.map((move,idx) =>
            <div onMouseEnter={()=>{
                props.setShowMove(true)
                props.setHoverMove(move)
            }} onMouseLeave={()=>props.setShowMove(false)} key={idx} index={idx} onClick={(event)=>{
                props.battleSequence(event)
                props.setShowMove(false)
            }} 
                className={"option " +`${move.type}`}>{move.name}
            </div>
            )}
    </>
    )
}

export default PlayerMoves