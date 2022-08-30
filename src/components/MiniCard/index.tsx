import React from 'react';
import {Pressable, Text, Box, HStack, Spacer, Flex} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MiniCard = ({
  id,
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
        <Box justifyContent='center' alignItems='center' marginRight={5}>
          <Icon name={icon} size={30} color="#fff" />
        </Box>
      </Flex>
    </Pressable>
  );
};
