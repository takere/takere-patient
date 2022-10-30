/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import * as Styled from './styled';
import LocaleService from '../../../services/locale.service';
import SuccessButton from '../../buttons/SuccessButton';
import TextInput from '../../../parts/input/TextInput';
import SignInFormComponent from '../../../models/sign-in-form-component.model';
import { Input } from 'native-base';


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
    <Styled.Container>
      <Styled.Inputs>
        <EmailInput value={email} onChange={setEmail} />
        <PasswordInput value={password} onChange={setPassword} />
      </Styled.Inputs>
      <SuccessButton
        isLoading={isLoading}
        isDisabled={isLoading}
        onPress={() => onSubmit(email, password)}
        title={localeService.translate("SIGN_IN")}
      />
    </Styled.Container>
  );
}

export default SignInForm;

const EmailInput = ({ value, onChange }: any) => (
  <>
    <Styled.Title>
      { localeService.translate("EMAIL") }
    </Styled.Title>
    <TextInput
      value={value}
      onChange={onChange}
      placeholder={localeService.translate("TYPE_EMAIL")}
    />
  </>
);

const PasswordInput = ({ value, onChange }: any) => (
  <>
    <Styled.Title>
      { localeService.translate("PASSWORD") }
    </Styled.Title>
    <TextInput
      value={value}
      onChange={onChange}
      type="password"
      placeholder={localeService.translate("TYPE_PASSWORD")}
    />
  </>
);
