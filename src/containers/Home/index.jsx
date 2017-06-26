import React, { Component } from 'react';
import { GridRow, GridCol, Container, Header } from 'components';

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
          <Container class="search">
            <Header icon="search" text="Search for a Birthday" />
          </Container>
        </GridCol>
        <GridCol span={['12', '6@bp10']}>
          <Container class="result">
            <Header icon="result" text="Birthdays this Month" />
          </Container>
        </GridCol>
      </GridRow>
    );
  }
}

