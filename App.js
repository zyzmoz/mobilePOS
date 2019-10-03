import React from 'react'
import AppContainer from './navigation'
import Firebase, { FirebaseProvider } from './config/Firebase'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


export default function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <FirebaseProvider value={Firebase}>
        <AppContainer />
      </FirebaseProvider>
    </Provider>
  )
}
