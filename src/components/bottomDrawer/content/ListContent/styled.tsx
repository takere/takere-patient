/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Box, Button, HStack, VStack } from 'native-base';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const VerticalList = styled(VStack)`
  width: 100%;
  padding: 10px;
`;

export const HorizontalList = styled(HStack)`
  justify-content: space-between;
`;

export const ParameterContent = styled(Box)`
  width: 85%;
`;

export const ParameterValue = styled(Text)`
  width: 90%;
`;
