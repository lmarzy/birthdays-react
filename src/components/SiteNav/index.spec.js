import React from 'react';
import { shallow } from 'enzyme';

import Nav from './index';

const component = shallow(<Nav />);

describe('<Nav />', () => {
  it('Should render a "<Nav />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "nav"', () => {
    expect(component.type()).toEqual('nav');
  });

  it('Should contain a ul element', () => {
    expect(component.find('ul')).toHaveLength(1);
  });
});
