import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Cart from '../../../app/scripts/components/Cart';
import sinon from 'sinon';

describe('Cart component', () => {
  let cart;

  beforeEach(()=>{
    cart = shallow(<Cart />);
  });
  it('should be a div element', () => {
    expect(cart.is('div')).to.equal(true);
  });
  it('should have an h4, ul, and a span as it\'s children', () => {
    expect(cart.children('h4')).to.have.length(1);
    expect(cart.children('ul')).to.have.length(1);
    expect(cart.children('span')).to.have.length(1);
  });
  it('should have an Your Cart h4', () => {
    expect(cart.children('h4').text()).to.equal('Your Cart');
  });
});
