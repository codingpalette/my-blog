import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Post, Login, SignUp, Todo, PostCreate, Admin } from '../Routes';

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/post" component={Post}></Route>
        <Route path="/todo" component={Todo}></Route>
        <Route path="/create" component={PostCreate}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
