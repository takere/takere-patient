/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import { ScrollView } from "native-base";
import { Card } from '../Card';
import LocaleService from '../../../services/locale.service';
import ScreenContent from '../../ScreenContent';
import SuccessButton from '../../buttons/SuccessButton';
import CardListProps from '../../../models/card-list-props.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CardList = ({ loading, boards, onRefresh, onCardOpen }: CardListProps) => {
  if (!loading && boards.length === 0) {
    return (
      <Styled.Container>
        <Styled.HeaderTitle>
          { localeService.translate("NO_BOARDS") }
        </Styled.HeaderTitle>
        <SuccessButton
          onPress={onRefresh}
          title={localeService.translate("REFRESH")}
        />
      </Styled.Container>
    );
  }

  return (
    <ScrollView>
      <ScreenContent loading={loading}>
          <Styled.List>
            {boards.map((board: any, index: number) => (
              <Card onOpen={onCardOpen} key={index} {...board} />
            ))}
          </Styled.List>
        </ScreenContent>
    </ScrollView>
  );
}

export default CardList;
