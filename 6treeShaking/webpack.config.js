/**
 * Created by zhekexinxi on 06/02/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        filename: '[name].bundle.js',//打包js的名字
        publicPath: '/' //打包成功后的文件路径 ,以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'tree shaking'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin()
    ]
}
