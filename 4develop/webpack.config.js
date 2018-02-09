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

    devtool:'inline-source-map',

    //告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    devServer:{
      contentBase:'./dist'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' //在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new ClearWebpackPlugin(['dist'])
    ]
}
