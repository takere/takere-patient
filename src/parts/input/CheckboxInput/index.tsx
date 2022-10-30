/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Checkbox } from 'native-base';
import * as Styled from './styled';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CheckboxInput = ({ value, onChange, options }: any) => (
  <Checkbox.Group value={value} onChange={onChange}>
    {options.map((option: any, index: any) => (
      <Styled.CheckboxBody value={index} key={index}>
        {option}
      </Styled.CheckboxBody>
    ))}
  </Checkbox.Group>
);

export default CheckboxInput;
