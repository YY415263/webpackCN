1,为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader：
npm install --save-dev style-loader css-loader



2,我们的背景和图标这些图片，要如何处理呢？使用 file-loader，我们可以轻松地将这些内容混合到 CSS 中：
npm install --save-dev file-loader




3,file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录。这就是说，我们可以将它们用于任何类型的文件，包括字体。




4,此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，
也就是说 import Data from './data.json'
 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。



 特别注意 :
 (1)path:是控制打包成功后文件   存放   的路径,
 (2)publicPath:能帮助你为项目中的所有资源指定一个基础路径.
  a, 会影响打包成功后文件  访问   路径 , 例如 '/'  以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)
  b, 如果用npm run build 直接打包 publicPath 会影响 index.html里引用app.bundle.js的路径
