import HtmlWebpackPlugin from 'html-webpack-plugin';

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
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [html]
};
