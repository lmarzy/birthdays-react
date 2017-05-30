import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from './index';

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {
  it('should be of type "footer"', () => {
    expect(wrapper.type()).to.equal('footer');
  });

  it('should have a p element', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should have a small element', () => {
    expect(wrapper.find('small')).to.have.length(1);
  });
});
