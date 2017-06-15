import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

const component = shallow(<Home />);

describe('<Home />', () => {
  it('Should render an "<Home />" component', () => {
    expect(component).toHaveLength(1);
  });
});