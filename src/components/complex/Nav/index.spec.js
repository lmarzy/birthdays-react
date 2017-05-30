import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Nav from './index';

const wrapper = shallow(<Nav />);

describe('<Navigation />', () => {
  it('should be of type "nav"', () => {
    expect(wrapper.type()).to.equal('nav');
  });

  it('should have a ul element', () => {
    expect(wrapper.find('ul')).to.have.length(1);
  });
});
