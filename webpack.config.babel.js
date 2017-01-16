import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcssVr from 'postcss-vr';
import postcssFocus from 'postcss-focus';
import postcssPxToRem from 'postcss-pxtorem';

const paths = {
  src: './src',
  dest: 'dist',
};
const template = `${paths.src}/index.html`;
const html = new HtmlWebpackPlugin({
  template,
});

export default {
  entry: `${paths.src}/index.jsx`,
  output: {
    path: paths.dest,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: [html],
  postcss: [
    autoprefixer,
    postcssVr,
    postcssFocus,
    postcssPxToRem,
  ],
};
