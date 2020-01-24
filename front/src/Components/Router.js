import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
const Home = lazy(() => import('../Routes/Home'));
const Login = lazy(() => import('../Routes/Login'));
const SignUp = lazy(() => import('../Routes/SignUp'));
const Post = lazy(() => import('../Routes/Post'));
const Todo = lazy(() => import('../Routes/Todo'));

const Router = () => (
  <BrowserRouter>
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/signup" component={SignUp} exact></Route>
          <Route path="/post" component={Post} exact></Route>
          <Route path="/todo" component={Todo} exact></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Suspense>
    </>
  </BrowserRouter>
);

export default Router;
