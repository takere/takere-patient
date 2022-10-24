/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardScreen } from '../screens/board';
import { SplashScreen } from '../screens/splash';
import { LoginScreen } from '../screens/login';
import { HomeScreen } from '../screens/home';
import { ProfileScreen } from '../screens/profile';
import { ProgressScreen } from '../screens/progress';
import { AgendaScreen } from '../screens/agenda';
import LocaleService from '../services/locale.service';

// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
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
        component={ProgressScreen}
        options={{
          headerShown: true,
          headerTitle: localeService.translate('MY_PROGRESS'),
        }}
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
