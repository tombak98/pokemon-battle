
const initState = {
    name: "Blastoise",
    pokeId: 9,
    type: "water",
    stats: {
        health: 154,
        maxHealth: 154,
        atk: 83,
        def: 100,
        specialAtk: 85,
        specialDef: 105,
        speed: 78
    },
    moves: [
        {
            name: "Hydro Pump",
            type: "water",
            cat: "specialDef",
            power: 110
        },
        {
            name: "Bite",
            type: "dark",
            cat: "def",
            power: 60
        },
        {
            name: "Water Pulse",
            type: "water",
            cat: "specialDef",
            power: 80
        },
        {
            name: "Iron Defense",
            type: "steel",
            cat: "boost",
            stat: "def",
            power: 0
        },
    ],
    weak: [
        "grass",
        "electric"
    ],
    strong: [
        "fire",
        "water"
    ]
}

// action types

const PLAYER_TAKE_DAMAGE = "PLAYER_TAKE_DAMAGE"
const PLAYER_BOOST = "PLAYER_BOOST"
const PLAYER_ITEM = "PLAYER_ITEM"

// action creators

export const _playerTakeDamage = (enemy, moveIdx) => {
    return {
        type: PLAYER_TAKE_DAMAGE,
        enemy: enemy,
        moveIdx: moveIdx
    }
}

export const _playerBoost = (stat) => {
    return {
        type: PLAYER_BOOST,
        stat: stat
    }
}

export const _playerPotion = (amount) => {
    return {
        type: PLAYER_ITEM,
        amount: amount
    }
}

// reducer 

export default (state=initState, action) => {
    switch (action.type) {
        case PLAYER_TAKE_DAMAGE:
            let enemy = action.enemy
            let move = enemy.moves[action.moveIdx]
            let newHealth
            let STAB = 1
            let superEff = 1
            let defenseRatio = 1
            // check and see if stat boosting move
            if (move.cat === "boost"){
                newHealth = state.stats.health
                state.stats[move.stat] = 1.5*state.stats[move.stat]
            } else {
                // actual damage calc
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
            // no decimal health
            newHealth = Math.floor(newHealth)
            // return state
            return {
                ...state,
                stats: {
                    ...state.stats,
                    health: newHealth
                }
            }
        case PLAYER_BOOST:
            let newStat = state.stats[action.stat] * 1.5
            return {
                ...state,
                stats: {
                    ...state.stats,
                    [action.stat]: newStat
                }
            } 
        case PLAYER_ITEM:
            let afterHealth = state.stats.health + action.amount
            if (afterHealth > state.stats.maxHealth) {
                afterHealth = state.stats.maxHealth
            }
            return {
                ...state,
                stats: {
                    ...state.stats,
                    health: afterHealth
                }
            }
        default:
            return state
    }
}