import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _playerTakeDamage } from "../store/player";

const PlayerStats = () => {
    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)
    const dispatch = useDispatch()

    React.useEffect(()=>{
    },[])

    function damageHandler() {
        dispatch(_playerTakeDamage(enemy, 0))
    }

    function healthIndicator() {
        let status = player.stats.health/player.stats.maxHealth
        if (status< 0.2) {
            return "fire"
        } else if (status<0.5) {
            return "electric"
        } else {
            return "grass"
        }
    }

    React.useEffect(()=>{
        console.log(player)
    },[player])

  return (
    <div onClick={damageHandler} className="stats player">
      <p>
        Blastoise <span>Lvl. 50</span>
      </p>
      <div className="health-box">
        <div style={{width:`${player.stats.health/player.stats.maxHealth*100}%`}} 
            className={"health " + healthIndicator()}>
        </div>
      </div>
      <p>{`HP ${player.stats.health}/${player.stats.maxHealth}`}</p>
    </div>
  );
};

export default PlayerStats;
