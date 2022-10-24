/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {
  Button,
  Image,
} from 'native-base';
import {useUser} from '../../providers/user';
import {SafeAreaView} from 'react-native';
import LocaleService from '../../services/locale.service';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export function ProfileScreen({navigation}: {navigation: any}) {
  const user = useUser();

  const handleSubmit = async () => {
    await user.logout();
    navigation.navigate('Splash');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image 
          style={{ height: '100%', width: '100%', position: 'absolute', top:0, left:0 }}
          source={require('../../assets/images/form.jpg')}
          alt={localeService.translate("FORM_IMAGE")}
        />
      <Button
        ml={3}
        mr={3}
        mt={10}
        mb={3}
        size="lg"
        colorScheme="error"
        onPress={() => handleSubmit()}>
        {localeService.translate("LOGOUT")}
      </Button>
    </SafeAreaView>
  );
}
