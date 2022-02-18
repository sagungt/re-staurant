const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const FontminPlugin = require('fontmin-webpack');
const RunNodeWebpackPlugin = require('run-node-webpack-plugin');
const path = require('path');

const root = (dir) => path.resolve(__dirname, dir);

module.exports = {
  entry: {
    main: root('src/scripts/index.js'),
  },
  output: {
    path: root('dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: root('src/public/'),
          to: root('dist/'),
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: root('src/public/images/Re-logo-mono.png'),
    }),
    new ServiceWorkerWebpackPlugin({
      entry: root('src/scripts/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /(hero-image)(.+)\.(jpg)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new FontminPlugin(),
    new RunNodeWebpackPlugin({ scriptToRun: root('src/scripts/utils/image-resizer.js') }),
  ],
};
