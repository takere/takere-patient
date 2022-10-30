/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import * as Styled from './styled';
import { useToast, Divider } from 'native-base';
import HandleSubmitProps from '../../HandleSubmit';
import LocaleService from '../../../../services/locale.service';
import BoardService from '../../../../services/board.service';
import { inputFactory } from '../../../../parts/input';
import ThemeButton from '../../../buttons/ThemeButton';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const boardService = new BoardService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FormContent = ({ data, onUpdateData }: any) => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(buildEmptyAnswers(data));
  const [currentAnswer, setCurrentAnswer] = useState('');

  const toast = useToast();
  const name = extractName(data);
  const description = extractDescription(data);
  const questions = extractQuestions(data);

  return (
    <>
      <Header 
        name={name} 
        description={description} 
        currentQuestion={currentQuestion}
        questions={questions}
      />
      <QuestionInput 
        type={questions[currentQuestion].type}
        value={currentAnswer}
        onChange={setCurrentAnswer}
        options={questions[currentQuestion].options}
      />
      <NavigationButtons
        questions={questions}
        currentQuestion={currentQuestion}
        onBack={() => handleBack(
          currentQuestion, 
          currentAnswer, 
          setAnswers, 
          setCurrentAnswer, 
          answers, 
          setCurrentQuestion
        )}
        onNext={() => handleNext(
          currentQuestion, 
          questions, 
          currentAnswer, 
          setAnswers, 
          setCurrentAnswer, 
          answers, 
          setCurrentQuestion
        )}
      />
      <SubmitButton 
        display={currentQuestion+1 === questions.length} 
        onClick={() => handleSub(toast, answers, currentAnswer, data, onUpdateData)} 
      />
    </>
  );
};

export default FormContent;

const Header = ({ name, description, currentQuestion, questions }: any) => (
  <>
    <Styled.Title size="xl">
      {name}
    </Styled.Title>
    <Styled.Subtitle size="sm">
      {description}
    </Styled.Subtitle>
    <Styled.NavigationStatus size='md'>
      {`${currentQuestion + 1}. ${questions[currentQuestion].label}`}
    </Styled.NavigationStatus>
  </>
);

const QuestionInput = ({ type, value, onChange, options }: any) => {
  const parsedType = type.toUpperCase().replace('-', '_');

  return inputFactory(parsedType, { value, onChange, options });
}

const NavigationButtons = ({ currentQuestion, questions, onBack, onNext }: any) => (
  <Styled.HorizontalList space={3} divider={<Divider />}>
    <ThemeButton
      onPress={onBack}
      display={currentQuestion - 1 >= 0}
      title={localeService.translate("BACK")} />
    <ThemeButton
      onPress={onNext}
      display={currentQuestion + 1 < questions.length}
      title={localeService.translate("NEXT")} />
  </Styled.HorizontalList>
);

const SubmitButton = ({ display, onClick }: any) => {
  if (!display) {
    return (
      <></>
    );
  }

  return (
    <HandleSubmitProps onClick={onClick} />
  );
}


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function buildEmptyAnswers(data: any): string[] {
  const emptyAnswers: string[] = [];
  const questions = extractQuestions(data);

  for (const _ of questions) {
    emptyAnswers.push('');
  }

  return emptyAnswers;
}

function extractQuestions(data: any) {
  const questionsIdx = data.node.parameters.findIndex(
    (parameter: any) => parameter.slug === 'questions'
  );
  
  return data.node.arguments[questionsIdx];
}

function extractName(data: any) {
  const nameIdx = data.node.parameters.findIndex(
    (parameter: any) => parameter.slug === 'name'
  );
  
  return data.node.arguments[nameIdx];
}

function extractDescription(data: any) {
  const descriptionIdx = data.node.parameters.findIndex(
    (parameter: any) => parameter.slug === 'description'
  );
  
  return data.node.arguments[descriptionIdx];
}

function handleBack(
  currentQuestion: number, 
  currentAnswer: any, 
  setAnswers: any, 
  setCurrentAnswer: any, 
  answers: string[], 
  setCurrentQuestion: any
) {
  if (currentQuestion - 1 < 0) {
    return;
  }

  persistCurrentAnswer(answers, currentQuestion, currentAnswer, setAnswers);
  setCurrentAnswer(answers[currentQuestion - 1]);
  setCurrentQuestion(currentQuestion - 1);
}

function persistCurrentAnswer(
  answers: string[], 
  currentQuestion: number, 
  currentAnswer: string, 
  setAnswers: any
) {
  const currentAnswers = [...answers];

  currentAnswers[currentQuestion] = currentAnswer;

  setAnswers(currentAnswers);
}

function handleNext(
  currentQuestion: number, 
  questions: any, 
  currentAnswer: any, 
  setAnswers: any, 
  setCurrentAnswer: any, 
  answers: string[], 
  setCurrentQuestion: any
) {
  if (currentQuestion + 1 >= questions.length) {
    return;
  }

  persistCurrentAnswer(answers, currentQuestion, currentAnswer, setAnswers);
  setCurrentAnswer(answers[currentQuestion + 1]);
  setCurrentQuestion(currentQuestion + 1);
}

async function handleSub(
  toast: any, 
  answers: string[], 
  currentAnswer: string, 
  data: any,
  onUpdateData: any
) {
  toast.show({
    description: localeService.translate("SAVING_CHANGES"),
  });
  const formattedAnswers = [...answers, currentAnswer].shift();
  await boardService.postBoardResponse(data.id, formattedAnswers);
  onUpdateData();
}
