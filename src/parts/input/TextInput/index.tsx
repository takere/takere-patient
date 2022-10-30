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
const TextInput = ({ value, onChange, placeholder, type }: any) => (
  <Styled.Container
    value={value}
    onChangeText={onChange}
    size="2xl"
    placeholder={placeholder}
    type={type}
  />
);

export default TextInput;
