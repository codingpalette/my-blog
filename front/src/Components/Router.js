import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Common/Header';
const Home = lazy(() => import('../Routes/Home'));
const Post = lazy(() => import('../Routes/Post'));

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/post" component={Post} exact></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Suspense>
    </>
  </BrowserRouter>
);

export default Router;
