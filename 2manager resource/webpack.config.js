/**
 * Created by zhekexinxi on 06/02/2018.
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
         rules: [
          {//样式
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
          },//图片
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
              'file-loader'
              ]
          },//字体
           {
               test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: [
               'file-loader'
               ]
           },//数据
            {
                test: /\.(csv|tsv)$/,
                use: [
               'csv-loader'
                ]
            },//数据
             {
                 test: /\.xml$/,
                 use: [
                'xml-loader'
                ]
            }
     ]
   }
};