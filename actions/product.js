export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_BY_GROUP = 'GET_PRODUCTS_BY_GROUP';
import { AsyncStorage } from 'react-native';
import Firebase from '../config/Firebase';


export const getProducts = () => {
  return async(dispatch) => {
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    const groups = await Firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('productGroups')
      .orderBy('name')
      .get().then(snapshot => {
        let groups = [];
        snapshot.forEach(doc => {
          groups.push({ id: doc.id, ...doc.data() })
        })
        return groups;
      });    
    const products = await Firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('products')
      .orderBy('description')
      .get().then(snapshot => {
        let products = [];
        snapshot.forEach(doc => {
          products.push({ id: doc.id, ...doc.data() })
        });
        return products;
      });    

    dispatch({
      type: GET_PRODUCTS,
      payload: { groups, products }
    })
  }

}

export const getProductsByGroup = (group) => {
  return async(dispatch) => {
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    const products = await Firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('products')
      // .where('groupId', '==', group.id)
      .orderBy('description')
      .get().then(snapshot => {
        let products = [];
        snapshot.forEach(doc => {
          products.push({ id: doc.id, ...doc.data() })
        });
        return products.filter(product => product.groupId === group.id);
      });    

    dispatch({
      type: GET_PRODUCTS,
      payload: { group, products }
    })
  }
}
