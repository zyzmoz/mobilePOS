import { createReducer } from "./createReducer";
import { GET_PRODUCTS, GET_PRODUCTS_BY_GROUP } from "../actions/product";
const initialState = {}


const getProducts = (state, payload) => {
  return { ...state, ...payload }
}

const getProductsByGroup = (state, payload) => {
  return { ...state, ...payload }
}

export default createReducer(initialState, {
  [GET_PRODUCTS]: getProducts,
  [GET_PRODUCTS_BY_GROUP]: getProductsByGroup
})
