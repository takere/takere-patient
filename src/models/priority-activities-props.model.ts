/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AgendaDTO from "../dto/agenda.dto";


interface PriorityActivitiesProps {
  agenda: AgendaDTO,
  onClick: (flowId: string, nodeId: string) => void
}

export default PriorityActivitiesProps;
