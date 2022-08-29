import * as React from 'react';
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
import {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useUser} from '../../context/user';
import {Dimensions} from 'react-native';

export function HomeScreen({navigation}: {navigation: any}) {
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');


  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Heading size="lg" ml={3} mb={5} mt={5}>
          Takere APP
        </Heading>
        <ScrollView marginX={3}>
          <Pressable
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <HStack space={2} alignItems="center">
              <Avatar
                bg="cyan.500"
                source={{
                  uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                }}>
                {user.user?.data?.firstName.substring(0, 2).toUpperCase()}
              </Avatar>
              <Heading size="lg">
                {user.user?.data?.firstName}
              </Heading>
            </HStack>
          </Pressable>
          <VStack>
            <HStack space={2} mt={4} justifyContent="space-between" alignItems='center'>
              <MenuButton 
                title='Board'
                bgColor='#49a9ff'
                icon="dynamic-feed"
                width={width}
                onPress={() => navigation.navigate('Board')}
              />
              <MenuButton 
                title='My progress'
                bgColor='#34a853'
                icon="domain-verification"
                width={width}
                onPress={() => {}}
              />
            </HStack>
            <HStack space={2} mt={4} justifyContent="space-between" alignItems='center'>
              <MenuButton 
                title='Profile'
                bgColor='#db594f'
                icon="account-circle"
                width={width}
                onPress={() => {}}
              />
              <MenuButton 
                title='Calendar'
                bgColor='#f974bc'
                icon="calendar-today"
                width={width}
                onPress={() => {}}
              />
            </HStack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const MenuButton = ({ width, title, bgColor, icon, onPress }: any) => (
  <Button 
    backgroundColor={bgColor} 
    onPress={onPress}
    flex={1}
    p={0}
  >
    <VStack 
      flex={1}
      height={width/2 - 20} 
      justifyContent='space-between' 
      alignItems='center'
    >
      <Box justifyContent='center' paddingTop={30} flex={1}>
        <Icon name={icon} size={50} />
      </Box>
      <Text marginBottom={5}>
        { title }
      </Text>
    </VStack>
  </Button>
);
