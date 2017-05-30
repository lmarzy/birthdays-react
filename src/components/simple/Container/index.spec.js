import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Container from './index';

const wrapper = shallow(<Container>test</Container>);

describe('<Container />', () => {
  it('should be of type "div"', () => {
    expect(wrapper.type()).to.equal('div');
  });
});
