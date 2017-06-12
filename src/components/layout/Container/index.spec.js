import React from 'react';
import { shallow } from 'enzyme';

import Container from './index';

const component = shallow(<Container><div></div><div></div></Container>);

describe('<Container />', () => {
  it('Should render a "<Container />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "div"', () => {
    expect(component.type()).toEqual('div');
  });
});