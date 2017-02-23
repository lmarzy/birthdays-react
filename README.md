# kickstarter-react
Kickstarter for a React app

## scripts
"clean": "rm -rf dist",
"stylelint": "stylelint src/**/*.scss",
"test": "mocha --compilers js:babel-register --require ignore-styles ./src/**/*.spec.js",
"start": "webpack-dev-server",
"build": "webpack -p"

## Dependencies
react
react-dom
react-router

## Dev dependencies
autoprefixer babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react babel-register chai css-loader enzyme eslint eslint-config-airbnb eslint-import-resolver-webpack eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react html-webpack-plugin ignore-styles mocha node-sass postcss postcss-focus postcss-loader postcss-pxtorem postcss-vr pre-commit react-addons-test-utils react-hot-loader sass-loader style-loader stylelint stylelint-config-standard stylelint-webpack-plugin webpack webpack-dev-server


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

const FunctionalComplex = () => {
  return (
    <div>Home</div>
  );
};

const FunctionalSimple = () => (
  <div>Functional Simple</div>
);


export default Name;
