import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('Should render without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

