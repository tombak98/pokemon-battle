import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _enemyTakeDamage } from "../store/enemy";

const EnemyStats = () => {

    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)
    const dispatch = useDispatch()

    React.useEffect(()=>{
    },[])

    function damageHandler() {
        dispatch(_enemyTakeDamage(player, 0))
    }

    React.useEffect(()=>{
        console.log(enemy)
    },[enemy])

  return (
    <div onClick={damageHandler} className="stats enemy">
      <p>
        Charizard <span>Lvl. 50</span>
      </p>
      <div className="health-box">
        <div className="health green"></div>
      </div>
    </div>
  );
};

export default EnemyStats;
