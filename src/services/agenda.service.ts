/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AgendaDTO from "../dto/agenda.dto";
import Service from "./service";


/**
 * Responsible for managing agenda requests.
 */
class AgendaService extends Service {
  
  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  public async getAgenda(email: string): Promise<AgendaDTO> {
    const todayResponse = await this.remoteRequest.get('agenda/today?email=' + email);
    const tomorrowResponse = await this.remoteRequest.get('agenda/tomorrow?email=' + email);
    const todayData = todayResponse.data;
    const tomorrowData = tomorrowResponse.data;

    return {
      today: todayData,
      tomorrow: tomorrowData
    }
  }
}

export default AgendaService;
