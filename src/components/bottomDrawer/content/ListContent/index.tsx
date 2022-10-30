/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useToast, Divider } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Styled from './styled';
import Tooltip from '../../../Tooltip';
import HandleSubmitProps from '../../HandleSubmit';
import LocaleService from '../../../../services/locale.service';
import BoardService from '../../../../services/board.service';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const boardService = new BoardService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ListContent = ({data, onUpdateData}: any) => {

  const toast = useToast();
  const parameters = parseParameters(data);

  return (
    <>
      <Styled.VerticalList space={3} divider={<Divider />}>
        {parameters.map((parameter: any, index: number) => (
          <ParameterInformation 
            parameter={parameter} 
            data={data} 
            index={index} 
          />
        ))}
      </Styled.VerticalList>
      <HandleSubmitProps onClick={() => handleSub(toast, data, onUpdateData)} />
    </>
  );
};

export default ListContent;

const ParameterInformation = ({ parameter, data, index }: any) => (
  <Styled.HorizontalList>
    <Styled.ParameterContent>
      <Tooltip label={parameter.name}>
        <Styled.ParameterValue>
          {data.node.arguments[index]}
        </Styled.ParameterValue>
      </Tooltip>
    </Styled.ParameterContent>
    <Icon name={data.node.icons[index]} size={30} />
  </Styled.HorizontalList>
);


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function parseParameters(data: any) {
  const ignoredParameters = ['severity', 'frequency'];

  return data.node.parameters.filter(
    (parameter: any) => !ignoredParameters.includes(parameter.slug)
  );
}

async function handleSub(toast: any, data: any, onUpdateData: any) {
  toast.show({
    description: localeService.translate("SAVING_CHANGES"),
  });
  await boardService.postBoardResponse(data.id);
  onUpdateData();
}
