import { combineReducers } from 'redux';
import { productReducer, selectedproductReducers } from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedproductReducers
}
);

export default reducers