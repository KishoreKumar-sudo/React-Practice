// Reducer which is an arrow function it takes 2 parameters 1st it will be always taking the initial state & 2nd as action
import { Actiontypes } from '../Constants/action-types'
const initialState = {
    products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};
export const selectedproductReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case Actiontypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
}