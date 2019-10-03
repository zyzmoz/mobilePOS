import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);


const Firebase = {
  auth: firebase.auth(),
  firebase: fb,
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user)
  },

  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('companies')
      .doc(`${userData.cnpj}`)
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  },

  getCurrentUser: async () => {
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    const { uid } = firebase.auth().currentUser;    
    return firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('users')
      
      .doc(`${uid}`).get().then(doc => doc.data());

  },

  getProductGroups: async() =>{
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    
    
    return firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('productGroups')
      .orderBy('name')
      .get().then(snapshot => {
        let groups = [];
        snapshot.forEach(doc => {
          groups.push({id: doc.id, ...doc.data()})
        })
        return groups;
      });
  },
  getProducts: async() =>{
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');    
    
    return firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('products')      
      .orderBy('description')
      .get().then(snapshot => {
        let products = [];
        snapshot.forEach(doc => {
          products.push({id: doc.id, ...doc.data()})
        });        
        return products;
      });
  }
}

export default Firebase
