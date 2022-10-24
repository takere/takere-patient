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
const SuccessButton = ({ title, onPress, isDisabled, isLoading }: Button) => (
  <Styled.Container
    size="lg"
    colorScheme="success"
    onPress={onPress}
    isDisabled={isDisabled}
    isLoading={isLoading}
  >
    { title }
  </Styled.Container>
);

export default SuccessButton;
