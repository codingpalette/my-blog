import React, { useState, useEffect, memo } from 'react';
import HomePresenter from './HomePresenter';

import { useSelector, useDispatch } from 'react-redux';
import { POST_LOAD_REQUEST, POST_SCROLL_REQUEST } from '../../modules/posts';

const HomeContainer = memo(() => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    lastH: null,
  });
  const { Items, Last } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: POST_LOAD_REQUEST,
    });
  }, [dispatch]);

  const onScroll = () => {
    setState({
      y: window.scrollY,
      x: window.scrollX,
      lastH: document.body.scrollHeight - window.innerHeight,
    });
    // console.log('y' , window.scrollY , 'x' , window.scrollX);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    if (state.y === state.lastH) {
      dispatch({
        type: POST_SCROLL_REQUEST,
        data: Last,
      });
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [state, dispatch, Last]);

  // console.log(Last);

  return (
    <>
      <HomePresenter listData={Items}></HomePresenter>
    </>
  );
});

export default HomeContainer;
