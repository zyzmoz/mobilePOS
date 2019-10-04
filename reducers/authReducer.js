import { createReducer } from './createReducer';
import { SIGN_OUT, GET_CURRENT_USER, CHECK_USER_AUTH } from '../actions/auth';
const initialState = {};

const signOut = (state, payload) => {
  return { ...state, ...payload }
}

const getCurrentUser = (state, payload) => {
  return { ...state, ...payload }
}

const checkUserAuth = (state, payload) => {
  return { ...payload }
}


export default createReducer(initialState, {
  [SIGN_OUT]: signOut,
  [GET_CURRENT_USER]: getCurrentUser,
  [CHECK_USER_AUTH]: checkUserAuth
});