import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

const component = shallow(<Footer />);

describe('<Footer />', () => {
  it('Should render a "<Footer />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "footer"', () => {
    expect(component.type()).toEqual('footer');
  });

  it('Should contain a p element', () => {
    expect(component.find('p')).toHaveLength(1);
  });

  it('Should contain a small element', () => {
    expect(component.find('small')).toHaveLength(1);
  });
});
