import { combineReducers, createStore } from "redux";
import charactersChangeReducer from "./ducks/charactersChange";
import characterLikeReducer from './ducks/characterLike'


const reducer = combineReducers({
    charactersChange: charactersChangeReducer,
    characterLike: characterLikeReducer
})

const store = createStore(reducer)



export default store