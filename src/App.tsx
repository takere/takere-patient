/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { UserProvider } from './providers/user';
import MainNavigator from './navigators/MainNavigator';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
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
