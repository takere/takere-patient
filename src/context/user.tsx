import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Requests} from '../services/axios/remoteRequests';
import {useToast} from 'native-base';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const toast = useToast();
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMe = async () => {
    const response = await new Requests().getMe();
    setUser(response);
  };

  useEffect(() => {
    async function handler() {
      const token = await AsyncStorage.getItem('cookie');
      if (token) {
        await getMe();
      }
      setInitialized(true);
    }
    handler();
  }, []);

  async function login(email: string, password: string) {
    setIsLoading(true);
    try {
      const response = await new Requests().makeLogin(email, password);
      console.log(response);
      if (response.token) {
        await AsyncStorage.setItem('cookie', response?.token);
        await getMe();
        toast.show({
          description: 'Login com sucesso!',
        });
        setIsLoading(false);
        return true;
      } else {
        toast.show({
          description: 'Oops! Verifique seus dados!',
        });
        return false;
      }
    } catch (e) {
      console.log(e);
      toast.show({
        description: 'Oops! Verifique seus dados!',
      });
      return false;
    }
  }

  async function logout() {
    await AsyncStorage.removeItem('cookie');
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
