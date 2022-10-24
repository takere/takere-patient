/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ReducedNodeDTO from "./reduced-node.dto";


interface NodeDTO {
  node: ReducedNodeDTO,
  completed: number,
  total: number
}

export default NodeDTO;
