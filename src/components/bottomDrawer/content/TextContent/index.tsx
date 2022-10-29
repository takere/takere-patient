/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import Tooltip from '../../../Tooltip';
import HandleSubmitProps from '../../HandleSubmit';
import LocaleService from '../../../../services/locale.service';
import BoardService from '../../../../services/board.service';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const TextContent = ({data, onUpdateData}: any) => {
  const toast = useToast();
  const boardService = new BoardService();

  const name = data.node.arguments[0];
  const description = data.node.arguments[1];
  const content = data.node.arguments[2];

  const handleSub = async () => {
    toast.show({
      description: localeService.translate("SAVING_CHANGES"),
    });
    await boardService.postBoardResponse(data.id);
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
      <HandleSubmitProps onClick={handleSub} />
    </>
  );
};

export default TextContent;
