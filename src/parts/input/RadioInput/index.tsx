/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Radio } from 'native-base';
import * as Styled from './styled';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const RadioInput = ({ value, onChange, options }: any) => (
  <Radio.Group name="radio" value={value} onChange={onChange}>
    {options.map((option: any, index: any) => (
      <Styled.RadioBody value={index} key={index}>
        {option}
      </Styled.RadioBody>
    ))}
  </Radio.Group>
);

export default RadioInput;
