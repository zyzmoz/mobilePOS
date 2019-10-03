import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  // state: (state = {}) => state,
  cart: cartReducer,
  product: productReducer,
  auth: authReducer
});


export default  reducers;