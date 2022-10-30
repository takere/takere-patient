/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Box, Heading } from 'native-base';
import { SafeAreaView } from 'react-native';
import theme from '../../../assets/themes';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Container = styled(SafeAreaView)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 350px;
  background-color: rgba(${theme.lightRgba},0.5);
  border-radius: 10px;
  margin: 0 20px;
  border: 1px solid #ccc;
`;

export const Inputs = styled(Box)`
  display: flex;
`;

export const Title = styled(Heading)`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 2px;
  color: #333;
`;
