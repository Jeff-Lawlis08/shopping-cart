import React from 'react';
import store from '../store';

export default React.createClass({
  render(){
    return(
      <li>
        <span>{this.props.item.name}</span>
        <span>${this.props.item.price}</span>
        <input onClick={this.handleClick} type="button" value="Add To Cart"/>
      </li>
    );
  },
  handleClick(e){
    // console.log('clicked');
    store.cart.addItem(this.props.item);
  }
});
