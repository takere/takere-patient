/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BottomDrawerProps from "./bottom-drawer-props.model";
import CardProps from "./card-props.model";


interface Handler extends Omit<BottomDrawerProps, 'board'> {
  data: Omit<CardProps, 'onOpen'>;
}

export default Handler;
