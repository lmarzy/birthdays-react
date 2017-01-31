import React, { Component } from 'react';

class Class extends Component {
  constructor() {
    super();
    this.state = {
      test: 123,
    };
  }
  render() {
    return (
      <div>{this.state.test}</div>
    );
  }
}

export default Class;
