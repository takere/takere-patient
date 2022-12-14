/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Box, Heading } from 'native-base';


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

export const Body = styled(Box)`
  height: 75%;
`;

export const Footer = styled(Box)`
  height: 15%;
  justify-content: space-between;
`;
