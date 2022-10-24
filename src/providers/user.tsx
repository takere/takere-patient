/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useToast} from 'native-base';
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
export const UserProvider = ({children}) => {
  const toast = useToast();
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authService.signIn(email, password);

      if (response.token) {
        await AsyncStorage.setItem('cookie', response?.token);
        setUser(response?.userData)
        setInitialized(true)
        toast.show({
          description: localeService.translate("LOGIN_SUCCESS"),
        });
        setIsLoading(false);
        return true;
      } else {
        toast.show({
          description: localeService.translate("LOGIN_FAIL"),
        });
        return false;
      }
    } catch (e) {
      console.log(e);
      toast.show({
        description: localeService.translate("LOGIN_FAIL"),
      });
      return false;
    }
  }

  async function reset() {
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
