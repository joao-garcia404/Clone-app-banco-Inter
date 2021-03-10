import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import AppRoutes from './routes/index';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppRoutes />
    </View>
  </NavigationContainer>
);

export default App;
