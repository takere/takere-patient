/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import LocaleService from '../../services/locale.service';
import Screen from '../../models/screen.model';
import TakereHeader from '../../components/takere/header';
import ScreenList from '../../components/ScreenList';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const HomeScreen = ({ navigation }: Screen) => {

  return (
    <Styled.Container>
      <Styled.Background 
        source={require('../../assets/images/peace.jpg')}
        alt={localeService.translate("PEACE_IMAGE")}
      />
      <Styled.List>
        <TakereHeader />
        <ScreenList navigation={navigation} />
      </Styled.List>
    </Styled.Container>
  );
}

export default HomeScreen;

