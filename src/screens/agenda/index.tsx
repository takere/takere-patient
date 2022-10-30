/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useUser } from '../../providers/user';
import LocaleService from '../../services/locale.service';
import AgendaService from '../../services/agenda.service';
import Screen from '../../models/screen.model';
import ScreenContent from '../../components/ScreenContent';
import PriorityActivities from '../../components/PriorityActivities';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const agendaService = new AgendaService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const AgendaScreen = ({ navigation }: Screen) => {

  const [agenda, setAgenda] = useState({today: [], tomorrow: []});
  const [loading, setLoading] = useState(true);

  const user = useUser();

  useEffect(() => {
    fetchData(user, setAgenda, setLoading);
  }, []);

  return (
    <Styled.Container>
      <Styled.Background
        source={require('../../assets/images/agenda.jpg')}
        alt={localeService.translate('AGENDA_IMAGE')}
      />
      <ScreenContent loading={loading}>
        <PriorityActivities agenda={agenda} onClick={handleOpenCard} />
      </ScreenContent>
    </Styled.Container>
  );
}

export default AgendaScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function fetchData(user: any, setAgenda: any, setLoading: any) {
  const response = await agendaService.getAgenda(user.user.email);

  setAgenda(response);
  setLoading(false);
}

function handleOpenCard(flowId: any, nodeId: any) {
  // TODO: Redirect to card on the board
}