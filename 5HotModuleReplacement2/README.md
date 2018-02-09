
1,如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，
请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。

但在热重载中，文件是不存放在硬盘上的，而是使用了memory-fs模块存放在内存中的，因此原始规则不能使用了。
查看与webpack-dev-middleware配合需要使用到webpack-hot-middleware，
在内存中使用时需要为入口文件添加一个'webpack-hot-middleware/client'



特别注意 : path:path.resolve(__dirname, 'dist')是控制打包成功后文件   存放   的路径, publicPath: '/' 是控制
打包成功后文件  访问   路径 ,以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)

如果用npm run build 直接打包,这个需要去掉,如果没有去掉生成的html里引用的app.bundle.js
会是 http://localhost:7001/app.bundle.js(我用的是webStorm,端口默认是7001),这样会导致index.html访问不到 app.bundle.js