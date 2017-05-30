import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './index';

const wrapper = shallow(<Header />);

describe('<Header />', () => {
  it('should be of type "header"', () => {
    expect(wrapper.type()).to.equal('header');
  });

  it('should have a h1 element', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
