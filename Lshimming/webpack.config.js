/**
 * Created by zhekexinxi on 06/02/2018.
 */

const path = require('path');
const webpack = require('webpack');


module.exports = {
    //entry: './src/index.js',
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
      module: {
          loaders: [
              {
                  test: /\.js$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel-loader',
                  query: {
                      presets: ['es2015']
                  }
              }
          ],
         rules: [
              // {
              //     test: require.resolve('./src/index.js'),
              //     use: 'imports-loader?this=>window'
              // },
              {
                 test: require.resolve('./src/globals.js'),
                 use: 'exports-loader?file,parse=helpers.parse'
              }
            ]

      },
       plugins: [
         new webpack.ProvidePlugin({
               //_: 'lodash'
             join: ['lodash', 'join']
    })
  ]
};