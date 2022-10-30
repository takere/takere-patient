/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import Button from '../../../models/button.model';
import NavigationButton from '../../../models/navigation-button.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ThemeButton = ({ 
  title, 
  onPress, 
  isDisabled, 
  isLoading, 
  display 
}: NavigationButton) => {
  if (!display) {
    return (
      <></>
    );
  }

  return (
    <Styled.Container
      onPress={onPress}
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      { title }
    </Styled.Container>
  );
}

export default ThemeButton;
