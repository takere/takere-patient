import {Button, Heading, Box, Text, Input, useToast} from 'native-base';
import * as React from 'react';
import WebView from 'react-native-webview';
import {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {Requests} from '../../services/axios/remoteRequests';
import IBottomDrawer from '../../models/IBottomDrawer';
import IHandleSubmit from '../../models/IHandleSubmit';
import ExplanationHandler from './nodes/Explanation';
import InformationHandler from './nodes/Information';
import MedicationControlHandler from './nodes/MedicationControl';
import QuizHandler from './nodes/Quiz';
import ReminderHandler from './nodes/Reminder';

const {height} = Dimensions.get('window');





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
      <Box paddingX={5}>
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
      </Box>
    </>
  );
};
