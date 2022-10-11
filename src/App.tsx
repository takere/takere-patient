import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { UserProvider } from './providers/user';
import MainNavigator from './navigators/MainNavigator';

const App = () => {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <UserProvider>
          <MainNavigator />
        </UserProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
