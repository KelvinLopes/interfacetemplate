import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import CardPost from './pages/Cardposts';
import PostFrontEnd from './pages/Posts/frontend';
import Lilira from './pages/liliraAST';

import PageError404 from './pages/pageNotFound';

export default function Routes() {
return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/devs/cardposts"  exact component={CardPost} />
      <Route path="/devs/post/frontend"  exact component={PostFrontEnd} />
      <Route path="/lilira"  exact component={Lilira} />
      <Route path="*" component={PageError404} />
    </Switch>
  </BrowserRouter>
  );
}
