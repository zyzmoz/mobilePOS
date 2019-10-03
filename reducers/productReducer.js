import { createReducer } from "./createReducer";
import { GET_PRODUCTS } from "../actions/product";
const initialState = {}


const getProducts = (state, payload) => {
  return { ...state, ...payload }
}

export default createReducer(initialState, {
  [GET_PRODUCTS]: getProducts
})
