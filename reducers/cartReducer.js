import { createReducer } from "./createReducer";
import { SELL_PRODUCT, SELECT_PRODUCT, CLEAR_CART, REMOVE_PRODUCT, COMPLETE_ORDER, GET_PLACEDORDERS } from "../actions/cart";

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
  return { ...state, products };
}

const completeOrder = (state, payload) => {
  return { ...state, products: null }
}

const getPlacedOrders = (state, payload) => {
  const { orders } = payload;
  return { ...state, orders }
}

export default createReducer(initialState, {
  [SELL_PRODUCT]: sellProduct,
  [SELECT_PRODUCT]: selectProduct,
  [CLEAR_CART]: clearCart,
  [REMOVE_PRODUCT]: removeProduct,
  [COMPLETE_ORDER]: completeOrder,
  [GET_PLACEDORDERS]: getPlacedOrders
})