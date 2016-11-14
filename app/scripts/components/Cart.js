import React from 'react';
import store from '../store';
import CartItem from './CartItem';

export default React.createClass({
  getInitialState(){

    return {
      cartItems: store.cart.toJSON()
    };
  },
  componentWillMount(){
    store.cart.on('change update', () => {
      this.setState({cartItems: store.cart.toJSON()});
    });
  },
  render(){
        let allCartItems = this.state.cartItems.items.map((item, i, arr)=>{
          return (
            <CartItem key={item.name} item={item} index={i}/>
          )
        });
    return(
      <div>
      <h4>Your Cart</h4>
        <ul className="cart">
          {allCartItems}
        </ul>
        <span>Total: ${store.cart.getTotal()}</span>
      </div>
    );
  }
});
