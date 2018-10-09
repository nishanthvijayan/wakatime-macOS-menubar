const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: './index.js',
  output: {
    filename: 'wakatime.5m.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env /usr/local/bin/node', raw: true }),
  ],
};
