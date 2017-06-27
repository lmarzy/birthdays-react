import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Heading from './index';

const component = shallow(<Heading>Testing</Heading>);

describe('<Heading />', () => {
  it('Should render a "<Heading />" component', () => {
    expect(component).toHaveLength(1);
  });

  it('Should be of type "h2"', () => {
    expect(component.type()).toEqual('h2');
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<Heading>Testing</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});