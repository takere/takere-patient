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
const TextAreaInput = ({ value, onChange, placeholder }: any) => (
  <Styled.Container
    value={value}
    onChangeText={onChange}
    size="2xs"
    placeholder={placeholder}
    multiline={true}
  />
);

export default TextAreaInput;
