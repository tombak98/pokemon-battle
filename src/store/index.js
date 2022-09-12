import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import player from "./player";
import enemy from "./enemy";

const reducers = combineReducers({
    // place your separate reducers here, for example:
    // students: studentReducer,
    player: player,
    enemy: enemy
})

function configureStore() {
    // return createStore(########, applyMiddleware(thunk));
    return createStore(reducers, applyMiddleware(thunk))
}

export default configureStore;