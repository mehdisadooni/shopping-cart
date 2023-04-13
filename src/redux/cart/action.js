import {ADD_TO_CART} from "./actionType";

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export default addToCart