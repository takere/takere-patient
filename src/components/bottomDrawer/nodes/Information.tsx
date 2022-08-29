import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import IHandler from '../../../models/IHandler';

const InformationHandler = ({data, onUpdateData}: IHandler) => {
  const toast = useToast();

  return (
    <>
      <Heading size="xl"mt={1} color="muted.800">
        {data.node.results.name ?? 'NAME'}
      </Heading>
      <Heading size="sm"  mt={1}>
        {data.node.results.description ?? 'DESC'}
      </Heading>
      <Text mt={1}>
        {data.node.results.content}
      </Text>
    </>
  );
};

export default InformationHandler;
