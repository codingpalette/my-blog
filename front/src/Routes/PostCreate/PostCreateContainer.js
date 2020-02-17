import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostCreatePresenter from './PostCreatePresenter';
import {
  POST_ID_REQUEST,
  POST_ID_FAILURE,
  POST_DETAIL_LOAD_REQUEST,
} from '../../modules/posts';

const PostCreateContainer = ({ history, location: { search } }) => {
  const dispatch = useDispatch();
  const { claims } = useSelector(state => state.auths);
  const { setId } = useSelector(state => state.posts);

  // 레벨 여부

  useEffect(() => {
    if (claims === null || claims.level !== 0) {
      history.push('/'); // 메인 화면으로 이동
    }
  }, [claims, history]);

  useEffect(() => {
    function getUrlParams() {
      const params = {};
      search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value;
      });
      return params;
    }
    // console.log(getUrlParams().id);
    dispatch({
      type: POST_ID_REQUEST,
      data: getUrlParams().id,
    });
    return () => {
      dispatch({
        type: POST_ID_FAILURE,
      });
    };
  }, [search, dispatch]);

  useEffect(() => {
    if (setId) {
      console.log('aaa');
      dispatch({
        type: POST_DETAIL_LOAD_REQUEST,
        data: setId,
      });
    }
  }, [setId, dispatch]);

  return (
    <>
      <PostCreatePresenter />
    </>
  );
};

export default withRouter(PostCreateContainer);
