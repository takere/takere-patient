import * as React from 'react';
import {
  Avatar, Box, Button,
  Center,
  Heading,
  HStack,
  Progress,
  ScrollView,
  Text,
  useToast,
  VStack
} from "native-base";
import {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useUser} from '../../context/user';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../resources/colors';

export function MyProgressScreen({navigation}: {navigation: any}) {
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');


  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView marginX={3}>
          <VStack space={2} mt={4}>
            <ProgressCard
              bgColor={'#111'}
              name={'QUIZ'}
              completed={1}
              remaining={3}
            />
            <ProgressCard
              bgColor={'#111'}
              name={'QUIZ'}
              completed={1}
              remaining={3}
            />
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const ProgressCard = ({ name, completed, remaining, bgColor }: any) => (
  <HStack p="5" rounded="8" bgColor={bgColor} justifyContent='space-between'>
    <HStack justifyContent='center'>
      <Box justifyContent='center' alignItems='center'>
        <Icon name='help' size={30} color="#fff" />
      </Box>
      <Text fontSize={18} color="cyan.50" fontWeight="medium" ml={5}>
        { name }
      </Text>
      <Text fontSize={18} color="cyan.50" fontWeight="medium" ml={5}>
        ({completed}/{remaining})
      </Text>
    </HStack>
    <Center w="60%">
      <Box w="90%" maxW="140">
        <Progress size="md" bg='coolGray.300' _filledTrack={{ bg: colors.success }} value={(completed/remaining) * 100} />
      </Box>
    </Center>
  </HStack>
);
