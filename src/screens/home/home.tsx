import * as React from 'react';
import {
  Avatar, Box, Button,
  Center,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  useToast,
  VStack
} from "native-base";
import {useEffect, useRef, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useUser} from '../../providers/user';
import {Dimensions} from 'react-native';
import colors from '../../resources/colors';
import LocaleService from '../../services/locale.service';

const localeService = new LocaleService();

export function HomeScreen({navigation}: {navigation: any}) {
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');
  

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Image 
          style={{ height: '100%', width: '100%', position: 'absolute', top:0, left:0 }}
          source={require('../../assets/images/peace.jpg')}
          alt={localeService.translate("PEACE_IMAGE")}
        />
        <ScrollView marginX={3}>
          <Box h={60} w='100%' mb={5} mt={5}>
          <Image 
            style={{ display: 'flex', height: 50, resizeMode: 'contain'}}
            source={require('../../assets/images/logo.png')}
            alt='takere logo'
          />

        </Box>
          <VStack>
            <HStack space={2} justifyContent="space-between" alignItems='center'>
              <MenuButton 
                title={localeService.translate("BOARD")}
                bgColor={colors.primary}
                icon="dynamic-feed"
                width={width}
                onPress={() => navigation.navigate('Board')}
              />
              <MenuButton 
                title={localeService.translate("MY_PROGRESS")}
                bgColor={colors.primary}
                icon="domain-verification"
                width={width}
                onPress={() => navigation.navigate('MyProgress')}
              />
            </HStack>
            <HStack space={2} mt={2} justifyContent="space-between" alignItems='center'>
              <MenuButton 
                title={localeService.translate("PROFILE")}
                bgColor={colors.primary}
                icon="account-circle"
                width={width}
                onPress={() => navigation.navigate('Profile')}
              />
              <MenuButton 
                title={localeService.translate("AGENDA")}
                bgColor={colors.primary}
                icon="calendar-today"
                width={width}
                onPress={() => navigation.navigate('Agenda')}
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
        <Icon name={icon} size={50} color='#fff' />
      </Box>
      <Text marginBottom={5} color='#fff' fontWeight='bold' fontSize={16}>
        { title }
      </Text>
    </VStack>
  </Button>
);
