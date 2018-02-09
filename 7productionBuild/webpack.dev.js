/**
 * Created by zhekexinxi on 09/02/2018.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: {
        app:[
            'webpack-hot-middleware/client',
            './src/index.js'
        ],
    },
    devtool: 'inline-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
 });