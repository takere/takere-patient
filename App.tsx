/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/pages/home/home';
import {NativeBaseProvider} from 'native-base';
import {UserProvider} from './src/context/user';
import {SplashScreen} from './src/pages/splash/splash';
import {LoginScreen} from './src/pages/login/login';
import { ProfileScreen } from "./src/pages/profile/profile";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <UserProvider>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </UserProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
