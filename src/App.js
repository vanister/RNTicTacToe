
import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createAppNavigator } from './screens';

const appNavigator = createAppNavigator();
const AppContainer = createAppContainer(appNavigator);

const App = () => {
  return (
    <AppContainer></AppContainer>
  );
};

export default App;
