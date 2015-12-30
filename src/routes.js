import React from 'react';
import {Route} from 'react-router';

import Main from 'components/main';
import Example from 'components/Pages/example';
import Home from 'components/pages/home';

const routes = (
  <Route handler={Main}>
    <Route name='example' handler={Example}/>
    <Route name='home' handler={Home}  path='/'/>
  </Route>
);

export default routes;
