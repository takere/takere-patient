/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Divider } from 'native-base';
import * as Styled from './styled';
import ThemeButton from '../buttons/ThemeButton';
import LocaleService from '../../services/locale.service';
import NavigationButtonsProps from '../../models/navigation-buttons-props.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const NavigationButtons = ({ 
  displayBack, 
  displayNext, 
  onBack, 
  onNext 
}: NavigationButtonsProps) => (
  <Styled.HorizontalList space={3} divider={<Divider />}>
    <ThemeButton
      onPress={onBack}
      display={displayBack}
      title={localeService.translate("BACK")} />
    <ThemeButton
      onPress={onNext}
      display={displayNext}
      title={localeService.translate("NEXT")} />
  </Styled.HorizontalList>
);

export default NavigationButtons;
