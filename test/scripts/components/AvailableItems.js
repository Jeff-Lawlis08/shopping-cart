import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AvailableItems from '../../../app/scripts/components/AvailableItems';
import sinon from 'sinon';

describe('AvailableItems component', () => {
  let availableItems;

  beforeEach(()=>{
    availableItems = shallow(<AvailableItems/>);
  });
  it('should be a div element', () => {
    expect(availableItems.is('div')).to.equal(true);
  });
  it('should have an h3 and a ul as it\'s children', () => {
    expect(availableItems.children('h3')).to.have.length(1);
    expect(availableItems.children('ul')).to.have.length(1);
  });
  it('should have an Available Items h3', () => {
    expect(availableItems.children('h3').text()).to.equal('Available Items');
  });
});
