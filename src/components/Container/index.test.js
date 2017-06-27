import React from 'react';
import { shallow } from 'enzyme';

import Container from './index';

const component = shallow(<Container class="search"><test /></Container>);

describe('<Container />', () => {
  it('Should render a "<Container />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "section"', () => {
    expect(component.type()).toEqual('section');
  });
});
