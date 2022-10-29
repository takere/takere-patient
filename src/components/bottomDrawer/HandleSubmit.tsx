/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { useState} from 'react';
import HandleSubmitProps from '../../models/handle-submit-props.model';
import LocaleService from '../../services/locale.service';
import SuccessButton from '../buttons/SuccessButton';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const HandleSubmit = ({ onClick }: HandleSubmitProps) => {

  const [value, setValue] = useState<boolean>(false);

  return (
    <SuccessButton
      isLoading={value}
      isDisabled={value}
      title={localeService.translate("FINISH")}
      onPress={() => handleSubmit(setValue, onClick)}
    />
  );
};

export default HandleSubmit;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleSubmit(setValue: any, onClick: any) {
  setValue(true);
  onClick();
}