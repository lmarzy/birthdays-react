import React, { Component } from 'react';
import { Icon } from 'elements';

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

