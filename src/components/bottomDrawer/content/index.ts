/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
