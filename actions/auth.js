export const LOGIN_WITH_EMAIL = 'LOGIN_WITH_EMAIL';
export const SIGNUP_WITH_EMAIL = 'SIGNUP_WITH_EMAIL';
export const SIGN_OUT = 'SIGN_OUT';
export const CHECK_USER_AUTH = 'CHECK_USER_AUTH';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
import { AsyncStorage } from 'react-native';
import Firebase from '../config/Firebase';


// auth
export const loginWithEmail = async (email, password) => {
  return Firebase.auth().signInWithEmailAndPassword(email, password);
}

export const signupWithEmail = (userData) => {
  return async (dispatch) => {
    const { email, password, name, cnpj } = userData;
    try {
      const { uid } = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      const newUser = { email, name, uid, cnpj }
      await Firebase.firestore()
        .collection('companies')
        .doc(`${newData.cnpj}`)
        .collection('users')
        .doc(`${uid}`)
        .set(newUser);
      dispatch({
        type: LOGIN_WITH_EMAIL,
        payload: { authenticated: true }
      });
    } catch (error) {
      dispatch({
        type: LOGIN_WITH_EMAIL,
        payload: { authenticated: false, error: error.message }
      });
    }
  }
}

export const getCurrentUser = () => {
  return async (dispatch) => {
    const cnpj = await AsyncStorage.getItem('@comandas:cnpj');
    const { uid } = Firebase.auth().currentUser;
    const user = await Firebase.firestore()
      .collection('companies')
      .doc(`${cnpj}`)
      .collection('users')
      .doc(`${uid}`).get().then(doc => doc.data());
    dispatch({
      type: GET_CURRENT_USER,
      payload: { user }
    })
  }
}

export const signOut = () => {
  return async (dispatch) => {
    await Firebase.auth().signOut();
    dispatch({
      type: SIGN_OUT,
      payload: { authenticated: false }
    });
  }
}

export const checkUserAuth = () => {
  return async (dispatch) => {
    Firebase.auth().onAuthStateChanged(user => {
      console.log('Act Auth', user);
      if (user) {
        dispatch({
          type: CHECK_USER_AUTH,
          payload: { authenticated: true }
        })
      } else {
        dispatch({
          type: CHECK_USER_AUTH,
          payload: { authenticated: false }
        })
      }
    });
  }
}

// firestore
export const createNewUser = async (userData) => {
  return
}