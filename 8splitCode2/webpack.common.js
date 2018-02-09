/**
 * Created by zhekexinxi on 09/02/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'splitCode'
        }),
        new ClearWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
    ]
}