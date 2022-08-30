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
import {useUser} from '../../context/user';
import {Dimensions} from 'react-native';

export function MyProgressScreen({navigation}: {navigation: any}) {
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');


  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Heading size="lg" ml={3} mb={5} mt={5}>
          My progress
        </Heading>
        <ScrollView marginX={3}>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
