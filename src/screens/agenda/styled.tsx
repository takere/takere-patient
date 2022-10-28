/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Image } from "native-base";


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Background = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
