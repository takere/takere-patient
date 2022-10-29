/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import {
  Box,
  Text,
  Flex,
  Pressable,
  HStack
} from "native-base";


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const TouchableArea = styled(Pressable)`
  width: 100%;
  padding: 0 3px;
`;

export const Container = styled(Flex)<{ bgColor: string }>`
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props: any) => props.bgColor}
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled(HStack)`
  align-items: flex-start;
`;

export const Title = styled(Text)`
  font-size: 12px;
  color: #444;
  font-weight: medium;
`;

export const Subtitle = styled(Text)`
  font-size: 10px;
  color: #aaa;
  font-weight: medium;
`;

export const Name = styled(Text)`
  font-size: 18px;
  color: #444;
  font-weight: medium;
`;

export const Description = styled(Text)`
  font-size: 14px;
  color: #aaa;
  margin-top: 5px;
  overflow: scroll;
`;

export const IconContainer = styled(Box)`
  justify-content: center;
  align-items: center;
`;
