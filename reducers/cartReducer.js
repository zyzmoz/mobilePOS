import { createReducer } from "./createReducer";
import { SELL_PRODUCT, SELECT_PRODUCT } from "../actions/cart";

const initialState = {};


const sellProduct = (state, payload) => {
  let { products } = state;
  if (!products)
    products = [payload.product]
  else
    products.push(payload.product);

  return { ...state, products }
}

const selectProduct = (state, payload) => {
  return { ...state, product: payload.product };
}

export default createReducer(initialState, {
  [SELL_PRODUCT]: sellProduct,
  [SELECT_PRODUCT]: selectProduct
})