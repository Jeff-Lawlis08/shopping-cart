import React from 'react';
import store from '../store';
import Item from './Item';
import Cart from './Cart';

export default React.createClass({
  render(){
    let allAvailableItems = store.merch.map((item, i, arr) => {
      return (
        <Item key={item.name} item={item}/>
    );
    });
    return(
      <div>
      <h3>Available Items</h3>
        <ul className="available-items">
          {allAvailableItems}
        </ul>
        <Cart/>
      </div>
    );
  }
});
