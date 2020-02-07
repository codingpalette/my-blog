import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Post, Login, SignUp, Todo, PostCreate, Admin } from '../Routes';

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/signup" component={SignUp} exact></Route>
        <Route path="/post" component={Post} exact></Route>
        <Route path="/todo" component={Todo} exact></Route>
        <Route path="/create" component={PostCreate} exact></Route>
        <Route path="/admin" component={Admin} exact></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
