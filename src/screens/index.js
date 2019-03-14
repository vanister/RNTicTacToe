import { createStackNavigator } from 'react-navigation';

import * as screens from './screens';
import GameScreen from './GameScreen';

const { GAME } = screens;

const createAppNavigator = () => {
  const appNavigator = createStackNavigator(
    {
      [GAME]: GameScreen
    },
    {
      initialRouteName: GAME,
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          // material blue theme color
          backgroundColor: '#3f51b5'
        }
      }
    }
  );

  return appNavigator;
};

export {
  createAppNavigator
};

export default screens;
