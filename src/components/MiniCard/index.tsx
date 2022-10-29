/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const MiniCard = ({
  name,
  icon,
  bgColor,
  onPress,
}: any) => {
  return (
    <Styled.TouchableArea onPress={onPress}>
      <Styled.Body bgColor={bgColor}>
        <Styled.Header>
          <Styled.Title>
            {name}
          </Styled.Title>
        </Styled.Header>
        <Styled.IconContainer>
          <Icon name={icon} size={30} color="#fff" />
        </Styled.IconContainer>
      </Styled.Body>
    </Styled.TouchableArea>
  );
};

