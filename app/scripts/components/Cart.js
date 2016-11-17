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
  // componentDidMount(){
  //   store.cart.getTotal();
  // },
  render(){
        let allCartItems = this.state.cartItems.items.map((item, i, arr)=>{
          return (
            <CartItem key={i} item={item} index={i}/>
          );
        });
    return(
      <div>
      <h4>Your Cart</h4>
        <ul className="cart">
          {allCartItems}
        </ul>
        <span>Total: ${store.cart.get('total')}</span>
      </div>
    );
  }
});
