export const SELL_PRODUCT = 'SELL_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const COMPLETE_ORDER = 'COMPLETE_ORDER';

export const sellProduct = (product) => {
  return (dispatch, getState) => {
    let { products } = getState().cart;
    if (!products)
      products = [];
    products.push(product);
    dispatch({
      type: SELL_PRODUCT,
      payload: { products }
    });
  }
}

export const selectProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    payload: { product }
  }
}

export const removeProduct = (index) => {
  return async(dispatch, getState) => {
    let { products } = getState().cart;
    await products.splice(index, 1);
    if (products.length === 0)
      products = null;
    dispatch({
      type: REMOVE_PRODUCT,
      payload: { products }
    });
  }
}


export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const completeOrder = () => {
  //Store on firebase
  return {
    type: COMPLETE_ORDER
  }
}