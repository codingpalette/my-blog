import React, { useState, useEffect, useCallback } from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';

import * as firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { STATE_USER_SUCCESS } from '../modules/auths';

function App() {
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();

  const userState = useCallback(
    async user => {
      try {
        const token = await user.getIdToken();
        const { claims } = await user.getIdTokenResult();
        // console.log(claims);
        dispatch({
          type: STATE_USER_SUCCESS,
          data: { user, token, claims },
        });
      } catch (e) {
        // console.log(e);
      } finally {
        setRender(true);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user);

      userState(user);
    });
  }, [userState]);

  return (
    <>
      <GlobalStyles />
      {render && <Router />}
    </>
  );
}

export default App;
