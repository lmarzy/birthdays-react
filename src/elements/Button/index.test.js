import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from './index';

const component = shallow(<Button type="button">Testing</Button>);

describe('<Button />', () => {
  it('Should render a "<Button />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "button"', () => {
    expect(component.type()).toEqual('button');
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<Button type="button">Testing</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
