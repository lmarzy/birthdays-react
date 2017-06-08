import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

const component = shallow(<Header />);

describe('<Header />', () => {
  it('Should render a "<Header />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "header"', () => {
    expect(component.type()).toEqual('header');
  });

  it('Should contain a h1 element', () => {
    expect(component.find('h1')).toHaveLength(1);
  });
});
