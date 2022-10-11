import React from 'react';
import { Heading, Box } from 'native-base';
import { Dimensions } from 'react-native';
import BookContent from './content/BookContent';
import FormContent from './content/FormContent';
import ListContent from './content/ListContent';
import TextContent from './content/TextContent';
import LocaleService from '../../services/locale.service';

const localeService = new LocaleService();

const { height } = Dimensions.get('window');

export const BottomDrawer = ({board, onUpdateData}: any) => {
  
  return (
    <>
      <Heading size="lg" ml={3} mt={5}>
        {localeService.translate("CARE_PLAN")}: {board.name}
      </Heading>
      <Heading size="sm" ml={3} mt={1} mb={5} color="muted.400">
        {board.description}
      </Heading>
      <Box paddingX={5} height={height - 138}>
      {(() => {
        switch (board.node.content_type.toLowerCase()) {
          case 'ordered_list':
          case 'unordered_list':
            return (
              <ListContent onUpdateData={onUpdateData} data={board} />
            );
          case 'text':
            return <TextContent onUpdateData={onUpdateData} data={board} />
          case 'book':
            return <BookContent onUpdateData={onUpdateData} data={board} />
          case 'form':
            return <FormContent onUpdateData={onUpdateData} data={board} />
        }
      })()}
      </Box>
    </>
  );
};
