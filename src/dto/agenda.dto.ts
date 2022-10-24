/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Board from "../domain/board.domain";

interface AgendaDTO {
  today: Board[],
  tomorrow: Board[]
}

export default AgendaDTO;
