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
  Pressable
} from "native-base";


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const TouchableArea = styled(Pressable)`
  width: 100%;
  padding: 0 3px;
`;

export const Container = styled(Flex)<{ bgColor: string }>`
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: ${(props: any) => props.bgColor}
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled(Box)`
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 18px;
  margin: 5px 0;
  font-weight: bold;
  color: white;
`;

export const IconContainer = styled(Box)`
  justify-content: center;
  align-items: center;
`;
