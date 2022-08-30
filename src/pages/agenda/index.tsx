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
  Spinner,
  VStack
} from "native-base";
import {SafeAreaView} from 'react-native';
import {useUser} from '../../context/user';
import {Dimensions} from 'react-native';
import ICard from '../../models/ICard';
import { MiniCard } from '../../components/MiniCard';
import {Requests} from '../../services/axios/remoteRequests';
import colors from '../../resources/colors';

export function AgendaScreen({navigation}: {navigation: any}) {
  const [agenda, setAgenda] = useState({today: [], tomorrow: []});
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');

  const handleOpenCard = (flowId: any, nodeId: any) => {

  };

  useEffect(() => {
    const getData = async () => {
      const response = await new Requests().getAgenda(user.user.id);
      setAgenda(response);
      setLoading(false);
    };
    
    getData();

    // setAgenda([{
    //   id: 1,
    //   type: 'MEDICATION CONTROL',
    //   icon: 'healing',
    //   bgColor: 'red'
    // }]);
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {loading &&
          <Spinner size="lg" color={colors.yogurt} mt={20} />
        }
        {!loading &&
          <ScrollView marginX={3}>
            <Heading size="md" ml={3} mt={5}>
              Today
            </Heading>
            <VStack space={2} mt={4} alignItems="center">
              {agenda.today.map((item: any, index: number) => (
                <MiniCard 
                  key={index}
                  onPress={() => handleOpenCard(item.flow.id, item.node.id)}
                  name={item.node.type}
                  icon={item.node.icon}
                  bgColor={colors.danger}
                />
              ))}
            </VStack>

            <Heading size="md" ml={3} mt={5}>
              Tomorrow
            </Heading>
            <VStack space={2} mt={4} alignItems="center">
              {agenda.tomorrow.map((item: any, index: number) => (
                <MiniCard 
                  key={index}
                  onPress={() => handleOpenCard(item.flow.id, item.node.id)}
                  name={item.node.type}
                  icon={item.node.icon}
                  bgColor={colors.warning}
                />
              ))}
            </VStack>
          </ScrollView>
        }
      </SafeAreaView>
    </>
  );
}
