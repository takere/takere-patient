/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {Pressable, Text, Box, HStack, Spacer, Flex} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ptBR} from 'date-fns/locale';
import ICard from '../../models/ICard';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export const Card = ({
  id,
  name,
  description,
  node,
  finished: finished,
  onOpen,
}: any) => {
  return (
    <Pressable
      w="100%"
      pl={2}
      pr={2}
      onPress={() => onOpen({name, description, finished: finished, id, node})}>
      <Flex p="5" rounded="8" bg={node?.color} direction='row' justifyContent='space-between'>
        <Box>
          <HStack alignItems="flex-start">
            <Text fontSize={12} color="cyan.50" fontWeight="medium">
              {node?.name.toUpperCase()}
            </Text>
            <Spacer />
            <Text fontSize={10} color="cyan.100">
              {finished.at &&
                formatDistanceToNow(new Date(finished.at), {
                  locale: ptBR,
                })}
            </Text>
          </HStack>
          <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={18}>
            {node?.arguments[0]}
          </Text>
          <Text mt="2" fontSize={14} color="cyan.100" overflow='scroll'>
            {node?.arguments[1]}
          </Text>
        </Box>
        <Box justifyContent='center' alignItems='center'>
          <Icon name={node?.icon} size={30} color="#fff" />
        </Box>
      </Flex>
    </Pressable>
  );
};
