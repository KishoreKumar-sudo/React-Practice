// Reducer which is an arrow function it takes 2 parameters 1st it will be always taking the initial state & 2nd as action
import { Actiontypes } from '../Constants/action-types'
const initialState = {
    products: [
        {
        id: 1,
        title: "Kishore",
        category: "Programmer",
    },
    ],
};
export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
} 