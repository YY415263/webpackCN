/**
 * Created by zhekexinxi on 06/02/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
module.exports = {
    entry: {
        app:[
            'webpack-hot-middleware/client',
            './src/index.js'
        ],
    },

    devtool:'inline-source-map',

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
            title:'tree shaking'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ClearWebpackPlugin(['dist']),
        new UglifyJSPlugin()

    ]
}
//new UglifyJSPlugin()