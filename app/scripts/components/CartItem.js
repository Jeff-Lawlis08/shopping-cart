import React from 'react';
import store from '../store';

export default React.createClass({
  render(){
    console.log(this.props);
    return (
      <li>
        <span>{this.props.item.name}</span>
        <span>${this.props.item.price}</span>
        <input onClick={this.handleClick} type="button" value="remove item"/>
      </li>
    );
  },
  handleClick(e){
    store.cart.removeItem(this.props.item);
  }
});
