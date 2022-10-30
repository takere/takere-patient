/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import SubmitButtonProps from '../../../models/submit-button-props.model';
import HandleSubmit from '../../bottomDrawer/HandleSubmit';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SubmitButton = ({ display, onClick }: SubmitButtonProps) => {
  if (!display) {
    return (
      <></>
    );
  }

  return (
    <HandleSubmit onClick={onClick} />
  );
}

export default SubmitButton;
