/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import IBottomDrawer from "./IBottomDrawer";
import ICard from "./ICard";


interface IDataHandler extends Omit<IBottomDrawer, 'board'> {
  data: Omit<ICard, 'onOpen'>;
}

export default IDataHandler;
