/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import { VStack } from "native-base";
import { Dimensions } from 'react-native';
import LocaleService from '../../services/locale.service';
import TileButton from '../buttons/TitleButton';
import Screen from '../../models/screen.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();

const { width } = Dimensions.get('window');


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ScreenList = ({ navigation }: Screen) => {

  return (
    <VStack>
      <Styled.Row>
        <BoardTile navigation={navigation} />
        <ProgressTile navigation={navigation} />
      </Styled.Row>
      <Styled.Row>
        <ProfileTile navigation={navigation} />
        <AgendaTile navigation={navigation} />
      </Styled.Row>
    </VStack>
  );
}

export default ScreenList;

const BoardTile = ({ navigation }: Screen) => (
  <TileButton
    title={localeService.translate("BOARD")}
    icon="dynamic-feed"
    onPress={() => navigation.navigate('Board')}
  />
);

const ProgressTile = ({ navigation }: Screen) => (
  <TileButton 
    title={localeService.translate("MY_PROGRESS")}
    icon="domain-verification"
    onPress={() => navigation.navigate('MyProgress')}
  />
);

const ProfileTile = ({ navigation }: Screen) => (
  <TileButton 
    title={localeService.translate("PROFILE")}
    icon="account-circle"
    onPress={() => navigation.navigate('Profile')}
  />
);

const AgendaTile = ({ navigation }: Screen) => (
  <TileButton 
    title={localeService.translate("AGENDA")}
    icon="calendar-today"
    onPress={() => navigation.navigate('Agenda')}
  />
);
