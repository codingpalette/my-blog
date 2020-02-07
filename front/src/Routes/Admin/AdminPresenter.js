import React, { Suspense, lazy } from 'react';
import Header from '../../Components/Common/Header';
import { adminApi } from '../../api';

const AdminPresenter = () => {
  const onClick = async () => {
    try {
      const { data } = await adminApi.users();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Suspense fallback={<Header />}>
        <Header />
        <div className="max_box" style={{ marginTop: '30px' }}>
          <button onClick={onClick}>테스트</button>
        </div>
      </Suspense>
    </>
  );
};

export default AdminPresenter;
