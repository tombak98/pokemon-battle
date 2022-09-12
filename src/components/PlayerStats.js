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

    React.useEffect(()=>{
        console.log(player)
    },[player])

  return (
    <div onClick={damageHandler} className="stats player">
      <p>
        Blastoise <span>Lvl. 50</span>
      </p>
      <div className="health-box">
        <div className="health green"></div>
      </div>
      <p>HP 103/103</p>
    </div>
  );
};

export default PlayerStats;
