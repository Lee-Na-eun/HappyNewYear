import {
  LoginSignupModal,
  ModalWrap,
  ModalBox,
  SelectLoginSignup,
  LoginWrap,
  SignupWrap,
  LoginInputWrap,
  SignupInputWrap,
  ButtonWrap,
  AlertError,
} from '../style/styleLoginSignup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resultStatus } from '../redux/quiz/result';
import { modalClose } from '../redux/nav/loginSignup';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';

axios.defaults.withCredentials = true;

function LoginSignup() {
  const statusResult = useSelector(resultStatus);
  const dispatch = useDispatch();

  const url: string = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  const [isLogin, setIsLogin] = useState(true);
  const [signupInfo, setSignupInfo] = useState({
    signupId: '',
    signupPassword: '',
    signupRepassword: '',
  });

  const [loginInfo, setLoginInfo] = useState({
    loginId: '',
    loginPassword: '',
  });

  const [loginErrMsg, setLoginErrMsg] = useState('');
  const [singUpErrMsg, setSingUpErrMsg] = useState('');

  const handleChangeSignup = () => {
    setIsLogin(false);
  };

  const handleChangeLogin = () => {
    setIsLogin(true);
  };

  const handleCloseModal = () => {
    dispatch(modalClose());
  };

  const handleSignupInputValue = (key: string) => (e: any) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  const handleLoginInputValue = (key: string) => (e: any) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSignup = async () => {
    // axios 요청 해주기, error 메세지 띄워주기
    try {
      const validId = /^[a-zA-zㄱ-ㅎ가-힣0-9]{2,15}$/;
      const validPassword = /^[a-zA-z0-9]{8,}$/;

      if (
        !signupInfo.signupId ||
        !signupInfo.signupPassword ||
        !signupInfo.signupRepassword
      ) {
        setSingUpErrMsg('정보를 모두 입력해주세요.');
      } else if (!validId.test(signupInfo.signupId)) {
        setSingUpErrMsg('아이디는 2글자 이상 15글자 이하여야 합니다.');
      } else if (!validPassword.test(signupInfo.signupPassword)) {
        setSingUpErrMsg('비밀번호는 영문, 숫자 조합 8글자 이상이어야 합니다.');
      } else if (signupInfo.signupPassword !== signupInfo.signupRepassword) {
        setSingUpErrMsg('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      } else {
        const secretKey = process.env.SECRET_KEY || 'secretKey';

        const encrypted = CryptoJS.AES.encrypt(
          JSON.stringify(signupInfo.signupPassword),
          secretKey
        ).toString();
        // 비밀번호 암호화

        const result = await axios.post(`${url}/user/signup`, {
          userId: signupInfo.signupId,
          password: encrypted,
        });

        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogin = async () => {
    // axios 요청 해주기, error 메세지 띄워주기
    try {
      if (!loginInfo.loginId || !loginInfo.loginPassword) {
        setLoginErrMsg('정보를 모두 입력해주세요.');
      }
      console.log('axios 요청 해주세요');
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(statusResult);
  // console.log(loginInfo);

  return (
    <LoginSignupModal>
      <ModalWrap
        className={statusResult.isModalOpen.open ? 'fadeIn' : 'fadeOut'}
      >
        <ModalBox>
          <SelectLoginSignup>
            <li
              className={isLogin ? 'changeColor' : ''}
              onClick={handleChangeLogin}
            >
              로그인 하기
            </li>
            <li
              className={isLogin ? '' : 'changeColor'}
              onClick={handleChangeSignup}
            >
              회원가입 하기
            </li>
          </SelectLoginSignup>
          {isLogin ? (
            <LoginWrap>
              <LoginInputWrap>
                <div className='inputWrap'>
                  <span>아이디</span>
                  <input onChange={handleLoginInputValue('loginId')} />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호</span>
                  <input onChange={handleLoginInputValue('loginPassword')} />
                </div>
              </LoginInputWrap>
              <AlertError>{loginErrMsg}</AlertError>
              <ButtonWrap>
                <button onClick={handleLogin}>로그인</button>
                <button onClick={handleCloseModal}>취소</button>
              </ButtonWrap>
            </LoginWrap>
          ) : (
            <SignupWrap>
              <SignupInputWrap>
                <div className='inputWrap'>
                  <span>아이디</span>
                  <input onChange={handleSignupInputValue('signupId')} />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호</span>
                  <input onChange={handleSignupInputValue('signupPassword')} />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호 재입력</span>
                  <input
                    onChange={handleSignupInputValue('signupRepassword')}
                  />
                </div>
              </SignupInputWrap>
              <AlertError>{singUpErrMsg}</AlertError>
              <ButtonWrap>
                <button onClick={handleSignup}>회원가입</button>
                <button onClick={handleCloseModal}>취소</button>
              </ButtonWrap>
            </SignupWrap>
          )}
        </ModalBox>
      </ModalWrap>
    </LoginSignupModal>
  );
}

export default LoginSignup;
