import React, { useState } from 'react';
// import { ReducerType } from '../redux/rootReducer';
import QuizResult from './quizResult';
import { useDispatch, useSelector } from 'react-redux';
import { nextIndex, QuizIndexStatus } from '../redux/quiz/quiz';
import { resultArr, resultStatus } from '../redux/quiz/result';
import { questions } from '../quizData/quizData';
import { Button, QuestionWrap } from '../style/StyleQuiz';

function Quiz() {
  const dispatch = useDispatch();
  const quizState = useSelector(QuizIndexStatus);
  const resultArrState = useSelector(resultStatus);

  const [isEnd, setIsEnd] = useState(false);

  interface QuizProperty {
    [key: string]: any;
  }

  const questionArr = questions.map((el: QuizProperty) => el);
  // console.log(questionArr);

  const handlePlusIndex = (quizStaeIdx: number, idx: number) => {
    if (quizStaeIdx > 4) {
      setIsEnd(true);
    }
    dispatch(resultArr({ idx }));
    dispatch(nextIndex());
  };

  console.log(nextIndex);

  return (
    <div>
      {isEnd ? (
        <QuizResult />
      ) : (
        <QuestionWrap>
          <h1>
            {quizState.index + 1}/{questions.length}
          </h1>
          <h2>{questionArr[quizState.index].questionText}</h2>
          {questionArr[quizState.index].answerOptions.map(
            (el: QuizProperty, idx: number) => (
              <Button
                key={idx}
                onClick={() => handlePlusIndex(quizState.index, idx)}
              >
                {el.answerText}
              </Button>
            )
          )}
        </QuestionWrap>
      )}
    </div>
  );
}

export default Quiz;
