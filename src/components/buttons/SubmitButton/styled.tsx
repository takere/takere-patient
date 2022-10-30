/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Heading, HStack } from 'native-base';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Title = styled(Heading)`
  margin-top: 3px;
  color: #333;
`;

export const Subtitle = styled(Heading)`
  margin-top: 3px;
  color: #aaa;
`;

export const NavigationStatus = styled(Heading)`
  margin-top: 3px;
`;

export const HorizontalList = styled(HStack)`
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
`;
