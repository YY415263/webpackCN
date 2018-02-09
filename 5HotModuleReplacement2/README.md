
1,如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，
请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。

但在热重载中，文件是不存放在硬盘上的，而是使用了memory-fs模块存放在内存中的，因此原始规则不能使用了。
查看与webpack-dev-middleware配合需要使用到webpack-hot-middleware，
在内存中使用时需要为入口文件添加一个'webpack-hot-middleware/client'



 特别注意 :
 (1)path:path.resolve(__dirname, 'dist')是控制打包成功后文件   存放   的路径,
 (2)publicPath:
  a, 会影响打包成功后文件  访问   路径 , 例如 '/'  以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)
  b, 如果用npm run build 直接打包 publicPath 会影响 index.html里引用app.bundle.js的路径