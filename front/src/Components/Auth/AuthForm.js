import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  SIGNUP_REQUEST,
  LOGIN_REQUEST,
  RESET_SUCCESS,
  GOOGLE_LOGIN_REQUEST,
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
  &:focus {
    outline: 1px solid #6c63ff;
  }
`;

const AuthForm = memo(({ location: { pathname }, history }) => {
  const [idvalue, setIdvalue] = useState('');
  const [passvalue, setPassvalue] = useState('');
  const [passvalue2, setPassvalue2] = useState('');
  const [alertvalue, setAlertvalue] = useState('');
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

    if (pathname === '/login') {
      dispatch({
        type: LOGIN_REQUEST,
        data: {
          idvalue,
          passvalue,
        },
      });
    } else {
      if (passvalue !== passvalue2) {
        setAlertvalue('비밀번호가 서로 다릅니다.');
        return;
      }
      dispatch({
        type: SIGNUP_REQUEST,
        data: {
          idvalue,
          passvalue,
        },
      });
    }
  };
  const googleLogin = e => {
    dispatch({
      type: GOOGLE_LOGIN_REQUEST,
    });
  };

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
              <Button to={'/signup'} style={{ fontSize: '12px' }}>
                회원가입
              </Button>
            ) : (
              <Button to={'/login'} style={{ fontSize: '12px' }}>
                로그인
              </Button>
            )}
          </div>
          {pathname === '/login' ? (
            <Button fullWidth style={{ marginTop: '15px' }}>
              로그인
            </Button>
          ) : (
            <Button fullWidth style={{ marginTop: '15px' }}>
              회원가입
            </Button>
          )}
          <Button
            type="button"
            fullWidth
            secondary
            style={{ marginTop: '15px' }}
            onClick={googleLogin}
          >
            구글로그인
          </Button>
        </form>
        <AlertBox>{alertvalue}</AlertBox>
      </FormContainer>
    </>
  );
});

export default withRouter(AuthForm);
