/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import {
  Button,
  Heading,
  Input,
} from 'native-base';
import {useState} from 'react';
import {useUser} from '../../providers/user';
import {SafeAreaView} from 'react-native';
import LocaleService from '../../services/locale.service';
import Screen from '../../models/screen.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const LoginScreen = ({ navigation }: Screen) => {
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmailChange = (inputValue: any) => {
    setEmail(inputValue);
  };
  const handlePasswordChange = (inputValue: any) => {
    setPassword(inputValue);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const status = await user.login(email, password);
    if (status) {
      navigation.navigate('Home');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <Heading size="xl" ml={3} mt={5} color="muted.800">
      {localeService.translate("EMAIL")}
      </Heading>
      <Heading size="sm" ml={3} mt={1} color="muted.400">
      {localeService.translate("TYPE_EMAIL")}
      </Heading>
      <Input
        value={email}
        onChangeText={handleEmailChange}
        ml={3}
        mr={3}
        mt={5}
        size="2xl"
        placeholder="abc@xyz.com"
      />
      <Heading size="xl" ml={3} mt={10} color="muted.800">
      {localeService.translate("PASSWORD")}
      </Heading>
      <Heading size="sm" ml={3} mt={1} color="muted.400">
      {localeService.translate("TYPE_PASSWORD")}
      </Heading>
      <Input
        value={password}
        onChangeText={handlePasswordChange}
        ml={3}
        mr={3}
        mt={5}
        size="2xl"
        type="password"
      />
      <Button
        isLoading={loading}
        isDisabled={loading}
        ml={3}
        mr={3}
        mt={10}
        mb={3}
        size="lg"
        colorScheme="success"
        onPress={() => handleSubmit()}>
        {localeService.translate("SIGN_IN")}
      </Button>
    </SafeAreaView>
  );
}

export default LoginScreen;
