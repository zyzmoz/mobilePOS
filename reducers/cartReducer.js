import { createReducer } from "./createReducer";
import { SELL_PRODUCT, SELECT_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } from "../actions/cart";

const initialState = {};


const sellProduct = (state, payload) => {
  const { products } = payload;
  return { products }
}

const selectProduct = (state, payload) => {
  return { ...state, product: payload.product };
}

const clearCart = (state, payload) => {
  return { ...state, products: null }
}

const removeProduct = (state, payload) => {
  const { products } = payload;
  return { products };
}

export default createReducer(initialState, {
  [SELL_PRODUCT]: sellProduct,
  [SELECT_PRODUCT]: selectProduct,
  [CLEAR_CART]: clearCart,
  [REMOVE_PRODUCT]: removeProduct
})