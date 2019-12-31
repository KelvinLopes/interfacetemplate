import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import CardPost from './pages/Cardposts';

export default function Routes() {
return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/devs/cardposts" exact component={CardPost} />
    </Switch>
  </BrowserRouter>
  );
}
