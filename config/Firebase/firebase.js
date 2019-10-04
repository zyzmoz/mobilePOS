import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const Firebase = {
  auth: firebase.auth,
  firestore: firebase.firestore,
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },

  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
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
}

 
   

export default Firebase
