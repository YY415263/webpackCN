1,模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。
它允许在运行时更新各种模块，而无需进行完全刷新。HMR 不适用于生产环境，这意味着它应当只在开发环境使用。


2,启用此功能实际上相当简单。而我们要做的，就是更新 webpack-dev-server 的配置
，和使用 webpack 内置的 HMR 插件。我们还要删除掉 print.js 的入口起点，因为它现在正被 index.js 模式使用。


3,如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，
请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。



4,我们还添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖。在起步阶段，我们将通过在命令行中运行 npm start 来启动并运行 dev server。
  现在，我们来修改 index.js 文件，以便当 print.js 内部发生变更时可以告诉 webpack 接受更新的模块。


5,当使用 webpack dev server 和 Node.js API 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。
而是，在创建选项时，将其作为第二个参数传递。例如：new WebpackDevServer(compiler, options).想要启用 HMR，还需要修改 webpack 配置对象，
使其包含 HMR 入口起点。webpack-dev-server package 中具有一个叫做 addDevServerEntrypoints 的方法，你可以通过使用这个方法来实现



6,模块热替换可能比较难掌握。为了说明这一点，我们回到刚才的示例中。如果你继续点击示例页面上的按钮，
你会发现控制台仍在打印这旧的 printMe 功能。这是因为按钮的 onclick 事件仍然绑定在旧的 printMe 函数上。
为了让它与 HRM 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上


7,借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。
当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签。