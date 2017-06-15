import React from 'react';
import { shallow } from 'enzyme';

import About from './index';

const component = shallow(<About />);

describe('<About />', () => {
  it('Should render an "<About />" component', () => {
    expect(component).toHaveLength(1);
  });
});