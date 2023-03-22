/* (Action will always return object a plain js object which has a key as type & the payload (i.e data))
so the key will be the type & dz will be type of the action u want to perform. */

import { Actiontypes } from "../Constants/action-types"
export const setproducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedproduct = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCTS,
        payload: product,
    }
}
export const removeSelectedproduct = (product) => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCTS,
    }
} 