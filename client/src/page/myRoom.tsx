import {
  MyRoomWrap,
  MyLetterWrap,
  LetterBox,
  LetterHead,
} from '../style/styleMyRoom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resultStatus } from '../redux/quiz/result';
import { logout } from '../redux/user/user';
import { navClose } from '../redux/nav/nav';
import { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.withCredentials = true;

function MyRoom() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const statusResult = useSelector(resultStatus);
  const dispatch = useDispatch();
  const [isLetter, setIsLetter] = useState(false);

  useEffect(() => {}, []);

  const handleWatchLetter = () => {
    setIsLetter(true);
  };

  const handleCloseLetter = () => {
    setIsLetter(false);
  };

  const handleMyRoom = async () => {
    try {
      const result = await axios.get(
        `${url}/user/myRoom?user=${statusResult.userInfo.id}`,
        {
          headers: {
            authorization: `bearer ${statusResult.userInfo.accessToken}`,
          },
        }
      );

      if (result.data.message === 'ok') {
        console.log(result);
        dispatch(navClose());
      }
    } catch (err: any) {
      if (err.response.data.message === 'Send new Login Request') {
        swal({
          title: '재로그인이 필요합니다.',
          text: '다시 로그인 후 이용 부탁드립니다.',
          icon: 'warning',
        }).then(() => {
          dispatch(logout());
          dispatch(navClose());
          window.location.replace('/');
        });
      }
    }
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
            <ul className={isLetter ? 'letterBox' : 'noneLetterBox'}>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
              <li>편지에오</li>
            </ul>
          </LetterBox>
        </div>
      </MyLetterWrap>
    </MyRoomWrap>
  );
}

export default MyRoom;
