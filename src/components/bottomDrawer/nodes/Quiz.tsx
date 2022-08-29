import React, { useState } from 'react';
import {Button, Heading, Text, Input, useToast, HStack, Divider, VStack, Radio, Checkbox} from 'native-base';
import IHandler from '../../../models/IHandler';
import {Requests} from '../../../services/axios/remoteRequests';
import HandleSubmit from '../HandleSubmit';

const QuizHandler = ({data, onUpdateData}: IHandler) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [input, setInput] = useState('');

  const questions = data.node.results.questions;

  const toast = useToast();
  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id);
    onUpdateData();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      return;
    }

    setCurrentQuestion(currentQuestion+1);
  }

  const handleBackQuestion = () => {
    if (currentQuestion - 1 < 0) {
      return;
    }

    setCurrentQuestion(currentQuestion-1);
  }

  return (
    <>
      <Heading size="xl" color="muted.800">
        Quiz
      </Heading>
      <Heading size='md' mt={3}>
        {`${currentQuestion+1}. ${questions[currentQuestion].question}`}
      </Heading>
      <QuestionInput 
        type={questions[currentQuestion].answer.type}
        value={input}
        onChange={setInput}
        options={questions[currentQuestion].answer.options}
      />
      <HStack space={3} divider={<Divider />} w="100%" paddingY="10" justifyContent='space-between'>
        <Button onPress={handleBackQuestion} display={currentQuestion - 1 >= 0 ? 'flex' : 'none'}>
          Back
        </Button>
        <Button onPress={handleNextQuestion} display={currentQuestion + 1 < questions.length ? 'flex' : 'none'}>
          Next
        </Button>
      </HStack>
      {currentQuestion+1 === questions.length &&
        <HandleSubmit onClick={handleSub} />
      }
    </>
  );
};

export default QuizHandler;

const QuestionInput = ({ type, value, onChange, options }: any) => {
  if (type === 'text') {
     return <Input
        mt={3}
        value={value}
        onChangeText={onChange}
        size="2xl"
        placeholder='Type your answer'
        multiline={false}
      />
  }
  else if (type === 'text-area') {
    return <Input
      mt={3}
      value={value}
      onChangeText={onChange}
      size='2xs'
      placeholder='Type your answer'
      multiline={true}
    />
  }
  else if (type === 'radio') {
    return (
      <Radio.Group
        name="radio"
        value={value}
        onChange={onChange}
      >
        {options.map((option: any, index: any) => (
          <Radio value={index} my="1" key={index}>
            {option}
          </Radio>
        ))}
      </Radio.Group>
    )
  }
  else if (type === 'checkbox') {
    return (
      <Checkbox.Group onChange={onChange} value={value}>
        {options.map((option: any, index: any) => (
          <Checkbox value={index} my="1" key={index}>
            {option}
          </Checkbox>
        ))}
      </Checkbox.Group>
    );
  }
  
  return <Input
    mt={3}
    keyboardType="numeric"
    value={value}
    onChangeText={onChange}
    size='2xs'
    placeholder='Type your answer'
    multiline={false}
  />
}
