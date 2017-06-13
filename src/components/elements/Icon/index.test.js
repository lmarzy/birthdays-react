import React from 'react';
import { shallow } from 'enzyme';

import Icon from './index';

const component = shallow(<Icon name='tick' />);

describe('<Icon />', () => {
  it('Should render a "<Icon />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "svg"', () => {
    expect(component.type()).toEqual('svg');
  });
});
