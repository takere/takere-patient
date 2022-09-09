import React from 'react';
import {
  Button,
  Heading,
  Text,
  Input,
  useToast,
  Divider,
  HStack,
  VStack,
  Box,
} from 'native-base';
import IHandler from '../../../models/IHandler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Requests } from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';
import Tooltip from '../../Tooltip';

const MedicationControlHandler = ({ data, onUpdateData }: IHandler) => {
  const toast = useToast();
  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  const beginDate = formatDateHour(new Date(data.node.results.beginDate));
  let endDate;

  if (data.node.results.undefinedEnd) {
    endDate = 'Undefined';
  } else {
    endDate = formatDateHour(new Date(data.node.results.endDate));
  }

  return (
    <>
      <Heading fontSize={30} color="muted.800">
        {data.node.results.name ?? 'Name'}
      </Heading>
      <VStack space={3} divider={<Divider />} w="100%" p="10">
        <HStack justifyContent="space-between">
          <Tooltip label="Description">
            <Text>
              {data.node.results.description ?? 'Desc'}
            </Text>
          </Tooltip>
          <Icon name="notes" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Box w='85%'>
            <Tooltip label='Why'>
              <Text w='90%'>
                {data.node.results.why}
              </Text>
            </Tooltip>
          </Box>
          <Icon name="help" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Box w='85%'>
            <Tooltip label='Notes'>
              <Text w='90%'>
                {data.node.results.notes}
              </Text>
            </Tooltip>
          </Box>
          <Box>
            <Icon name="comment" size={30} />
          </Box>
        </HStack>
        <HStack justifyContent="space-between">
          <Tooltip label='Dosage'>
            <Text>
              {data.node.results.dosage}
            </Text>
          </Tooltip>
          <Icon name="medical-services" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Tooltip label='Begin date'>
            <Text>
              {beginDate}
            </Text>
          </Tooltip>
          <Icon name="play-arrow" size={30} />
        </HStack>
        <HStack justifyContent="space-between">
          <Tooltip label='End date'>
            <Text>
              {endDate}
            </Text>
          </Tooltip>
          <Icon name="stop" size={30} />
        </HStack>
      </VStack>
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

export default MedicationControlHandler;

function formatDateHour(date: Date): string {
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1
    }/${date.getFullYear()}`;
  const formattedHour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return formattedDate + ' ' + formattedHour;
}
