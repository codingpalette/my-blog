import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Post } from '../Routes';
import Header from './Common/Header';

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/post" component={Post} exact></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
