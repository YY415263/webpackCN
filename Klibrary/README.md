此项目在dist文件夹里 打包了一个webpack-number.js作为library
在examples文件夹里 用两种方式使用
(1)直接在页面引用
(2)node 直接执行

打包需要的配置详情参考webpack.config.js,每个配置的作用参考下文



让我们以某种方式打包这个 library，能够实现以下几个目标：

(1),不打包 lodash，而是使用 externals 来 require 用户加载好的 lodash。
(2),设置 library 的名称为 webpack-numbers.
(3),将 library 暴露为一个名为 webpackNumbers的变量。
(4),能够访问其他 Node.js 中的 library。

此外，用户应该能够通过以下方式访问 library：

(1),ES2015 模块。例如 import webpackNumbers from 'webpack-numbers'。
(2),CommonJS 模块。例如 require('webpack-numbers').
(3),全局变量，当通过 script 脚本引入时



1,我们更倾向于把 lodash 当作 peerDependency。
也就是说，用户应该已经将 lodash 安装好。
因此，你可以放弃对外部 library 的控制，而是将控制权让给使用 library 的用户。



2,我们希望它能够兼容不同的环境，例如 CommonJS，AMD，Node.js 或者作为一个全局变量。
为了让你的 library 能够在各种用户环境(consumption)中可用，需要在 output 中添加 library 属性.



3,特别注意，library 设置绑定到 entry 配置。对于大多数库，指定一个入口起点就足够了。
虽然构建多个库也是也可以的，然而还可以直接通过将主入口脚本(index script)暴露部分导出，
来作为单个入口起点则相对简单。不推荐使用数组作为库的 entry。


4,当你在 import 引入模块时，这可以将你的 library bundle 暴露为名为 webpackNumbers 的全局变量。
为了让 library 和其他环境兼容，还需要在配置文件中添加 libraryTarget 属性。
这是可以控制 library 如何以不同方式暴露的选项。

5,可以通过以下方式暴露 library：

  (1)遍历：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
  (2)this：通过 this 对象访问（libraryTarget:'this'）。
  (3)window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
  (4)UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。

