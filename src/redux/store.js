import {combineReducers} from "redux";
import {createStore} from "redux";
import {ProductReducer} from "./Product-reducer";
import {BascetReducer} from "./Bascet-reducer";
import {FormReducer} from "./Form-reducer";



const reducer = combineReducers({
    ProductReducer,
    BascetReducer,
    FormReducer
})

const store = createStore(reducer)

window.store = store

export default store