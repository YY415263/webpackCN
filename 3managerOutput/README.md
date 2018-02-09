1,在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始
对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，
一切就会变得困难起来。然而，可以通过一些插件，会使这个过程更容易操控。



2,如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将
被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin
来解决这个问题。


3,虽然在 dist/ 文件夹我们已经有 index.html 这个文件，然而 HtmlWebpackPlugin
还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。



4,由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。webpack 会生成文件，
然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。
通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。
clean-webpack-plugin 是一个比较普及的管理插件
(webpack 打包的时候dist文件才会显示在硬盘上，如果是web-dev-server或者webpack-dev-middleware
生成的index.html bundle.js 只是在内存中)



5,runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，
以及懒加载模块的执行逻辑。


6,一旦你的应用程序中，形如 index.html 文件、一些 bundle 和各种资源加载到浏览器中，会发生什么？
你精心安排的 /src 目录的文件结构现在已经不存在，所以 webpack 如何管理所有模块之间的交互呢？
这就是 manifest 数据用途的由来……
当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，
当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。无论你选择哪种模块语法，
那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。
通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。