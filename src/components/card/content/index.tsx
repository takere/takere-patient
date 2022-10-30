/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Modalize } from 'react-native-modalize';
import CardContentProps from '../../../models/card-content-props.model';
import BottomDrawer from '../../bottomDrawer';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CardContent = ({ modalRef, selectedBoard, onUpdateData }: CardContentProps) => {
  if (!selectedBoard) {
    return (
      <></>
    );
  }

  return (
    <Modalize ref={modalRef} modalTopOffset={90} >
      <BottomDrawer onUpdateData={onUpdateData} board={selectedBoard} />
    </Modalize>
  );
}

export default CardContent;
