import {ADD_TO_CART, INCREMENT} from "./actionType";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const increment = productId => {
    return {
        type: INCREMENT,
        payload: productId
    }
}

