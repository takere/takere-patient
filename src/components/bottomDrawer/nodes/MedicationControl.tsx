import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import IHandler from '../../../models/IHandler';
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

  return (
    <>
      <Heading size="xl" ml={3} mt={1} color="muted.800">
        {data.node.results.name ?? 'Name'}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.description ?? 'Desc'}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.why}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.notes}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.dosage}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.beginDate}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.endDate}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.undefinedEnd}
      </Text>
    </>
  );
};

export default MedicationControlHandler;
