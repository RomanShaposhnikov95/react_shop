import v1 from "uuid";

const FORM_ORDER = 'FORM_ORDER';
const ADD_ORDER = 'ADD_ORDER';


const initialState = []


export const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_ORDER:
            return [{personId: v1, name: action.name, surname: action.surname, adress: action.adress,
                number: action.number, total: 500, order: action.newOrder}, ...state]
        default:
            return state
    }
}

export const getPersonInfoAC = (name,surname,adress,number, newOrder) => {
    console.log('order:', newOrder)
    return {
        type: FORM_ORDER,
        name,surname,adress,number,
        newOrder
    }
}


// export const addOrder = (id,title,price) => {
//     return {
//         type: ADD_ORDER,
//         id,title,price
//     }
// }
