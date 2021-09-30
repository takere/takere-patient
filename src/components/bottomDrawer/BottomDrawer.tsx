import {Button, Heading, Input, useToast} from 'native-base';
import * as React from 'react';
import {ICard} from '../card/Card';
import WebView from 'react-native-webview';
import {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {Requests} from '../../services/axios/remoteRequests';

const {height} = Dimensions.get('window');

interface IHandleSubmit {
  onClick: () => void;
}

interface IBottomDrawer {
  board: Omit<ICard, 'onOpen'>;
  onUpdateData: () => void;
}

interface IHandler extends Omit<IBottomDrawer, 'board'> {
  data: Pick<ICard, 'executed'>;
}

interface IDataHandler extends Omit<IBottomDrawer, 'board'> {
  data: Pick<ICard, 'node'>;
}

const HandleSubmit = ({onClick}: IHandleSubmit) => {
  const [value, setValue] = useState<boolean>(false);
  const handleSubmit = () => {
    setValue(true);
    onClick();
  };

  return (
    <>
      <Button
        isLoading={value}
        isDisabled={value}
        ml={3}
        mr={3}
        mt={3}
        mb={3}
        size="lg"
        colorScheme="success"
        onPress={() => handleSubmit()}>
        Concluir
      </Button>
    </>
  );
};

const ReminderHandler = ({data, onUpdateData}: IHandler) => {
  const toast = useToast();
  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  return (
    <>
      <Heading size="xl" ml={3} mt={1} color="muted.800">
        {data.executed.result}
      </Heading>
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

const MotivationalHandler = ({data, onUpdateData}: IHandler) => {
  const toast = useToast();
  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  return (
    <>
      <Heading size="xl" ml={3} mt={1} color="muted.800">
        {data.executed.result}
      </Heading>
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

const ExternalLinkHandler = ({data, onUpdateData}: IHandler) => {
  const toast = useToast();
  const webViewRef = useRef<WebView>(null);

  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  return (
    <>
      <HandleSubmit onClick={handleSub} />
      <WebView
        webViewRef={webViewRef}
        startInLoadingState={true}
        source={{uri: data.executed.result}}
        style={{flex: 1, height}}
      />
    </>
  );
};

const DataInputHandler = ({data, onUpdateData}: IDataHandler) => {
  const toast = useToast();
  const [value, setValue] = useState<string>('');
  const handleChange = (inputValue: any) => {
    setValue(inputValue);
  };

  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id, value);
    onUpdateData();
  };

  return (
    <>
      <Heading size="xl" ml={3} mt={1} color="muted.800">
        {data.node.results.text_name}
      </Heading>
      <Heading size="sm" ml={3} mt={1} color="muted.400">
        {data.node.results.text_description}
      </Heading>
      <Input
        value={value}
        onChangeText={handleChange}
        ml={3}
        mr={3}
        mt={5}
        size="2xl"
        placeholder={data.node.results.text_name}
        multiline={true}
      />
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

export const BottomDrawer = ({board, onUpdateData}: IBottomDrawer) => {
  return (
    <>
      <Heading size="lg" ml={3} mt={5}>
        {board.name}
      </Heading>
      <Heading size="sm" ml={3} mt={1} mb={5} color="muted.400">
        {board.description}
      </Heading>
      {(() => {
        switch (board.type) {
          case 'REMINDER':
            return <ReminderHandler onUpdateData={onUpdateData} data={board} />;
          case 'MOTIVATIONAL':
            return (
              <MotivationalHandler onUpdateData={onUpdateData} data={board} />
            );
          case 'EXTERNAL_LINK':
            return (
              <ExternalLinkHandler onUpdateData={onUpdateData} data={board} />
            );
          case 'DATA_INPUT':
            return (
              <DataInputHandler onUpdateData={onUpdateData} data={board} />
            );
        }
      })()}
    </>
  );
};
