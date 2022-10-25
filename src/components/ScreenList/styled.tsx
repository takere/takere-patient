/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { HStack, ScrollView } from "native-base";


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Row = styled(HStack)`
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled(ScrollView)`
  margin: 0 5px;
`;
