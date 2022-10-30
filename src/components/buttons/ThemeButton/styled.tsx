/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import { Button } from 'native-base';
import theme from '../../../assets/themes';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Container = styled(Button)`
  display: flex;
  color: ${theme.primary}
`;

