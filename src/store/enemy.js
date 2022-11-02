
const initState = {
    name: "Charizard",
    pokeId: 6,
    type: "fire",
    stats: {
        health: 500,
        maxHealth: 500,
        atk: 175,
        def: 97,
        specialAtk: 150,
        specialDef: 105,
        speed: 118
    },
    moves: [
        {
            name: "Fire Blast",
            type: "fire",
            cat: "specialDef",
            power: 110
        },
        {
            name: "Headbutt",
            type: "normal",
            cat: "def",
            power: 60
        },
        {
            name: "Slash",
            type: "normal",
            cat: "def",
            power: 90
        },
        {
            name: "Swords Dance",
            type: "normal",
            cat: "boost",
            stat: "atk",
            power: 0
        }
    ],
    weak: [
        "water",
        "electric",
        "rock"
    ],
    strong: [
        "grass",
        "fire",
        "flying"
    ]
}

// action types

const ENEMY_TAKE_DAMAGE = "ENEMY_TAKE_DAMAGE"
const ENEMY_BOOST = "ENEMY_BOOST"

// action creators

export const _enemyTakeDamage = (enemy, moveIdx) => {
    return {
        type: ENEMY_TAKE_DAMAGE,
        enemy: enemy,
        moveIdx: moveIdx
    }
}

export const _enemyBoost = (stat) => {
    return {
        type: ENEMY_BOOST,
        stat: stat
    }
}

// reducer 

export default (state=initState, action) => {
    switch (action.type) {
        case ENEMY_TAKE_DAMAGE:
            let enemy = action.enemy
            let move = enemy.moves[action.moveIdx]
            let newHealth
            let superEff = 1
            let defenseRatio = 1
            let STAB = 1
            // check and see if stat boosting move
            if (move.cat === "boost"){
                newHealth = state.stats.health
            } else {
                if (enemy.type === move.type) {
                    STAB = 1.5
                }
                if (state.weak.includes(move.type)) {
                    superEff = 2
                } else if (state.strong.includes(move.type)) {
                    superEff = 0.5
                }
                if (move.cat === "def") {
                    defenseRatio = enemy.stats.atk/state.stats.def
                } else {
                    defenseRatio = enemy.stats.specialAtk/state.stats.specialDef
                }
                let damage = ((2*(50/5)*move.power*defenseRatio)/50)*STAB*superEff
                newHealth = state.stats.health - damage
            }
            // make sure cant do negative damage or go below zero
            if (newHealth > state.stats.health) {
                newHealth = state.stats.health
            } else if (newHealth < 0) {
                newHealth = 0
            }
            // make sure newHealth cant be a fraction
            newHealth = Math.floor(newHealth)
            // return state
            return {
                ...state,
                stats: {
                    ...state.stats,
                    health: newHealth
                }
            }
        case ENEMY_BOOST:
            let newStat = state.stats[action.stat] * 1.5
            return {
                ...state,
                stats: {
                    ...state.stats,
                    [action.stat]: newStat
                }
            } 
        default:
            return state
    }
}