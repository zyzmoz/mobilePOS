export const SELL_PRODUCT = 'SELL_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const COMPLETE_ORDER = 'COMPLETE_ORDER';
export const GET_PLACEDORDERS = 'GET_PLACEDORDERS';
import Firebase from '../config/Firebase';
import { AsyncStorage } from 'react-native';

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
  return async (dispatch, getState) => {
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

export const completeOrder = (card, table) => {
  return async (dispatch, getState) => {
    let { products } = getState().cart;
    //Store on firebase
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    const { uid } = Firebase.auth().currentUser;
    let total = 0;
    products.map(product => total = total + (product.price * product.quantity));
    await Firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('orders')
      .add({
        ...products,
        createdAt: new Date(),
        placedBy: uid,
        total,
        card,
        table
      });
    getPlacedOrders();
    dispatch({
      type: COMPLETE_ORDER
    });
  }
}

export const getPlacedOrders = () => {
  return async (dispatch) => {
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    const orders = await Firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('orders')
      .orderBy('createdAt','desc')      
      .get().then(snapshot => {
        let orders = [];
        snapshot.forEach(doc => {
          orders.push({ id: doc.id, ...doc.data() })
        });
        return orders;
      });
    dispatch({
      type: GET_PLACEDORDERS,
      payload: { orders }
    });

  }

}