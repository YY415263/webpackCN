
1,tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。
它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。
这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。




2,UglifyJSPlugin 插件是能够删除未引用代码(dead code)的压缩工具(minifier) . 大大减少app.bundle.js 的大小 ,
此工程为例 不使用此插件生成的文件为267K ,使用此插件生成的文件为65K


 特别注意 :
 (1)path:是控制打包成功后文件   存放   的路径,
 (2)publicPath:能帮助你为项目中的所有资源指定一个基础路径.
  a, 会影响打包成功后文件  访问   路径 , 例如 '/'  以确保文件资源能够在 http://localhost:3000 下正确访问 (http://localhost:3000/index.html)
  b, 如果用npm run build 直接打包 publicPath 会影响 index.html里引用app.bundle.js的路径