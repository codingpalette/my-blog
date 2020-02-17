import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PostPresenter from './PostPresenter';

import { useDispatch, useSelector } from 'react-redux';
import {
  POST_DETAIL_LOAD_REQUEST,
  POST_RESET_VIEW_REQUEST,
} from '../../modules/posts';

const PostContainer = ({ location }) => {
  const { viewLoding } = useSelector(state => state.posts);
  const path = location.pathname.split('/');
  const id = path[2] + '_' + path[3];
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: POST_RESET_VIEW_REQUEST,
    });
    dispatch({
      type: POST_DETAIL_LOAD_REQUEST,
      data: id,
    });
  }, [dispatch, id]);

  return (
    <>
      <PostPresenter viewLoding={viewLoding} />
    </>
  );
};

export default withRouter(PostContainer);
