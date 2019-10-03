export const SELL_PRODUCT = 'SELL_PRODUCT';

import { firestore } from '../config/Firebase/firebase';


export const sellProduct = (product) => {
  return {
    type: SELL_PRODUCT,
    payload: { product }
  }
}
