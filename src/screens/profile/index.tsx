/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import LocaleService from '../../services/locale.service';
import AuthService from '../../services/auth.service';
import DangerButton from '../../components/buttons/DangerButton';
import { NavigationProp } from '@react-navigation/native';
import Screen from '../../models/screen.model';
import { useUser } from '../../providers/user';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
let authService: AuthService


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ProfileScreen = ({ navigation }: Screen) => {

  authService = new AuthService(useUser());

  return (
    <Styled.Container>
      <Styled.Background 
        source={require('../../assets/images/form.jpg')}
        alt={localeService.translate("FORM_IMAGE")}
      />
      <DangerButton 
        title={localeService.translate("LOGOUT")}
        onPress={() => handleSubmit(navigation)}
      />
    </Styled.Container>
  );
}

export default ProfileScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function handleSubmit(navigation: NavigationProp<any, any>) {
  await authService.signOut();
  navigation.navigate('Splash');
}
