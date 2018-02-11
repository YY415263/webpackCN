
1,懒加载或者按需加载，是一种很好的优化网页或应用的方式。
这种方式实际上是先把你的代码在一些逻辑断点处分离开，
然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。
这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。



2,我们在代码分离中的例子基础上，进一步做些调整来说明这个概念。
那里的代码确实会在脚本运行的时候产生一个分离的代码块 lodash.bundle.js ，在技术概念上“懒加载”它。
问题是加载这个包并不需要用户的交互 -- 意思是每次加载页面的时候都会请求它。
这样做并没有对我们有很多帮助，还会对性能产生负面影响。

3,我们试试不同的做法。我们增加一个交互，当用户点击按钮的时候用 alert 一些文字。
但是会等到第一次交互的时候再加载那个代码块（alert.js）。

4,在此项目中,npm run develop 之后打开index.html 会发现该只是加载了app.bundle.js 和 lodash.bundle.js
当我们点击按钮的时候,页面才会加载alert.bundle.js