/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Dimensions } from 'react-native';
import { Box, Heading } from 'native-base';
import styled from 'styled-components/native';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const { height } = Dimensions.get('window');


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Title = styled(Heading)`
  margin-left: 5px;
  margin-top: 10px;
`;

export const Subtitle = styled(Heading)`
  margin-left: 5px;
  margin-top: 2px;
  margin-bottom: 10px;
  color: #aaa;
`;

export const Body = styled(Box)`
  padding: 0 5px;
  height: ${height - 138}
`;

export const Container = styled(Box)`
  padding: 15px;
`;
