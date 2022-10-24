/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Pressable, Text, Box, Flex } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const MiniCard = ({
  name,
  icon,
  bgColor,
  onPress,
}: any) => {
  return (
    <Pressable
      w="100%"
      pl={2}
      pr={2}
      onPress={onPress}>
      <Flex p="5" rounded="8" bg={bgColor} direction='row' justifyContent='space-between' borderRadius={10}>
        <Box justifyContent='center'>
          <Text fontSize={18} color="cyan.50" fontWeight="medium">
            {name}
          </Text>
        </Box>
        <Box justifyContent='center' alignItems='center'>
          <Icon name={icon} size={30} color="#fff" />
        </Box>
      </Flex>
    </Pressable>
  );
};

