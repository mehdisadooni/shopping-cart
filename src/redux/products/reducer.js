import {SET_PRODUCTS} from "./axtionType";

const initialState = {
    products: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default productReducer