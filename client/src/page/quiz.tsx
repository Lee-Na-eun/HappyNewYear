import React, { useState } from 'react';
import { ReducerType } from '../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { nextIndex, QuizIndexStatus } from '../redux/quizIndex/quiz';
import { questions } from '../quizData/quizData';

function Quiz() {
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
      <h1>
        {quizState.index + 1}/{questions.length}
      </h1>
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
