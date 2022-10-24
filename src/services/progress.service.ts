/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ProgressDTO from "../dto/progress.dto";
import Service from "./service";


/**
 * Responsible for managing progress requests.
 */
class ProgressService extends Service {
  
  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  public async getMyProgress(email: string): Promise<ProgressDTO> {
    const response = await this.remoteRequest.get(
      `/progress?email=${email}`
    );
    
    return response.data;
  }
}

export default ProgressService;
