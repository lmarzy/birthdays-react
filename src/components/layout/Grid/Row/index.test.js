import React from 'react';
import { shallow } from 'enzyme';

import GridRow from './index';

const component = shallow(<GridRow><div></div><div></div></GridRow>);

describe('<GridRow />', () => {
  it('Should render a "<GridRow />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "div"', () => {
    expect(component.type()).toEqual('div');
  });
});