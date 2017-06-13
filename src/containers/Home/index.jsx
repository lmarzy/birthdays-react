import React, { Component } from 'react';
import { Icon } from 'components';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      test: 1,
    };
  }

  render() {
    return (
      <div>
        <Icon name="tick" />
        <Icon name="cross" />
      </div>
    );
  }
}

