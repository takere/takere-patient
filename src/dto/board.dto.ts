/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface BoardDTO {
  id: string,
  name: string,
  description: string,
  node: { 
    id: string, 
    results: any,
    type: string,
    bgColor: string,
    icon: string,
  }
}

export default BoardDTO;
