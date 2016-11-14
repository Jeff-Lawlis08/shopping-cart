import {Route, Router, hashHistory} from 'react-router';
import React from 'react';

import Cart from './components/Cart';
import CartItem from './components/CartItem';
import AvailableItems from './components/AvailableItems';
import Item from './components/Item';


const router = (
  <Router history={hashHistory}>
    <Route path='/' components={AvailableItems}/>

  </Router>
);
  // <Route path='/' components={AvailableItems}/>
export default router;
