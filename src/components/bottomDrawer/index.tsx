/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import LocaleService from '../../services/locale.service';
import { contentFactory } from './content';
import BottomDrawerProps from '../../models/bottom-drawer-props.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BottomDrawer = ({ board, onUpdateData }: BottomDrawerProps) => (
  <Styled.Container>
    <Styled.Title size="lg">
      {localeService.translate("CARE_PLAN")}: {board.name}
    </Styled.Title>
    <Styled.Subtitle size="sm">
      {board.description}
    </Styled.Subtitle>
    <Styled.Body>
      <Content board={board} onUpdateData={onUpdateData} />
    </Styled.Body>
  </Styled.Container>
);

export default BottomDrawer;

const Content = ({ board, onUpdateData }: BottomDrawerProps) => {
  const type = board.node.content_type.toUpperCase();

  return contentFactory(type, { onUpdateData, data: board });
}
