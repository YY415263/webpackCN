/**
 * Created by zhekexinxi on 09/02/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');


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
            title:'Production'
        }),
        new ClearWebpackPlugin(['dist']),
    ]
}