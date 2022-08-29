import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import IHandler from '../../../models/IHandler';
import {Requests} from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';

const ReminderHandler = ({data, onUpdateData}: IHandler) => {
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
      <Heading size="xl" mt={1} color="muted.800">
        {data.node.results.name ?? 'NAME'}
      </Heading>
      <Heading size="sm"  mt={1}>
        {data.node.results.description ?? 'DESC'}
      </Heading>
      <Text mt={1}>
        {data.node.results.content}
      </Text>
      
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

export default ReminderHandler;
