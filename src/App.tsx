import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardScreen } from './screens/board/board';
import { NativeBaseProvider } from 'native-base';
import { UserProvider } from './providers/user';
import { SplashScreen } from './screens/splash/splash';
import { LoginScreen } from './screens/login/login';
import { HomeScreen } from './screens/home/home';
import { ProfileScreen } from "./screens/profile/profile";
import { MyProgressScreen } from './screens/myprogress';
import { AgendaScreen } from './screens/agenda';

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
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="MyProgress"
              component={MyProgressScreen}
              options={{headerShown: true, headerTitle: 'My Progress'}}
            />
            <Stack.Screen
              name="Agenda"
              component={AgendaScreen}
              options={{headerShown: true}}
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
              options={{headerShown: true}}
            />
          </Stack.Navigator>
        </UserProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
