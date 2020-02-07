import React, { useEffect } from 'react';
import HomePresenter from './HomePresenter';

import { useSelector, useDispatch } from 'react-redux';
import { POST_LOAD_REQUEST } from '../../modules/posts';

const listData = [];

const HomeContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: POST_LOAD_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      <HomePresenter listData={listData}></HomePresenter>
    </>
  );
};

export default HomeContainer;
