import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

const component = shallow(<Header icon="test" text="test" />);

describe('<Header />', () => {
  it('Should render a "<Header />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "header"', () => {
    expect(component.type()).toEqual('header');
  });
});