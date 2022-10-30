/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { useToast } from 'native-base';
import * as Styled from './styled';
import Screen from '../../models/screen.model';
import SignInForm from '../../components/forms/SignIn';
import AuthService from '../../services/auth.service';
import LocaleService from '../../services/locale.service';
import { NavigationProp } from '@react-navigation/core';
import { useUser } from '../../providers/user';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
let authService: AuthService;


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const LoginScreen = ({ navigation }: Screen) => {

  const [loading, setLoading] = useState(false);

  authService = new AuthService(useUser());
  const toast = useToast();

  return (
    <Styled.Container>
      <SignInForm 
        onSubmit={(email: string, password: string) => handleSubmit(
          email, 
          password, 
          setLoading, 
          navigation,
          toast
        )}
        isLoading={loading}
      />
    </Styled.Container>
  );
}

export default LoginScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function handleSubmit(
  email: string, 
  password: string, 
  setLoading: (value: boolean) => void, 
  navigation: NavigationProp<any, any>,
  toast: any
) {
  setLoading(true);

  const status = await authService.signIn(email, password);

  if (status) {
    toast.show({
      description: localeService.translate("LOGIN_SUCCESS"),
    });
    navigation.navigate('Home');
  }
  else {
    toast.show({
      description: localeService.translate("LOGIN_FAIL"),
    });
  }

  setLoading(false);
}
