/**
 * Created by zhekexinxi on 09/02/2018.
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
     entry: {
         app:'./src/index.js',
     },
     plugins: [
         new UglifyJSPlugin()
     ]
 });