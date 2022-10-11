import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import { Requests } from '../../../../services/axios/remoteRequests';
import Tooltip from '../../../Tooltip';
import HandleSubmit from '../../HandleSubmit';
import LocaleService from '../../../../services/locale.service';

const localeService = new LocaleService();

const TextContent = ({data, onUpdateData}: any) => {
  const toast = useToast();

  const name = data.node.arguments[0];
  const description = data.node.arguments[1];
  const content = data.node.arguments[2];

  const handleSub = async () => {
    toast.show({
      description: localeService.translate("SAVING_CHANGES"),
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

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
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

export default TextContent;
