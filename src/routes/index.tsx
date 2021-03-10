import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectAccount from '../screens/SelectAccount';
import DashBoard from '../screens/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="SelectAccount" component={SelectAccount} />
    <App.Screen name="DashBoard" component={DashBoard} />
  </App.Navigator>
);

export default AppRoutes;
