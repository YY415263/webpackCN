
1,开发环境(development)和生产环境(production)的构建目标差异很大。
在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的
 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，
 以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。



2,我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定(environment-specific)的配置中重复代码。


3,
(1)npm run develop webpack按照webpack.dev.js配置文件打包.
(2)npm run production webpack按照webpack.pro.js配置文件打包. 打包完成后可以对比打包的app.bundle.js大小区别很大的.
(3)npm run server 通过webpack-dev-middleware 配合 express 在 3000端口运行.
通过修改server.js中的配置
const config = require('./webpack.prod.js');   按照webpack.prod.js配置文件运行,可自动编译并没有热替换.
const config = require('./webpack.dev.js');    按照webpack.dev.js配置文件运行,可自动编译且可以热替换.