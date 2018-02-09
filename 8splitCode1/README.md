
1,代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，
然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，
如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

*入口起点：使用 entry 配置手动地分离代码。
*防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
*动态导入：通过模块的内联函数调用来分离代码。


2,我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定(environment-specific)的配置中重复代码。



3,许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。
例如，当不处于生产环境中时，某些 library 为了使调试变得容易，可能会添加额外的日志记录(log)和测试(test)。
其实，当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，
从而删除或添加一些重要代码。我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量.
如果你正在使用像 react 这样的 library，那么在添加此 DefinePlugin 插件后，你应该看到 bundle 大小显著下降.

4,
(1)npm run develop webpack按照webpack.dev.js配置文件打包.
(2)npm run production webpack按照webpack.pro.js配置文件打包. 打包完成后可以对比打包的app.bundle.js大小区别很大的.
(3)npm run server 通过webpack-dev-middleware 配合 express 在 3000端口运行.
通过修改server.js中的配置
const config = require('./webpack.prod.js');   按照webpack.prod.js配置文件运行,可自动编译并没有热替换.
const config = require('./webpack.dev.js');    按照webpack.dev.js配置文件运行,可自动编译且可以热替换.