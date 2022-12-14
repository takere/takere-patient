/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CardProps from "./card-props.model";


interface CardListProps {
  loading: boolean,
  boards: any[],
  onRefresh: () => void,
  onCardOpen: (data: Omit<CardProps, 'onOpen'>) => void
}

export default CardListProps;
