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
  VStack,
  Image
} from "native-base";
import {SafeAreaView} from 'react-native';
import {useUser} from '../../providers/user';
import {Dimensions} from 'react-native';
import ICard from '../../models/ICard';
import { MiniCard } from '../../components/MiniCard';
import {Requests} from '../../services/axios/remoteRequests';
import colors from '../../resources/colors';
import LocaleService from '../../services/locale.service';

const localeService = new LocaleService();

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
      const response = await new Requests().getAgenda(user.user.email);
      setAgenda(response);
      setLoading(false);
    };
    
    getData();
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Image 
          style={{ height: '100%', width: '100%', position: 'absolute', top:0, left:0 }}
          source={require('../../assets/images/agenda.jpg')}
          alt={localeService.translate("AGENDA_IMAGE")}
        />
        {loading &&
          <Spinner size="lg" color={colors.primary} mt={20} />
        }
        {!loading &&
          <ScrollView marginX={3}>
            <Box mt={5} borderRadius={10} p={5} backgroundColor='rgba(0,0,0,0.3)'>
              <Heading size="md" ml={3} color={colors.light}>
              {localeService.translate("TODAY")}
              </Heading>
              <VStack space={2} mt={4} alignItems="center">
                {agenda.today.map((item: any, index: number) => (
                  <MiniCard 
                    key={index}
                    onPress={() => handleOpenCard(item.flow.id, item.node.id)}
                    name={item.node.name.toUpperCase()}
                    icon={item.node.icon}
                    bgColor={colors.danger}
                  />
                ))}
              </VStack>
            </Box>

            <Box mt={5} borderRadius={10} p={5} backgroundColor='rgba(0,0,0,0.3)'>
              <Heading size="md" ml={3} color={colors.light}>
              {localeService.translate("TOMORROW")}
              </Heading>
              <VStack space={2} mt={4} alignItems="center">
                {agenda.tomorrow.map((item: any, index: number) => (
                  <MiniCard 
                    key={index}
                    onPress={() => handleOpenCard(item.flow.id, item.node.id)}
                    name={item.node.name.toUpperCase()}
                    icon={item.node.icon}
                    bgColor={colors.warning}
                  />
                ))}
              </VStack>
            </Box>
          </ScrollView>
        }
      </SafeAreaView>
    </>
  );
}
