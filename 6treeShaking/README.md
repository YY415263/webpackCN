
1,tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。
它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。
这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。




2,UglifyJSPlugin 插件是能够删除未引用代码(dead code)的压缩工具(minifier) . 大大减少app.bundle.js 的大小 ,
此工程为例 不使用此插件生成的文件为267K ,使用此插件生成的文件为65K


特别注意 : publicPath: '/'
打包成功后的文件路径 ,以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)

如果用npm run build 直接打包,这个需要去掉,如果没有去掉生成的html里引用的app.bundle.js
会是 http://localhost:7001/app.bundle.js(我用的是webStorm,端口默认是7001),这样会导致index.html访问不到 app.bundle.js