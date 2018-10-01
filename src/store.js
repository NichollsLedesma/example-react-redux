import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROD':
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
        case 'REMOVE_PROD':
            return {
                ...state,
                cart: state.cart.filter(prod => prod.id !== action.product.id)
            }
        default:
            return state;

    }
}

export default createStore(reducer, { cart: [] });