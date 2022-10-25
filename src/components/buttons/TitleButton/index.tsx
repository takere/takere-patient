/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Icon } from 'native-base';
import * as Styled from './styled';
import IconButton from '../../../models/icon-button.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const TileButton = ({ title, onPress, icon }: IconButton) => (
  <Styled.Container
    onPress={onPress}
  >
    <Styled.Body>
      <Styled.IconContainer>
        <Icon name={icon} size={50} color='#fff' />
      </Styled.IconContainer>
      <Styled.Title>
        { title }
      </Styled.Title>
    </Styled.Body>
  </Styled.Container>
);

export default TileButton;
