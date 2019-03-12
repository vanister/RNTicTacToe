import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import App from './App';

import { configureStore } from './state/store';
import { gameOperations } from './state/game';

// At a later point, we can pull the state stored in local storage (or another source)
// and use it to create the store from a previous state.
const initialState = null;
const store = configureStore(initialState || {});

if (!initialState) {
  // since we don't have any persisted state, we should start a new game when the game loads

  // our new game operation returns an action object that we can use in the 
  // redux store to dispatch
  const newGame = gameOperations.newGame();

  store.dispatch(newGame);
}

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxApp);
