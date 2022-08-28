import React from 'react';
import {Button, Heading, Text, Input, useToast, Divider, HStack, VStack, Tooltip } from 'native-base';
import IHandler from '../../../models/IHandler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Requests} from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';

const MedicationControlHandler = ({data, onUpdateData}: IHandler) => {
  const toast = useToast();
  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  const beginDate = formatDateHour(new Date(data.node.results.beginDate))
  let endDate;

  if (data.node.results.undefinedEnd) {
    endDate = 'Undefined';
  }
  else {
    endDate = formatDateHour(new Date(data.node.results.endDate));
  }

  return (
    <>
      <Heading size="xl" ml={3} mt={1} color="muted.800">
        {data.node.results.name ?? 'Name'}
      </Heading>
      <VStack space={3} divider={<Divider />} w="100%" p='10'>
        <HStack justifyContent="space-between">
          <Text>{data.node.results.description ?? 'Desc'}</Text>
          <Icon name="notes" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Text>{data.node.results.why}</Text>
          <Icon name="help" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Text>{data.node.results.notes}</Text>
          <Icon name="comment" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Text>{data.node.results.dosage}</Text>
          <Icon name="medical-services" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Text>{beginDate}</Text>
          <Icon name="play-arrow" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Text>{endDate}</Text>
          <Icon name="stop" size={30} />
        </HStack>
      </VStack>
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

export default MedicationControlHandler;

function formatDateHour(date: Date): string {
  const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  const formattedHour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
  return (formattedDate + ' ' + formattedHour);
}
