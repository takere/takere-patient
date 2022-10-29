/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class ContentFactoryException extends Error {

  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor(message: string) {
    super(message);
    this.name = 'ContentFactoryException';
  }
}

export default ContentFactoryException;
