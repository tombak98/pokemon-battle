
const initState = {
    name: "Charizard",
    pokeId: 6,
    type: "fire",
    stats: {
        health: 147,
        atk: 103,
        def: 97,
        specialAtk: 129,
        specialDef: 105,
        speed: 118
    },
    moves: [
        {
            name: "Flamethrower",
            type: "fire",
            cat: "specialDef",
            power: 90
        },
        {
            name: "Wing Attack",
            type: "flying",
            cat: "def",
            power: 60
        }
    ]
}

// action types

const ENEMY_TAKE_DAMAGE = "ENEMY_TAKE_DAMAGE"

// action creators

export const _enemyTakeDamage = (enemy, moveIdx) => {
    return {
        type: ENEMY_TAKE_DAMAGE,
        enemy: enemy,
        moveIdx: moveIdx
    }
}

// reducer 

export default (state=initState, action) => {
    switch (action.type) {
        case ENEMY_TAKE_DAMAGE:
            let enemy = action.enemy
            let move = enemy.moves[action.moveIdx]
            let newHealth = state.stats.health - (move.power - state.stats[move.cat])
            if (newHealth > state.stats.health) {
                newHealth = 0
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