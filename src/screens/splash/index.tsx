/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import * as Styled from './styled';
import Loading from '../../components/loading';
import Screen from '../../models/screen.model';
import StorageService from '../../services/storage.service';
import { useUser } from '../../providers/user';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
let storageService: StorageService;


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SplashScreen = ({ navigation }: Screen) => {

  storageService = new StorageService(useUser());
  const user: any = storageService.getUser();
  const initialized = storageService.wasInitialized();
  const signed = storageService.isSigned();

  useEffect(() => {
    if (!signed && !initialized) {
      navigation.navigate('Login');
    } 
    else {
      navigation.navigate('Home');
    }
  }, [initialized, user]);

  return (
    <Styled.Container>
      <Loading />
    </Styled.Container>
  );
}

export default SplashScreen;
