/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface ICard {
  onOpen: (data: Omit<ICard, 'onOpen'>) => {};
  id: string;
  name: string;
  description: string;
  finished: {
    id: string;
    at: string;
    result: any;
  };
  node: {
    id: string;
    icon: string;
    type: string;
    bgColor: string;
    results: any;
  };
}

export default ICard;
