/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Box, Image } from "native-base";


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Container = styled(Box)`
  width: 100%;
  height: 60px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const Logo = styled(Image)`
  display: flex;
  height: 50px;
  resize-mode: contain;
`;
