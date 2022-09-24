import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';

const FormContent = ({data, onUpdateData}: any) => {
  const toast = useToast();

  const name = data.node.arguments[0];
  const description = data.node.arguments[1];
  const content = data.node.arguments[2];

  return (
    <>
      <Heading size="xl"mt={1} color="muted.800">
        {name}
      </Heading>
      <Heading size="sm"  mt={1}>
        {description}
      </Heading>
      <Text mt={1}>
        {content}
      </Text>
    </>
  );
};

export default FormContent;
