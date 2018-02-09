1,当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，
而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助，
因为你可能需要准确地知道错误来自于哪个源文件。为了更容易地追踪错误和警告，JavaScript 提供了
 source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map
 就会明确的告诉你.source map 有很多不同的选项(https://doc.webpack-china.org/configuration/devtool)可用，
 请务必仔细阅读它们，以便可以根据需要进行配置。


2,每次要编译代码时，手动运行 npm run build 就会变得很麻烦。
  webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：

  webpack's Watch Mode
  webpack-dev-server
  webpack-dev-middleware
  多数场景中，你可能需要使用 webpack-dev-server，但是不妨探讨一下以上的所有选项。


3,你可以指示 webpack "watch" 依赖图中的所有文件以进行更改。如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。
现在,保存文件并检查终端窗口。应该可以看到 webpack 自动重新编译修改后的模块！
唯一的缺点是，为了看到修改后的实际效果，你需要刷新浏览器。如果能够自动刷新浏览器就更好了，
可以尝试使用 webpack-dev-server，恰好可以实现我们想要的功能。



4,webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。(改变代码自动刷新网页)



5,webpack-dev-middleware 是一个中间件容器(wrapper)，它将通过 webpack 处理后的文件发布到一个服务器(server)。
在内部 webpack-dev-server 它使用，然而，它可以作为一个单独的包来提供，可以进行更多的自定义设置来实现更多需求。
webpack-dev-middleware 需要有 express server  配合 。



特别注意 : publicPath: '/'
打包成功后的文件路径 ,以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)

如果用npm run build 直接打包,这个需要去掉,如果没有去掉生成的html里引用的app.bundle.js
会是 http://localhost:7001/app.bundle.js(我用的是webStorm,端口默认是7001),这样会导致index.html访问不到 app.bundle.js


