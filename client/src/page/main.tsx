import React, { useState } from 'react';
import Quiz from '../component/quiz';

function Main() {
  const [isTest, setIsTest] = useState(false);

  const handleTestStart = (): void => {
    setIsTest(true);
  };

  return (
    <div>
      {isTest ? (
        <Quiz />
      ) : (
        <div>
          <h1>2022년도 당신이 가장 이루고 싶은 꿈은?</h1>
          <p>
            드디어 새해가 밝았어요! 고민은 이것저것 많은데... <br />
            그 중에서 무엇을 먼저 해야할지 쉽게 선택하지 못하는 당신! <br />
            가장 이루고 싶은 꿈이 무엇인지 한 번 알아볼까요?
          </p>
          <button onClick={handleTestStart}>시작하기</button>
        </div>
      )}
    </div>
  );
}

export default Main;
