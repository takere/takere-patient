import React, { useEffect, useState } from 'react';
import {
  Avatar, Box, Button,
  Center,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  useToast,
  VStack
} from "native-base";
import {SafeAreaView} from 'react-native';
import {useUser} from '../../context/user';
import {Dimensions} from 'react-native';
import ICard from '../../models/ICard';
import { MiniCard } from '../../components/MiniCard';
import colors from '../../resources/colors';

export function AgendaScreen({navigation}: {navigation: any}) {
  const [agenda, setAgenda] = useState([]);
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');

  const handleOpenCard = (data: Omit<ICard, 'onOpen'>) => {
    console.log(data);
  };

  // useEffect(() => {
  //   setAgenda([{
  //     id: 1,
  //     type: 'MEDICATION CONTROL',
  //     icon: 'healing',
  //     bgColor: 'red'
  //   }]);
  // }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Heading size="lg" ml={3} mb={5} mt={5}>
          Agenda
        </Heading>
        <ScrollView marginX={3}>
          <Heading size="md" ml={3} mt={5}>
            Today
          </Heading>
          <VStack space={2} mt={4} alignItems="center">
            <MiniCard 
              onPress={handleOpenCard} 
              id={'1'}
              name={'MEDICATION CONTROL'}
              icon='healing'
              bgColor={colors.danger}
            />
            <MiniCard 
              onPress={handleOpenCard} 
              id={'1'}
              name={'MEDICATION CONTROL'}
              icon='healing'
              bgColor={colors.danger}
            />
          </VStack>

          <Heading size="md" ml={3} mt={5}>
            Tomorrow
          </Heading>
          <VStack space={2} mt={4} alignItems="center">
            <MiniCard 
              onPress={handleOpenCard} 
              id={'1'}
              name={'MEDICATION CONTROL'}
              icon='healing'
              bgColor={colors.warning}
            />
          </VStack>

          <Heading size="md" ml={3} mt={5}>
            Further up
          </Heading>
          <VStack space={2} mt={4} alignItems="center">
            <MiniCard 
              onPress={handleOpenCard} 
              id={'1'}
              name={'MEDICATION CONTROL'}
              icon='healing'
              bgColor={colors.cold}
            />
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
