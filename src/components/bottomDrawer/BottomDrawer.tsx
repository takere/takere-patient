import {Button, Heading, Text, Input, useToast} from 'native-base';
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
  data: Pick<ICard, 'node'>;
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
        {data.node.results.name ?? 'NAME'}
      </Heading>
      <Heading size="sm" ml={3} mt={1}>
        {data.node.results.description ?? 'DESC'}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.content}
      </Text>
      
      <HandleSubmit onClick={handleSub} />
    </>
  );
};

const InformationHandler = ({data, onUpdateData}: IHandler) => {
  const toast = useToast();

  return (
    <>
      <Heading size="xl" ml={3} mt={1} color="muted.800">
        {data.node.results.name ?? 'NAME'}
      </Heading>
      <Heading size="sm" ml={3} mt={1}>
        {data.node.results.description ?? 'DESC'}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.content}
      </Text>
    </>
  );
};

const ExplanationHandler = ({data, onUpdateData}: IHandler) => {
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
        Total pages: {data.node.results.pages.length}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.pages[0]}
      </Text>
    </>
  );
};

const QuizHandler = ({data, onUpdateData}: IHandler) => {
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
        Total questions: {data.node.results.questions.length}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.questions[0].question}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.questions[0].answer.type}
      </Text>
    </>
  );
};

const MedicationControlHandler = ({data, onUpdateData}: IHandler) => {
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
        {data.node.results.name ?? 'Name'}
      </Heading>
      <Text ml={3} mt={1}>
        {data.node.results.description ?? 'Desc'}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.why}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.notes}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.dosage}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.beginDate}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.endDate}
      </Text>
      <Text ml={3} mt={1}>
        {data.node.results.undefinedEnd}
      </Text>
    </>
  );
};

// const MotivationalHandler = ({data, onUpdateData}: IHandler) => {
//   const toast = useToast();
//   const handleSub = async () => {
//     toast.show({
//       description: 'Salvando atualização!',
//     });
//     await new Requests().postBoardResponse(data.id);
//     onUpdateData();
//   };

//   return (
//     <>
//       <Heading size="xl" ml={3} mt={1} color="muted.800">
//         {data.executed.result}
//       </Heading>
//       <HandleSubmit onClick={handleSub} />
//     </>
//   );
// };

// const ExternalLinkHandler = ({data, onUpdateData}: IHandler) => {
//   const toast = useToast();
//   const webViewRef = useRef<WebView>(null);

//   const handleSub = async () => {
//     toast.show({
//       description: 'Salvando atualização!',
//     });
//     await new Requests().postBoardResponse(data.id);
//     onUpdateData();
//   };

//   return (
//     <>
//       <HandleSubmit onClick={handleSub} />
//       <WebView
//         webViewRef={webViewRef}
//         startInLoadingState={true}
//         source={{uri: data.executed.result}}
//         style={{flex: 1, height}}
//       />
//     </>
//   );
// };

// const DataInputHandler = ({data, onUpdateData}: IDataHandler) => {
//   const toast = useToast();
//   const [value, setValue] = useState<string>('');
//   const handleChange = (inputValue: any) => {
//     setValue(inputValue);
//   };

//   const handleSub = async () => {
//     toast.show({
//       description: 'Salvando atualização!',
//     });
//     await new Requests().postBoardResponse(data.id, value);
//     onUpdateData();
//   };

//   return (
//     <>
//       <Heading size="xl" ml={3} mt={1} color="muted.800">
//         {data.node.results.text_name}
//       </Heading>
//       <Heading size="sm" ml={3} mt={1} color="muted.400">
//         {data.node.results.text_description}
//       </Heading>
//       <Input
//         value={value}
//         onChangeText={handleChange}
//         ml={3}
//         mr={3}
//         mt={5}
//         size="2xl"
//         placeholder={data.node.results.text_name}
//         multiline={true}
//       />
//       <HandleSubmit onClick={handleSub} />
//     </>
//   );
// };

export const BottomDrawer = ({board, onUpdateData}: IBottomDrawer) => {
  return (
    <>
      <Heading size="lg" ml={3} mt={5}>
        Care plan: {board.name}
      </Heading>
      <Heading size="sm" ml={3} mt={1} mb={5} color="muted.400">
        {board.description}
      </Heading>
      {(() => {
        switch (board.node.type.toUpperCase()) {
          case 'REMINDER':
            return <ReminderHandler onUpdateData={onUpdateData} data={board} />;
          case 'INFORMATION':
            return (
              <InformationHandler onUpdateData={onUpdateData} data={board} />
            );
          case 'EXPLANATION':
            return (
              <ExplanationHandler onUpdateData={onUpdateData} data={board} />
            );
          case 'QUIZ':
            return (
              <QuizHandler onUpdateData={onUpdateData} data={board} />
            );
          case 'MEDICATION CONTROL':
            return (
              <MedicationControlHandler onUpdateData={onUpdateData} data={board} />
            );
        }
      })()}
    </>
  );
};
