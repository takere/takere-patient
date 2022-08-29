import React, { useState } from 'react';
import {Button, Heading, Text, Input, useToast, Divider, HStack} from 'native-base';
import IHandler from '../../../models/IHandler';
import {Requests} from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';

const ExplanationHandler = ({data, onUpdateData}: IHandler) => {

  const [currentPage, setCurrentPage] = useState(0);

  const pages = data.node.results.pages;
  const toast = useToast();

  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  const handleNext = () => {
    if (currentPage + 1 >= pages.length) {
      return;
    }

    setCurrentPage(currentPage+1);
  }

  const handleBack = () => {
    if (currentPage - 1 < 0) {
      return;
    }
    
    setCurrentPage(currentPage-1);
  }

  return (
    <>
      <Heading size="xl" color="muted.800">
        Explanation ({currentPage+1}/{data.node.results.pages.length})
      </Heading>
      <Text mt={3}>
        {data.node.results.pages[0]}
      </Text>
      <HStack space={3} divider={<Divider />} w="100%" paddingY="10" justifyContent='space-between'>
        <Button onPress={handleBack} display={currentPage - 1 >= 0 ? 'flex' : 'none'}>
          Back
        </Button>
        <Button onPress={handleNext} display={currentPage + 1 < pages.length ? 'flex' : 'none'}>
          Next
        </Button>
      </HStack>
      {currentPage+1 === pages.length &&
        <HandleSubmit onClick={handleSub} />
      }
    </>
  );
};

export default ExplanationHandler;
