import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardScreen } from '../screens/board/board';
import { SplashScreen } from '../screens/splash/splash';
import { LoginScreen } from '../screens/login/login';
import { HomeScreen } from '../screens/home/home';
import { ProfileScreen } from "../screens/profile/profile";
import { MyProgressScreen } from '../screens/myprogress';
import { AgendaScreen } from '../screens/agenda';
import LocaleService from '../services/locale.service';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  const localeService = new LocaleService();

  return (
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
            options={{headerShown: true, headerTitle: localeService.translate("MY_PROGRESS")}}
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
  );
};

export default MainNavigator;
