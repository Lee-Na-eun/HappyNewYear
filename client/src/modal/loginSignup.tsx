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
import { modalClose, loginDone } from '../redux/nav/loginSignup';
import { navClose } from '../redux/nav/nav';
import { login } from '../redux/user/user';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';
import swal from 'sweetalert';

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
      const validPassword = /^[a-zA-z0-9]{5,}$/;

      if (
        !signupInfo.signupId ||
        !signupInfo.signupPassword ||
        !signupInfo.signupRepassword
      ) {
        setSingUpErrMsg('정보를 모두 입력해주세요.');
      } else if (!validId.test(signupInfo.signupId)) {
        setSingUpErrMsg('아이디는 2글자 이상 15글자 이하여야 합니다.');
      } else if (!validPassword.test(signupInfo.signupPassword)) {
        setSingUpErrMsg(
          '비밀번호는 영문, 숫자 조합으로만 5글자 이상이어야 합니다.'
        );
      } else if (signupInfo.signupPassword !== signupInfo.signupRepassword) {
        setSingUpErrMsg('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      } else {
        setSingUpErrMsg('');
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

        if (result.data.message === 'ok') {
          swal({
            title: '회원가입이 완료되었습니다.',
            text: '환영합니다🌈 활동을 원할시 로그인해주세요.',
            icon: 'success',
          });
        }
      }
    } catch (err: any) {
      if (err.message === 'Network Error') {
        swal({
          title: '네트워크가 불안정 합니다.',
          text: '잠시 후에 이용 부탁드립니다.',
          icon: 'error',
        });
      } else if (err.response.data.message === 'same userId') {
        swal({
          title: '이미 존재하는 아이디 입니다.',
          text: '다른 아이디로 시도해주세요.',
          icon: 'warning',
        });
      }
    }
  };

  const handleLogin = async () => {
    // axios 요청 해주기, error 메세지 띄워주기
    try {
      if (!loginInfo.loginId || !loginInfo.loginPassword) {
        setLoginErrMsg('정보를 모두 입력해주세요.');
      } else {
        setSingUpErrMsg('');
        const secretKey = process.env.SECRET_KEY || 'secretKey';

        const encrypted = CryptoJS.AES.encrypt(
          JSON.stringify(loginInfo.loginPassword),
          secretKey
        ).toString();
        // 비밀번호 암호화

        const result = await axios.post(`${url}/user/login`, {
          userId: loginInfo.loginId,
          password: encrypted,
        });

        console.log(result);

        if (result.data.message === 'ok') {
          swal({
            title: '로그인이 완료되었습니다.',
            text: '즐거운 시간 되세요! 😆',
            icon: 'success',
          }).then(() => {
            dispatch(login({ ...result.data.userInfo }));
            dispatch(loginDone());
            dispatch(modalClose());
            dispatch(navClose());
          });
          console.log(result);
        }
      }
    } catch (err: any) {
      if (err.message === 'Network Error') {
        swal({
          title: '네트워크가 불안정 합니다.',
          text: '잠시 후에 이용 부탁드립니다.',
          icon: 'error',
        });
      } else if (err.response.data.message === 'Invalid User') {
        swal({
          title: '존재하지 않는 아이디 입니다.',
          text: '회원가입 후 이용 부탁드립니다.',
          icon: 'warning',
        });
      } else if (err.response.data.message === 'Wrong Password') {
        swal({
          title: '비밀번호가 틀렸습니다.',
          text: '다시한번 시도해주세요.',
          icon: 'warning',
        });
      }
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
                  <input
                    type='password'
                    onChange={handleLoginInputValue('loginPassword')}
                  />
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
                  <input
                    type='password'
                    onChange={handleSignupInputValue('signupPassword')}
                  />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호 재입력</span>
                  <input
                    type='password'
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
