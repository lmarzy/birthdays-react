import React, { Component } from 'react';
import { GridRow, GridCol } from 'components';

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
          left
        </GridCol>
        <GridCol span={['12', '6@bp10']}>
          right
        </GridCol>
      </GridRow>
    );
  }
}
