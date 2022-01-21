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

  const handleCloseLetter = () => {
    setIsLetter(false);
  };

  return (
    <MyRoomWrap>
      <MyLetterWrap>
        <div id='post' onClick={handleWatchLetter}>
          우체통
        </div>
        <div className={isLetter ? 'letterBox' : 'noneLetterBox'}>
          <LetterHead>
            <div id='closeLetter'>
              <span onClick={handleCloseLetter}>&times;</span>
            </div>
            <div id='headerTextBox'>
              <ul>
                <li>전체</li>
                <li>안 읽은 편지</li>
                <li>읽은 편지</li>
              </ul>
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
