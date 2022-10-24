/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import LocaleService from '../../services/locale.service';
import * as Styled from './styled';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const Loading = ({ display }: any) => {
  if (!display) {
    return (
      <></>
    );
  }

  return (
    <Styled.AnimatedSpinner 
      accessibilityLabel={localeService.translate('LOADING')}
      size="lg"
    />
  );
}

export default Loading;
