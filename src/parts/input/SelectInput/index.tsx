/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Select } from 'native-base';
import * as Styled from './styled';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SelectInput = ({ value, onChange, options }: any) => (
  <Select selectedValue={value} onValueChange={onChange}>
    {options.map((option: any, index: any) => (
      <Styled.SelectBody value={index} key={index} label={option} />
    ))}
  </Select>
);

export default SelectInput;
