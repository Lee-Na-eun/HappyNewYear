import React from 'react';

interface QuizProperty {
  [key: string]: any;
}

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
        { answerText: '1' },
        { answerText: '2' },
        { answerText: '3' },
        { answerText: '4' },
        { answerText: '5' },
      ],
    },
  ];

  const questionArr = questions.map((el: QuizProperty) => el);

  //   console.log(answerArr);
  //   const answerOption:String = questions.map((el:QuizProperty))

  return (
    <div>
      <h1>1/6</h1>
      <h2>{questionArr[0].questionText}</h2>
      {questionArr[0].answerOptions.map((el: QuizProperty, idx: number) => (
        <button key={idx}>{el.answerText}</button>
      ))}
    </div>
  );
}

export default Quiz;
