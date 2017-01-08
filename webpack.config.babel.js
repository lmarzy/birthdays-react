import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcssVr from 'postcss-vr';
import postcssFocus from 'postcss-focus';
import postcssPxToRem from 'postcss-pxtorem';

const paths = {
  src: './src',
  dest: 'dist'
};
const template = `${paths.src}/index.html`
const html = new HtmlWebpackPlugin({
  template,
});

export default {
  entry: `${paths.src}/index.js`,
  output: {
    path: paths.dest,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }
    ]
  },
  plugins: [html],
  postcss: [
    autoprefixer,
    postcssVr,
    postcssFocus,
    postcssPxToRem,
  ],
};
