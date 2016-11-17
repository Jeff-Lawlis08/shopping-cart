import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Item from '../../../app/scripts/components/Item';
import sinon from 'sinon';

describe('Item component', () => {
  let item;
  beforeEach(() => {
    let item = shallow(<Item />);
  });
  it('should be an li element', () => {
      expect(item.is('li')).to.equal(true);
  });
});
