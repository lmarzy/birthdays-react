import React from 'react';
import { shallow } from 'enzyme';

import GridCol from './index';

const component = shallow(<GridCol span={['1', '2']}><div></div><div></div></GridCol>);

describe('<GridCol />', () => {
  it('Should render a "<GridCol />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "div"', () => {
    expect(component.type()).toEqual('div');
  });
});