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
    externals: {
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