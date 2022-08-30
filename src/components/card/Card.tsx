import React from 'react';
import {Pressable, Text, Box, HStack, Spacer, Flex} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ptBR} from 'date-fns/locale';
import ICard from '../../models/ICard';

export const Card = ({
  id,
  name,
  description,
  node,
  executed,
  onOpen,
}: ICard) => {
  return (
    <Pressable
      w="100%"
      pl={2}
      pr={2}
      onPress={() => onOpen({name, description, executed, id, node})}>
      <Flex p="5" rounded="8" bg={node.bgColor} direction='row' justifyContent='space-between'>
        <Box>
          <HStack alignItems="flex-start">
            <Text fontSize={12} color="cyan.50" fontWeight="medium">
              {node.type.toUpperCase()}
            </Text>
            <Spacer />
            <Text fontSize={10} color="cyan.100">
              {executed.executedAt &&
                formatDistanceToNow(new Date(executed.executedAt), {
                  locale: ptBR,
                })}
            </Text>
          </HStack>
          <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
            Care plan: {name}
          </Text>
          <Text mt="2" fontSize={14} color="cyan.100">
            {description}
          </Text>
        </Box>
        <Box justifyContent='center' alignItems='center'>
          <Icon name={node.icon === 'question' ? 'help' : node.icon} size={30} color="#fff" />
        </Box>
      </Flex>
    </Pressable>
  );
};
