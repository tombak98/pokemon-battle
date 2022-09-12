
const initState = {
    name: "Blastoise",
    pokeId: 9,
    type: "water",
    stats: {
        health: 154,
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
        }
    ]
}

// action types

const PLAYER_TAKE_DAMAGE = "PLAYER_TAKE_DAMAGE"

// action creators

export const _playerTakeDamage = (enemy, moveIdx) => {
    return {
        type: PLAYER_TAKE_DAMAGE,
        enemy: enemy,
        moveIdx: moveIdx
    }
}

// reducer 

export default (state=initState, action) => {
    switch (action.type) {
        case PLAYER_TAKE_DAMAGE:
            let enemy = action.enemy
            let move = enemy.moves[action.moveIdx]
            let newHealth = state.stats.health - (move.power - state.stats[move.cat])
            if (newHealth > state.stats.health) {
                newHealth = state.stats.health
            }
            return {
                ...state,
                stats: {
                    ...state.stats,
                    health: newHealth
                }
            }
        default:
            return state
    }
}