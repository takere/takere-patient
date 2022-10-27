/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Board from "../domain/board.domain";
import BoardDTO from "../dto/board.dto";
import Service from "./service";


/**
 * Responsible for managing board requests.
 */
class BoardService extends Service {
  
  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  public async getCards(email: string): Promise<BoardDTO> {
    const response = await this.remoteRequest.get('board/me?email=' + email);
    
    return response.data;
  }

  public async postBoardResponse(boardId: string, answers?: any): Promise<Board> {
    const response = await this.remoteRequest.post('board/resolve', {
      boardId,
      answers,
    });

    return response.data;
  }
}

export default BoardService;
