/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Loading from '../../components/loading';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ScreenContent = ({ loading, children }: any) => {
  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      { children }
    </>
  )
}

export default ScreenContent;
