/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useToast } from 'native-base';
import LocaleService from '../services/locale.service';
import AuthService from '../services/auth.service';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const authService = new AuthService();

const UserContext = createContext(null);


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const UserProvider = ({ children }: any) => {
  
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const toast = useToast();
  

  const store = async (response: any) => {
    await AsyncStorage.setItem('cookie', response?.token);
    setUser(response?.userData);
    setInitialized(true);
    setIsLoading(false);
  }  

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  }

  const reset = async () => {
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        signed: !!user,
        logout,
        login,
        user,
        isLoading,
        initialized,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
