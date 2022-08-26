import React from 'react';
import {Pressable, Text, Box, HStack, Spacer} from 'native-base';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ptBR} from 'date-fns/locale';

export interface ICard {
  onOpen: (data: Omit<ICard, 'onOpen'>) => {};
  id: string;
  name: string;
  description: string;
  executed: {
    id: string;
    executedAt: string;
    result: any;
  };
  node: {
    id: string;
    icon: string;
    type: string;
    results: any;
  };
}

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
      <Box p="5" rounded="8" bg="darkBlue.500">
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
          {name}
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          {description}
        </Text>
      </Box>
    </Pressable>
  );
};
