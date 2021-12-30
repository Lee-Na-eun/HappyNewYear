import React, { useState } from 'react';
import { ReducerType } from '../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { nextIndex, QuizIndex, QuizIndexStatus } from '../redux/quizIndex/quiz';

function Quiz() {
  const questions: Array<object> = [
    {
      questionText: '첫번째 화면 입니다.',
      answerOptions: [
        { answerText: '1' },
        { answerText: '2' },
        { answerText: '3' },
        { answerText: '4' },
        { answerText: '5' },
      ],
    },
    {
      questionText: '두번째 화면 입니다.',
      answerOptions: [
        { answerText: 'one' },
        { answerText: 'two' },
        { answerText: 'three' },
        { answerText: 'four' },
        { answerText: 'five' },
      ],
    },
    {
      questionText: '세번째 화면 입니다.',
      answerOptions: [
        { answerText: '1' },
        { answerText: '2' },
        { answerText: '3' },
        { answerText: '4' },
        { answerText: '5' },
      ],
    },
    {
      questionText: '네번째 화면 입니다.',
      answerOptions: [
        { answerText: '1' },
        { answerText: '2' },
        { answerText: '3' },
        { answerText: '4' },
        { answerText: '5' },
      ],
    },
    {
      questionText: '다섯번째 화면 입니다.',
      answerOptions: [
        { answerText: '1' },
        { answerText: '2' },
        { answerText: '3' },
        { answerText: '4' },
        { answerText: '5' },
      ],
    },
    {
      questionText: '여섯번째 화면 입니다.',
      answerOptions: [
        { answerText: '1' },
        { answerText: '2' },
        { answerText: '3' },
        { answerText: '4' },
        { answerText: '5' },
      ],
    },
  ];

  const dispatch = useDispatch();
  const quizState = useSelector(QuizIndexStatus);

  console.log(quizState.index);

  interface QuizProperty {
    [key: string]: any;
  }

  const questionArr = questions.map((el: QuizProperty) => el);

  const handlePlusIndex = () => {
    dispatch(nextIndex());
  };

  return (
    <div>
      <h1>1/6</h1>
      <h2>{questionArr[quizState.index].questionText}</h2>
      {questionArr[quizState.index].answerOptions.map(
        (el: QuizProperty, idx: number) => (
          <button key={idx}>{el.answerText}</button>
        )
      )}

      <button onClick={handlePlusIndex}>다음다음다음</button>
    </div>
  );
}

export default Quiz;
