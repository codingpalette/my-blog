import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  SIGNUP_REQUEST,
  LOGIN_REQUEST,
  RESET_SUCCESS,
} from '../../modules/auths';
import { ALERT_SUCCESS, ALERT_FAILURE } from '../../modules/alerts';
import Button from '../Common/Button';
import AlertBox from '../Common/AlertBox';

const FormContainer = styled.div`
  max-width: 360px;
  width: 100%;
  h1 {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  border: none;
  background-color: #edf2f7;
  width: 100%;
  display: block;
  padding: 8px 16px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 10px;
  border-radius: 0;
  &:focus {
    outline: 1px solid #6c63ff;
  }
  &::placeholder {
    color: #4a5568;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;

const AuthForm = memo(({ location: { pathname }, history }) => {
  const [idvalue, setIdvalue] = useState('');
  const [passvalue, setPassvalue] = useState('');
  const [passvalue2, setPassvalue2] = useState('');
  const [alertvalue, setAlertvalue] = useState('');
  const [counter, setCounter] = useState(1);
  const { isSignup, isAuthError } = useSelector(state => state.auths);
  const dispatch = useDispatch();

  const idChange = e => {
    setIdvalue(e.target.value);
  };
  const passChange = e => {
    setPassvalue(e.target.value);
  };
  const passChange2 = e => {
    setPassvalue2(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (passvalue !== passvalue2) {
      setAlertvalue('비밀번호가 서로 다릅니다.');
      return;
    }
    pathname === '/login'
      ? dispatch({
          type: LOGIN_REQUEST,
          data: {
            idvalue,
            passvalue,
          },
        })
      : dispatch({
          type: SIGNUP_REQUEST,
          data: {
            idvalue,
            passvalue,
          },
        });
    setCounter(counter + 1);
  };
  // const googleLogin = e => {};

  // 처음 리엣
  useEffect(() => {
    dispatch({
      type: RESET_SUCCESS,
    });
  }, [dispatch]);

  // 회원가입 성공
  useEffect(() => {
    if (isSignup) {
      history.push('/login'); // 로그인 화면으로 이동
    }
  }, [isSignup, history]);

  // 실패 처리
  useEffect(() => {
    dispatch({
      type: ALERT_FAILURE,
    });
    if (isAuthError !== '') {
      dispatch({
        type: ALERT_SUCCESS,
      });
      if (isAuthError === 'auth/invalid-email') {
        setAlertvalue('이메일 주소가 올바르지 않습니다.');
      }
      if (isAuthError === 'auth/wrong-password') {
        setAlertvalue('비밀번호를 올바르게 입력해주세요.');
      }
      if (isAuthError === 'auth/weak-password') {
        setAlertvalue('비밀번호를 6자리 이상 입력해주세요.');
      }
      if (isAuthError === 'auth/email-already-in-use') {
        setAlertvalue('이미 가입되어 있는 이메일 입니다.');
      }
      if (isAuthError === 'auth/user-not-found') {
        setAlertvalue('등록되지 않은 이메일 입니다.');
      }
    }
  }, [isAuthError, dispatch]);

  return (
    <>
      <FormContainer className="content_box">
        <h1>
          <Link to="/">로고</Link>
        </h1>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="아이디"
            value={idvalue}
            onChange={idChange}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={passvalue}
            onChange={passChange}
          />
          {pathname === '/signup' && (
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={passvalue2}
              onChange={passChange2}
            />
          )}
          <div style={{ textAlign: 'right' }}>
            {pathname === '/login' ? (
              <Button ghost="true" to={'/signup'}>
                회원가입
              </Button>
            ) : (
              <Button ghost="true" to={'/login'}>
                로그인
              </Button>
            )}
          </div>
          {pathname === '/login' ? (
            <Button fullWidth style={{ marginTop: '10px' }}>
              로그인
            </Button>
          ) : (
            <Button fullWidth style={{ marginTop: '10px' }}>
              회원가입
            </Button>
          )}
          {/* <Button
            type="button"
            fullWidth
            secondary
            style={{ marginTop: '10px' }}
            onClick={googleLogin}
          >
            구글로그인
          </Button> */}
        </form>
        <AlertBox>{alertvalue}</AlertBox>
      </FormContainer>
    </>
  );
});

export default withRouter(AuthForm);
