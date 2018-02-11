/**
 * Created by zhekexinxi on 11/02/2018.
 */
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'webpack-numbers.js',
        path:path.resolve(__dirname,'dist'),
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: 'webpackNumbers'
    },
    externals: {//这意味着你的 library 需要一个名为 lodash 的依赖，这个依赖在用户的环境中必须存在且可用。
        'lodash': {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}