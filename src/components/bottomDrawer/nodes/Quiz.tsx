import React from 'react';
import {Button, Heading, Text, Input, useToast} from 'native-base';
import IHandler from '../../../models/IHandler';
import {Requests} from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';

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

export default QuizHandler;
