/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import NodeDTO from "./node.dto";


interface ProgressDTO {
  flow: {
    id: string,
    name: string,
    description: string,
    nodes: NodeDTO[]
  }
}

export default ProgressDTO;
