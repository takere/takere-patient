/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Button} from 'native-base';
import * as React from 'react';
import {useRef, useState} from 'react';
import HandleSubmit from '../../models/handle-submit.model';
import LocaleService from '../../services/locale.service';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const HandleSubmit = ({onClick}: HandleSubmit) => {
  const [value, setValue] = useState<boolean>(false);
  const handleSubmit = () => {
    setValue(true);
    onClick();
  };

  return (
    <>
      <Button
        isLoading={value}
        isDisabled={value}
        size="lg"
        colorScheme="success"
        onPress={() => handleSubmit()}>
        {localeService.translate("FINISH")}
      </Button>
    </>
  );
};

export default HandleSubmit;
