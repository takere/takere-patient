import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardScreen } from './pages/board/board';
import { NativeBaseProvider } from 'native-base';
import { UserProvider } from './context/user';
import { SplashScreen } from './pages/splash/splash';
import { LoginScreen } from './pages/login/login';
import { HomeScreen } from './pages/home/home';
import { ProfileScreen } from "./pages/profile/profile";

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
              name="Board"
              component={BoardScreen}
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