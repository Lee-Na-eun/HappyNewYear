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
            <div
              id='buttonWrap'
              className={isLetter ? 'letterBox' : 'noneLetterBox'}
            >
              <button>닫기</button>
            </div>
            <div
              id='headerTextBox'
              className={isLetter ? 'letterBox' : 'noneLetterBox'}
            >
              ㅇㅇ님의 보관함
            </div>
          </LetterHead>
          <LetterBox>
            <ul className={isLetter ? 'letterBox' : 'noneLetterBox'}></ul>
          </LetterBox>
        </div>
      </MyLetterWrap>
    </MyRoomWrap>
  );
}

export default MyRoom;
