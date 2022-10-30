/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const TakereHeader = () => (
  <Styled.Container>
    <Styled.Logo 
      source={require('../../../assets/images/logo.png')}
      alt='takere logo'
    />
  </Styled.Container>
);

export default TakereHeader;
