import React, { Component } from 'react';
import { GridRow, GridCol, Button } from 'objects';

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
          <Button type="button" text="button" />
        </GridCol>
        <GridCol span={['12', '6@bp10']}>
          <Button type="button" text="button" />
        </GridCol>
      </GridRow>
    );
  }
}
