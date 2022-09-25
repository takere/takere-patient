import React, { useState } from 'react';
import {Button, Heading, Text, Input, useToast, HStack, Divider, VStack, Radio, Checkbox} from 'native-base';
import IHandler from '../../../../models/IHandler';
import {Requests} from '../../../../services/axios/remoteRequests';
import HandleSubmit from '../../HandleSubmit';

const FormContent = ({data, onUpdateData}: any) => {
  
  const nameIdx = data.node.parameters.filter((parameter: any) => parameter.slug === 'name')
  const descriptionIdx = data.node.parameters.filter((parameter: any) => parameter.slug === 'description')
  const questionsIdx = data.node.parameters.filter((parameter: any) => parameter.slug === 'questions')
  const name = data.node.arguments[nameIdx];
  const description = data.node.arguments[descriptionIdx];
  const questions = data.node.arguments[questionsIdx];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(buildEmptyAnswers(questions));
  const [currentAnswer, setCurrentAnswer] = useState('');

  const toast = useToast();
  const handleSub = async () => {
    toast.show({
      description: 'Salvando atualização!',
    });
    await new Requests().postBoardResponse(data.id, { payload: answers });
    onUpdateData();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      return;
    }

    persistCurrentAnswer();
    setCurrentAnswer(answers[currentQuestion+1]);
    setCurrentQuestion(currentQuestion+1);
  }

  const persistCurrentAnswer = () => {
    const currentAnswers = [ ...answers ];

    currentAnswers[currentQuestion] = currentAnswer;

    setAnswers(currentAnswers);
  };

  const handleBackQuestion = () => {
    if (currentQuestion - 1 < 0) {
      return;
    }

    persistCurrentAnswer();
    setCurrentAnswer(answers[currentQuestion-1]);
    setCurrentQuestion(currentQuestion-1);
  }

  return (
    <>
      <Heading size="xl"mt={1} color="muted.800">
        {name}
      </Heading>
      <Heading size="sm"  mt={1}>
        {description}
      </Heading>
      <Heading size='md' mt={3}>
        {`${currentQuestion+1}. ${questions[currentQuestion].label}`}
      </Heading>
      <QuestionInput 
        type={questions[currentQuestion].type}
        value={currentAnswer}
        onChange={setCurrentAnswer}
        options={questions[currentQuestion].options}
      />
      <HStack space={3} divider={<Divider />} w="100%" paddingY="10" justifyContent='space-between'>
        <Button onPress={handleBackQuestion} display={currentQuestion - 1 >= 0 ? 'flex' : 'none'} bgColor='#0fab7a'>
          Back
        </Button>
        <Button onPress={handleNextQuestion} display={currentQuestion + 1 < questions.length ? 'flex' : 'none'} bgColor='#0fab7a'>
          Next
        </Button>
      </HStack>
      {currentQuestion+1 === questions.length &&
        <HandleSubmit onClick={handleSub} />
      }
    </>
  );
};

export default FormContent;

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
    size='2xl'
    placeholder='Type your answer'
    multiline={false}
  />
}

function buildEmptyAnswers(questions: string[]): string[] {
  const emptyAnswers: string[] = [];

  for (let i = 0; i < questions.length; i++) {
    emptyAnswers.push('');
  }

  return emptyAnswers;
}


