import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';

import * as firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { STATE_USER_SUCCESS } from '../modules/auths';

function App() {
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      dispatch({
        type: STATE_USER_SUCCESS,
        data: user,
      });
      setRender(true);
    });
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      {render && <Router />}
    </>
  );
}

export default App;
