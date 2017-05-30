import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Input from './index';

const wrapper = shallow(<Input type="text" />);

describe('<Input />', () => {
  it('should be of type "input"', () => {
    expect(wrapper.type()).to.equal('input');
  });
});
