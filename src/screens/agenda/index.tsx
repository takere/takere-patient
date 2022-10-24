/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import * as Styled from './styled';
import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  useToast,
  Spinner,
  VStack,
  Image,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import {useUser} from '../../providers/user';
import {Dimensions} from 'react-native';
import ICard from '../../models/ICard';
import {MiniCard} from '../../components/MiniCard';
import theme from '../../assets/themes';
import LocaleService from '../../services/locale.service';
import AgendaService from '../../services/agenda.service';
import Screen from '../../models/screen.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const agendaService = new AgendaService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const AgendaScreen = ({ navigation }: Screen) => {
  const [agenda, setAgenda] = useState({today: [], tomorrow: []});
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const user = useUser();
  const {width} = Dimensions.get('window');

  const handleOpenCard = (flowId: any, nodeId: any) => {};

  useEffect(() => {
    const getData = async () => {
      const response = await agendaService.getAgenda(user.user.email);
      setAgenda(response);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          source={require('../../assets/images/agenda.jpg')}
          alt={localeService.translate('AGENDA_IMAGE')}
        />
        {loading && <Spinner size="lg" color={theme.primary} mt={20} />}
        {!loading && (
          <ScrollView marginX={3}>
            <Box
              mt={5}
              borderRadius={10}
              p={5}
              backgroundColor="rgba(0,0,0,0.3)">
              <Heading size="md" ml={3} color={theme.light}>
                {localeService.translate('TODAY')}
              </Heading>
              <VStack space={2} mt={4} alignItems="center">
                {agenda.today.map((item: any, index: number) => (
                  <MiniCard
                    key={index}
                    onPress={() => handleOpenCard(item.flow.id, item.node.id)}
                    name={item.node.name.toUpperCase()}
                    icon={item.node.icon}
                    bgColor={theme.danger}
                  />
                ))}
              </VStack>
            </Box>

            <Box
              mt={5}
              borderRadius={10}
              p={5}
              backgroundColor="rgba(0,0,0,0.3)">
              <Heading size="md" ml={3} color={theme.light}>
                {localeService.translate('TOMORROW')}
              </Heading>
              <VStack space={2} mt={4} alignItems="center">
                {agenda.tomorrow.map((item: any, index: number) => (
                  <MiniCard
                    key={index}
                    onPress={() => handleOpenCard(item.flow.id, item.node.id)}
                    name={item.node.name.toUpperCase()}
                    icon={item.node.icon}
                    bgColor={theme.warning}
                  />
                ))}
              </VStack>
            </Box>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

export default AgendaScreen;
