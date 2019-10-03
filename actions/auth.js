import { auth, firestore } from '../config/Firebase/firebase';

// auth
export const loginWithEmail = async (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
}

export const signupWithEmail = async (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password)
}

export const signOut = async () => {
  return auth().signOut()
}

export const checkUserAuth = async (user) => {
  return auth().onAuthStateChanged(user)
}

// firestore
export const createNewUser = async (userData) => {
  return firestore()
    .collection('companies')
    .doc(`${userData.cnpj}`)
    .collection('users')
    .doc(`${userData.uid}`)
    .set(userData)
}