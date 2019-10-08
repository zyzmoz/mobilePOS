export const SELL_PRODUCT = 'SELL_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

import { firestore } from '../config/Firebase/firebase';


export const sellProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: SELL_PRODUCT,
      payload: { product }
    });
  }
}

export const selectProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    payload: { product }
  }
}
