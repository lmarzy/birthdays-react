import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

const component = shallow(<Button type="button">Testing</Button>);

describe('<Button />', () => {
  it('Should render a "<Button />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "button"', () => {
    expect(component.type()).toEqual('button');
  });
});
