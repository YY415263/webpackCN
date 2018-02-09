
1,代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，
然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，
如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

*入口起点：使用 entry 配置手动地分离代码。
*防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
*动态导入：通过模块的内联函数调用来分离代码。

此项目用的是第三种

3,当涉及到动态代码拆分时，webpack 提供了两个类似的技术。对于动态导入，
第一种，也是优先选择的方式是，使用符合 ECMAScript 提案 的 import() 语法。
第二种，则是使用 webpack 特定的 require.ensure。


特别注意
 import它接收一个 path参数，指的是该子模块对于的路径，同时还注意到其中可以添加一行注释
 /* webpackChunkName: "lodash" */，该注释并非是无用的，
 它定义了该子模块的 name，其对应与 output.chunkFilename中的 [name]。