/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import * as Styled from './styled';
import { useUser } from '../../providers/user';
import Loading from '../../components/loading';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SplashScreen = ({ navigation }: any) => {

  const user: any = useUser();

  useEffect(() => {
    if (!user?.signed && !user?.initialized) {
      navigation.navigate('Login');
    } 
    else {
      navigation.navigate('Home');
    }
  }, [user?.initialized, user?.user]);

  return (
    <Styled.Container>
      <Loading />
    </Styled.Container>
  );
}

export default SplashScreen;
