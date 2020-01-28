import React, { Suspense, lazy } from 'react';
const AuthLayout = lazy(() => import('../../Layout/AuthLayout'));

const SignUpPresenter = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <AuthLayout />
      </Suspense>
    </>
  );
};

export default SignUpPresenter;
