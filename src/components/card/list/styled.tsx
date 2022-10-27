/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { VStack, Heading } from 'native-base';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const List = styled(VStack)`
  margin-top: 10px;
  align-items: center;
`;

export const HeaderTitle = styled(Heading)`
  text-align: center;
  font-size: 16px;
`;
