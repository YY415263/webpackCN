/**
 * Created by zhekexinxi on 06/02/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        // app: './src/index.js',
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
        publicPath: '' //在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Hot Module Replacement'
        }),
        new ClearWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
