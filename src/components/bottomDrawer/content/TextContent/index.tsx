/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import { useToast } from 'native-base';
import HandleSubmitProps from '../../HandleSubmit';
import LocaleService from '../../../../services/locale.service';
import BoardService from '../../../../services/board.service';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const boardService = new BoardService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const TextContent = ({ data, onUpdateData }: any) => {

  const toast = useToast();
  const name = data.node.arguments[0];
  const description = data.node.arguments[1];
  const content = data.node.arguments[2];

  return (
    <>
      <Styled.Title size="xl">
        {name}
      </Styled.Title>
      <Styled.Subtitle size="sm">
        {description}
      </Styled.Subtitle>
      <Styled.Body>
        {content}
      </Styled.Body>
      <HandleSubmitProps onClick={() => handleSub(toast, data, onUpdateData)} />
    </>
  );
};

export default TextContent;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function handleSub(toast: any, data: any, onUpdateData: any) {
  toast.show({
    description: localeService.translate("SAVING_CHANGES"),
  });
  await boardService.postBoardResponse(data.id);
  onUpdateData();
}