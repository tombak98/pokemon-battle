import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _enemyTakeDamage } from "../store/enemy";

const EnemyStats = () => {

    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemy)
    const dispatch = useDispatch()

    React.useEffect(()=>{
    },[])

    function healthIndicator() {
        let status = enemy.stats.health/enemy.stats.maxHealth
        if (status< 0.2) {
            return "fire"
        } else if (status<0.5) {
            return "electric"
        } else {
            return "grass"
        }
    }

    // React.useEffect(()=>{
    //     console.log(enemy)
    // },[enemy])


  return (
    <div className="stats enemy">
      <p>
        Charizard <span>Lvl. 100</span>
      </p>
      <div className="health-box">
        <div style={{width:`${enemy.stats.health/enemy.stats.maxHealth*100}%`}} className={"health " + healthIndicator()}></div>
      </div>
    </div>
  );
};

export default EnemyStats;
