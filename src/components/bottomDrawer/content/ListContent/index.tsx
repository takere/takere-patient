import React from 'react';
import {
  Button,
  Heading,
  Text,
  Input,
  useToast,
  Divider,
  HStack,
  VStack,
  Box,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tooltip from '../../../Tooltip';
import HandleSubmit from '../../HandleSubmit';
import LocaleService from '../../../../services/locale.service';
import BoardService from '../../../../services/board.service';

const localeService = new LocaleService();


const ListContent = ({data, onUpdateData}: any) => {
  const toast = useToast();
  const boardService = new BoardService();
  const ignoredParameters = ['severity', 'frequency'];
  const parameters = data.node.parameters.filter((parameter: any) => !ignoredParameters.includes(parameter.slug));

  const handleSub = async () => {
    toast.show({
      description: localeService.translate("SAVING_CHANGES"),
    });
    await boardService.postBoardResponse(data.id);
    onUpdateData();
  };

  return (
    <>
      <VStack space={3} divider={<Divider />} w="100%" p="10">
        {parameters.map((parameter: any, index: number) => (
          <HStack justifyContent="space-between">
            <Box w='85%'>
              <Tooltip label={parameter.name}>
                <Text w='90%'>
                  {data.node.arguments[index]}
                </Text>
              </Tooltip>
            </Box>
            <Icon name={data.node.icons[index]} size={30} />
          </HStack>
        ))}
      </VStack>
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

export default ListContent;
