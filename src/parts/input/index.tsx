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
const Input = ({ value, onChange, placeholder }: any) => (
  <Styled.Container
    value={value}
    onChangeText={onChange}
    size="2xl"
    placeholder={placeholder}
  />
);

export default Input;