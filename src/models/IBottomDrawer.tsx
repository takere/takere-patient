/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ICard from "./ICard";


interface IBottomDrawer {
  board: Omit<ICard, 'onOpen'>;
  onUpdateData: () => void;
}

export default IBottomDrawer;
