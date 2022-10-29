/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface CardProps {
  onOpen: (data: Omit<CardProps, 'onOpen'>) => {};
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
    content_type: string;
  };
}

export default CardProps;
