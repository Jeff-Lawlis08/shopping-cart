import {expect} from 'chai';
import Backbone from 'backbone';
import sinon from 'sinon';

import Cart from '../../../app/scripts/models/cart';

let cart;
beforeEach(()=>{
cart = new Cart();
});

//model functionality
describe('cart model', ()=>{
  it('should be a function', ()=>{
    expect(Cart).to.be.a('function');
  });

  it('should create a backbone model', ()=>{
    expect(cart).to.be.an.instanceof(Backbone.Model);
  });

//defaults
  it('should have a default total of 0', ()=>{
    expect(cart.get('total')).to.equal(0);
  });

  it('should have an empty default items array', ()=>{
    expect(cart.get('items')).to.be.an('array');
    expect(cart.get('items')).to.deep.equal([]);
  });
//methods
  it('should have a function addItem', ()=>{
    expect(cart).to.have.property('addItem');
    expect(cart.addItem).to.be.a('function');
  });

  it('should add an item to the items array when running addItem',()=>{
    cart.addItem({name:'Jeff',age:26});
    expect(cart.get('items')).to.deep.equal([{name:'Jeff',age:26}]);
  });

  it('should fire a change event when addItem is called', ()=>{
    let spy = sinon.spy();
    cart.on('change', spy);
    cart.addItem();
    expect(spy.callCount).to.equal(1);
  });

  it('should have a function removeItem', ()=>{
    expect(cart).to.have.property('removeItem');
    expect(cart.removeItem).to.be.a('function');
  });

  it('should remove an item when running removeItem', ()=>{
    cart.addItem('thing');
    cart.removeItem('thing');
    expect(cart.get('items')).to.deep.equal([]);
  });

  it('should fire a change event when removeItem is called', ()=>{
    let spy = sinon.spy();
    cart.addItem('hey');
    cart.on('change', spy);
    cart.removeItem('hey');
    expect(spy.callCount).to.equal(1);
  });

  it('should have a function getTotal', ()=>{
    expect(cart).to.have.property('getTotal');
    expect(cart.getTotal).to.be.a('function');
  });

  it('should get the total price of the items when running addItem', ()=>{
    cart.addItem({name: 'jeff', price: 5000});
    expect(cart.get('total')).to.equal(5000);
  });

  it('should not fire a change event when getTotal is called', ()=>{
    let spy = sinon.spy();
    cart.on('change', spy);
    cart.getTotal();
    expect(spy.callCount).to.equal(0);
  });
});
