const path = require('path');
const webpack = require('webpack');
const appDirectory = path.resolve(__dirname, './');
console.log(appDirectory);
module.exports = {
  entry: {
    main: './index.web.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(appDirectory, 'dist')
  },  
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
