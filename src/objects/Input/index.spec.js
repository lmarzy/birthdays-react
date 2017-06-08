import React from 'react';
import { shallow } from 'enzyme';

import Input from './index';

const component = shallow(<Input type="text" />);

describe('<Input />', () => {
  it('Should render a "<Input />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('should be of type "input"', () => {
    expect(component.type()).toEqual('input');
  });
});