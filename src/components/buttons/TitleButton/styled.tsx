/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Button, Text, Box, VStack } from 'native-base';
import theme from '../../../assets/themes';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const { width } = Dimensions.get('window');


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Container = styled(Button)`
  height: ${width/2 - 20};
  width: ${width/2 - 20};
  padding: 0;
  background-color: ${theme.primary}
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  margin-bottom: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const IconContainer = styled(Box)`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 5px;
  flex: 2;
`;

export const Body = styled(VStack)`
  flex: 1;
  align-items: center;
  padding: 15px 0;
`;
