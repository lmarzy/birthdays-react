import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from './index';

const wrapper = shallow(<Button type="button">Testing</Button>);

describe('<Button />', () => {
  it('should be of type "button"', () => {
    expect(wrapper.type()).to.equal('button');
  });

  it('should have a "type" attribute', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });
});
