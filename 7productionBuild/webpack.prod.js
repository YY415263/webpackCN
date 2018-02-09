/**
 * Created by zhekexinxi on 09/02/2018.
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
 module.exports = merge(common, {
     entry: {
         app:'./src/index.js',
     },
     devtool: 'source-map',
     plugins: [
         new UglifyJSPlugin({
             sourceMap: true
         }),
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('production')
         })
     ]
 });