export const GET_PRODUCTS = 'GET_PRODUCTS';
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