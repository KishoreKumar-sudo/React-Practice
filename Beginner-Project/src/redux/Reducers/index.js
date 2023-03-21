import{combineReducers} from 'redux';
import{productReducers} from './productReducer'

const reducers = combineReducers({
    allProducts: productReducers,
});