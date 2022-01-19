import { MyRoomWrap, MyLetterWrap } from '../style/styleMyRoom';
import { useState } from 'react';

function MyRoom() {
  const [isLetter, setIsLetter] = useState(false);

  const handleWatchLetter = () => {
    setIsLetter(true);
  };

  return (
    <MyRoomWrap>
      {isLetter ? (
        <MyLetterWrap>
          <div>우체통</div>
          <div>여기 보여지는 편지</div>
        </MyLetterWrap>
      ) : (
        <MyLetterWrap>
          <div onClick={handleWatchLetter}>우체통</div>
        </MyLetterWrap>
      )}
    </MyRoomWrap>
  );
}

export default MyRoom;
