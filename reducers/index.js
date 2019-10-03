import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const reducers = combineReducers({
  // state: (state = {}) => state,
  cart: cartReducer,
  product: productReducer
});


export default  reducers;