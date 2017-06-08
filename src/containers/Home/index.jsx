import React, { Component } from 'react';
import { GridRow, GridCol } from 'layout';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      test: 1,
    };
  }

  render() {
    return (
      <GridRow>
        <GridCol span={['12', '6@bp10']}>
          <div>left</div>
        </GridCol>
        <GridCol span={['12', '6@bp10']}>
          <div>right</div>
        </GridCol>
      </GridRow>
    );
  }
}
