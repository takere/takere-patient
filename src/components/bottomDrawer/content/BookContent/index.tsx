import React, { useState } from 'react';
import {Button, Heading, Text, Input, useToast, Divider, HStack, Box} from 'native-base';
import IHandler from '../../../../models/IHandler';
import {Requests} from '../../../../services/axios/remoteRequests';
import HandleSubmit from '../../HandleSubmit';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import LocaleService from '../../../../services/locale.service';

const localeService = new LocaleService();


const BookContent = ({data, onUpdateData}: any) => {

  const nameIdx = data.node.parameters.findIndex((parameter: any) => parameter.slug === 'name')
  const descriptionIdx = data.node.parameters.findIndex((parameter: any) => parameter.slug === 'description')
  const pagesIdx = data.node.parameters.findIndex((parameter: any) => parameter.slug === 'pages')
  const name = data.node.arguments[nameIdx];
  const description = data.node.arguments[descriptionIdx];
  const pages = data.node.arguments[pagesIdx];
  
  const [currentPage, setCurrentPage] = useState(0);
  const { width } = useWindowDimensions();
  const toast = useToast();

  const handleSub = async () => {
    toast.show({
      description: localeService.translate("SAVING_CHANGES"),
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  const handleNext = () => {
    if (currentPage + 1 >= pages.length) {
      return;
    }

    setCurrentPage(currentPage+1);
  }

  const handleBack = () => {
    if (currentPage - 1 < 0) {
      return;
    }
    
    setCurrentPage(currentPage-1);
  }

  return (
    <>
      <Heading size="xl"mt={1} color="muted.800">
        {name} ({currentPage+1}/{pages.length})
      </Heading>
      <Heading size="sm"  mt={1}>
        {description}
      </Heading>
      <Box height='75%'>
        <RenderHtml 
          contentWidth={width}
          source={{html: pages[currentPage].structure}}
        />
      </Box>
      <Box height='15%' justifyContent='space-between'>
        <HStack w="100%" justifyContent='space-between'>
          <Button onPress={handleBack} display={currentPage - 1 >= 0 ? 'flex' : 'none'}>
          {localeService.translate("BACK")}
          </Button>
          <Button onPress={handleNext} display={currentPage + 1 < pages.length ? 'flex' : 'none'}>
          {localeService.translate("NEXT")}
          </Button>
        </HStack>
        {currentPage+1 === pages.length &&
          <HandleSubmit onClick={handleSub} />
        }
      </Box>
    </>
  );
};

export default BookContent;
