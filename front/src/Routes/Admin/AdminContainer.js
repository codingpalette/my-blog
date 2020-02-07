import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminPresenter from './AdminPresenter';

const AdminContainer = ({ history }) => {
  const { claims } = useSelector(state => state.auths);

  // 레벨 여부
  useEffect(() => {
    if (claims.level !== 0) {
      history.push('/'); // 메인 화면으로 이동
    }
  }, [claims, history]);
  return (
    <>
      <AdminPresenter />
    </>
  );
};

export default withRouter(AdminContainer);
