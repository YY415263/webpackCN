/**
 * Created by zhekexinxi on 06/02/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new ClearWebpackPlugin(['dist'])
    ]
}
