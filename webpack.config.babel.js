import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

const paths = {
  src: './src',
  dest: 'dist',
};
const template = `${paths.src}/index.html`;
const loaderOptions = { eslint: { configFile: './.eslintrc' } };

export default () => ({
  entry: `${paths.src}/index.jsx`,
  output: {
    path: resolve(__dirname, paths.dest),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: ['css-loader?modules', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      containers: resolve(__dirname, 'src/containers'),
      components: resolve(__dirname, 'src/components'),
      sassVars: resolve(__dirname, 'src/assets/css/01-settings/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template }),
    new ExtractTextPlugin('main.css'),
    new webpack.LoaderOptionsPlugin({ options: loaderOptions }),
    new StyleLintPlugin(),
  ],
});
