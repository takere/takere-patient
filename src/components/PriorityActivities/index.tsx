/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import { MiniCard } from '../../components/MiniCard';
import theme from '../../assets/themes';
import LocaleService from '../../services/locale.service';
import PriorityActivitiesProps from '../../models/priority-activities-props.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PriorityActivities = ({ agenda, onClick }: PriorityActivitiesProps) => (
  <Styled.ActivityList>
    <Activities 
      cards={agenda.today}
      onClick={onClick}
      title={localeService.translate('TODAY')}
      bgColor={theme.danger}
    />
    <Activities 
      cards={agenda.tomorrow}
      onClick={onClick}
      title={localeService.translate('TOMORROW')}
      bgColor={theme.warning}
    />
  </Styled.ActivityList>
);

export default PriorityActivities;

const Activities = ({ cards, title, onClick, bgColor }: any) => (
  <Styled.ActivityContainer>
    <Styled.ActivityTitle size="md">
      { title }
    </Styled.ActivityTitle>
    <Styled.CardList space={2}>
      {cards.map((item: any, index: number) => (
        <MiniCard
          key={index}
          onPress={() => onClick(item.flow.id, item.node.id)}
          name={item.node.name.toUpperCase()}
          icon={item.node.icon}
          bgColor={bgColor}
        />
      ))}
    </Styled.CardList>
  </Styled.ActivityContainer>
);