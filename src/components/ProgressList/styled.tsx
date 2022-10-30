/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components/native';
import {
    Box,
    Center,
    HStack,
    ScrollView,
    Text,
    VStack
  } from "native-base";


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const List = styled(ScrollView)`
  margin: 0 5px;
`;

export const CardsArea = styled(Box)`
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0,0,0,0.3);
`;

export const CardList = styled(VStack)`
  margin-top: 5px;
`;

export const Card = styled(HStack)`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const IconArea = styled(Box)`
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const CardHeader = styled(Box)`
  justify-content: flex-start;
`;

export const CardTitle = styled(Text)`
  font-size: 18px;
  color: cyan;
`;

export const CardBody = styled(Box)`
  justify-content: space-between;
`;

export const ProgressBarContainer = styled(Center)`
  width: 70%;
`;

export const ProgressBarArea = styled(Box)`
  width: 100%;
  max-width: 240px;
`;

export const ProgressRatio = styled(Text)`
  font-size: 14px;
  color: cyan;
`;