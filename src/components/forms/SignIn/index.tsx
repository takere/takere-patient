/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import * as Styled from './styled';
import LocaleService from '../../../services/locale.service';
import SuccessButton from '../../buttons/SuccessButton';
import Input from '../../../parts/input';
import SignInFormComponent from '../../../models/sign-in-form-component.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignInForm = ({ onSubmit, isLoading }: SignInFormComponent) => {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView>
      <EmailInput value={email} onChange={setEmail} />
      <PasswordInput value={password} onChange={setPassword} />
      <SuccessButton
        isLoading={isLoading}
        isDisabled={isLoading}
        onPress={() => onSubmit(email, password)}
        title={localeService.translate("SIGN_IN")}
      />
    </SafeAreaView>
  );
}

export default SignInForm;

const EmailInput = ({ value, onChange }: any) => (
  <>
    <Styled.Title>
      { localeService.translate("EMAIL") }
    </Styled.Title>
    <Styled.Subtitle>
      { localeService.translate("TYPE_EMAIL") }
    </Styled.Subtitle>
    <Input
      value={value}
      onChangeText={onChange}
      placeholder="abc@xyz.com"
    />
  </>
);

const PasswordInput = ({ value, onChange }: any) => (
  <>
    <Styled.Title>
      { localeService.translate("PASSWORD") }
    </Styled.Title>
    <Styled.Subtitle>
      { localeService.translate("TYPE_PASSWORD") }
    </Styled.Subtitle>
    <Input
      value={value}
      onChangeText={onChange}
      type="password"
    />
  </>
);
