/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text } from 'native-base';
import RnTooltip from 'rn-tooltip';
import ITooltip from '../../models/ITooltip';
import * as Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const Tooltip = ({ label, children }: ITooltip) => (
  <RnTooltip 
    actionType='press'
    popover={<TooltipLabel label={label} />}
    containerStyle={Style.container}
    pointerColor={Style.pointerColor}
  >
    { children }
  </RnTooltip>
);

export default Tooltip;

const TooltipLabel = ({ label }: any) => (
  <Text style={Style.label}>
    { label }
  </Text>
);
