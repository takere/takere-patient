import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import IHandler from '../../../models/IHandler';
import {Requests} from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';

const ExplanationHandler = ({data, onUpdateData}: IHandler) => {
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
        Total pages: {data.node.results.pages.length}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.pages[0]}
      </Text>
    </>
  );
};

export default ExplanationHandler;
