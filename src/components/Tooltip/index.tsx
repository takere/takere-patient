import React from 'react';
import { Text } from 'native-base';
import RnTooltip from 'rn-tooltip';
import ITooltip from '../../models/ITooltip';
import * as Style from './style';

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
