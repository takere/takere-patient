/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import Button from '../../../models/button.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const DangerButton = ({ title, onPress }: Button) => (
  <Styled.Container
    size="lg"
    colorScheme="error"
    onPress={onPress}
  >
    { title }
  </Styled.Container>
);

export default DangerButton;
