import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import CardPost from './pages/Cardposts';
import PostFrontEnd from './pages/Posts/frontend';

export default function Routes() {
return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/devs/cardposts"  component={CardPost} />
      <Route path="/devs/post/frontend"  component={PostFrontEnd} />
    </Switch>
  </BrowserRouter>
  );
}
