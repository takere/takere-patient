/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { useToast } from 'native-base';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import * as Styled from './styled';
import LocaleService from '../../../../services/locale.service';
import BoardService from '../../../../services/board.service';
import NavigationButtons from '../../../NavigationButtons';
import SubmitButton from '../../../buttons/SubmitButton';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const boardService = new BoardService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BookContent = ({data, onUpdateData}: any) => {
  
  const [currentPage, setCurrentPage] = useState(0);

  const toast = useToast();
  const { width } = useWindowDimensions();
  const name = extractName(data);
  const description = extractDescription(data);
  const pages = extractPages(data);

  return (
    <>
      <Header
        name={name}
        currentPage={currentPage}
        pages={pages}
        description={description}
      />
      <Styled.Body>
        <RenderHtml 
          contentWidth={width}
          source={{html: pages[currentPage].structure}}
        />
      </Styled.Body>
      <Styled.Footer>
        <NavigationButtons 
          displayBack={currentPage - 1 >= 0}
          displayNext={currentPage + 1 < pages.length}
          onBack={() => handleBack(currentPage, setCurrentPage)}
          onNext={() => handleNext(currentPage, pages, setCurrentPage)}
        />
        <SubmitButton 
          display={currentPage+1 === pages.length} 
          onClick={() => handleSub(toast, data, onUpdateData)} 
        />
      </Styled.Footer>
    </>
  );
};

export default BookContent;

const Header = ({ name, currentPage, pages, description }: any) => (
  <>
    <Styled.Title size="xl">
      {name} ({currentPage + 1}/{pages.length})
    </Styled.Title>
    <Styled.Subtitle size="sm">
      {description}
    </Styled.Subtitle>
  </>
);


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleBack(currentPage: number, setCurrentPage: any) {
  if (currentPage - 1 < 0) {
    return;
  }

  setCurrentPage(currentPage - 1);
}

function handleNext(currentPage: number, pages: any, setCurrentPage: any) {
  if (currentPage + 1 >= pages.length) {
    return;
  }

  setCurrentPage(currentPage + 1);
}

function extractName(data: any) {
  const index = data.node.parameters.findIndex(
    (parameter: any) => parameter.slug === 'name'
  );
  
  return data.node.arguments[index];
}

function extractDescription(data: any) {
  const index = data.node.parameters.findIndex(
    (parameter: any) => parameter.slug === 'description'
  );
  
  return data.node.arguments[index];
}

function extractPages(data: any) {
  const index = data.node.parameters.findIndex(
    (parameter: any) => parameter.slug === 'pages'
  );
  
  return data.node.arguments[index];
}

function handleSub(toast: any, data: any, onUpdateData: any) {
  return async () => {
    toast.show({
      description: localeService.translate("SAVING_CHANGES"),
    });
    await boardService.postBoardResponse(data.id);
    onUpdateData();
  };
}
