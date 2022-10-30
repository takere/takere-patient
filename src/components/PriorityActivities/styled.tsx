/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Heading, ScrollView, VStack, Box } from "native-base";
import theme from '../../assets/themes';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const ActivityList = styled(ScrollView)`
  margin: 5px 0;
`;

export const CardList = styled(VStack)`
  margin: 0 5px;
  margin-top: 10px;
  align-items: center;
`;

export const ActivityContainer = styled(Box)`
  margin: 20px;
  border-radius: 10px;
  padding: 5px;
  background-color: rgba(0,0,0,0.3);
`;

export const ActivityTitle = styled(Heading)`
  margin: 0 20px;
  margin-top: 10px;
  color: ${theme.light}
`;
