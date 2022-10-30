/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ContentFactoryException from '../exception/content-factory.exception';
import BookContent from './BookContent';
import FormContent from './FormContent';
import ListContent from './ListContent';
import TextContent from './TextContent';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const content = {
  ORDERED_LIST: ListContent,
  UNORDERED_LIST: ListContent,
  TEXT: TextContent,
  BOOK: BookContent,
  FORM: FormContent,
};

export default content


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
export function contentFactory(type: string, props: any) {
  if (content[type.toUpperCase() as keyof typeof content] === undefined) {
    throw new ContentFactoryException(`There is no support for ${type}`);
  }

  return React.createElement(
    content[type.toUpperCase() as keyof typeof content], 
    { ...props }
  );
}
