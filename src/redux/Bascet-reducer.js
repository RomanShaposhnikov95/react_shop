import v1 from "uuid";
import {parrentId1, parrentId2, parrentId3, parrentId4} from "./Product-reducer";

const ADD_IN_BASCET = 'ADD_IN_BASCET';
const REMOVE_FROM_BASCET = 'REMOVE_FROM_BASCET';
const TOTAL_PRICE_CALC = 'TOTAL_PRICE_CALC';
const PLUS_PRODUCT = 'PLUS_PRODUCT';
const MINUS_PRODUCT = 'MINUS_PRODUCT';
const SUBMIT_CLEAN = 'SUBMIT_CLEAN';

const initialState = [
    // {id: parrentId1, title: 'Iphone 12 gold', price: 1010},
]


export const BascetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IN_BASCET:
            const inBag = state.find(el => el.id === action.id)
            if(inBag) {
                inBag.count = inBag.count + 1
                return [...state]
            }
            return [{id: action.id, count: 1, title: action.title, price: action.price}, ...state]
        case REMOVE_FROM_BASCET:
            return state.filter(el => el.id != action.id)
        case TOTAL_PRICE_CALC:
            return state
        case PLUS_PRODUCT:
            const countPlus = state.find(el => el.id === action.id)
            if (countPlus) {
                countPlus.count += 1
                countPlus.price = countPlus.price
                return [...state]
            }
        case MINUS_PRODUCT:
            const countMinus = state.find(el => el.id === action.id)
            if (countMinus) {
                countMinus.count -= 1
                if (countMinus.count === 0) {
                    return state.filter(el => el.id != action.id)
                }
                return [...state]
            }
        case SUBMIT_CLEAN:
            state = []
            return state
        default:
            return state
    }
}

export const addInBascet = (id, title, price) => {
    return {
        type: ADD_IN_BASCET,
        id,
        title,
        price
    }
}
export const removeFromBascet = (id) => {
    return {
        type: REMOVE_FROM_BASCET,
        id
    }
}

export const plusCountAC = (id) => {
    return {
        type: PLUS_PRODUCT,
        id
    }
}

export const minusCountAC = (id) => {
    return {
        type: MINUS_PRODUCT,
        id
    }
}

export const submitCleanAC = () => {
    return {
        type: SUBMIT_CLEAN
    }
}



