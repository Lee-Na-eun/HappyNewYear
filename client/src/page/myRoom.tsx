import {
  MyRoomWrap,
  MyLetterWrap,
  LetterBox,
  LetterHead,
} from '../style/styleMyRoom';
import { useState } from 'react';

function MyRoom() {
  const [isLetter, setIsLetter] = useState(false);

  const handleWatchLetter = () => {
    setIsLetter(true);
  };

  return (
    <MyRoomWrap>
      <MyLetterWrap>
        <div id='post' onClick={handleWatchLetter}>
          우체통
        </div>
        <div className={isLetter ? 'letterBox' : 'noneLetterBox'}>
          <LetterHead>
            <div id='buttonWrap'>
              <button>닫기</button>
            </div>
            <div id='headerTextBox'>ㅇㅇ님의 보관함</div>
          </LetterHead>
          <LetterBox></LetterBox>
        </div>
      </MyLetterWrap>
    </MyRoomWrap>
  );
}

export default MyRoom;
