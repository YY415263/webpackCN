
1,以上，我们使用 webpack 来打包我们的模块化后的应用程序，webpack 会生成一个可部署的 /dist 目录，
然后把打包后的内容放置在此目录中。只要 /dist 目录中的内容部署到服务器上，客户端（通常是浏览器）
就能够访问网站此服务器的网站及其资源。而最后一步获取资源是比较耗费时间的，这就是为什么浏览器使用一种名为缓存的技术。
可以通过命中缓存，以降低网络流量，使网站加载速度更快，然而，如果我们在部署新版本时不更改资源的文件名，
浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。



2,此指南的重点在于通过必要的配置，以确保 webpack 编译生成的文件能够被客户端缓存，
而在文件内容变化后，能够请求到新的文件。


3,通过使用 output.filename 进行文件名替换，可以确保浏览器获取到修改后的文件。
[hash] 替换可以用于在文件名中包含一个构建相关(build-specific)的 hash，
但是更好的方式是使用 [chunkhash] 替换，在文件名中包含一个 chunk 相关(chunk-specific)的哈希。





4,bundle 的名称是它内容（通过 hash）的映射。如果我们不做修改，然后再次运行构建，
我们的文件名按照期望，依然保持不变。然而，如果我们再次运行，可能会发现情况并非如此.
这也是因为 webpack 在入口 chunk 中，包含了某些样板(boilerplate)，特别是 runtime 和 manifest。
（译注：样板(boilerplate)指 webpack 运行时的引导代码）


5,我们之前从代码分离了解到的，CommonsChunkPlugin 可以用于将模块分离到单独的文件中。
然而 CommonsChunkPlugin 有一个较少有人知道的功能是，能够在每次修改后的构建结果中，
将 webpack 的样板(boilerplate)和 manifest 提取出来。通过指定 entry 配置中未用到的名称，
此插件会自动将我们需要的内容提取到单独的包中.




6,将第三方库(library)（例如 lodash）提取到单独的 vendor chunk 文件中，是比较推荐的做法，
这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用客户端的长效缓存机制，
可以通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。
这可以通过使用新的 entry(入口) 起点，以及再额外配置一个 CommonsChunkPlugin 实例的组合方式来实现.
在webpack.common.js加入
 entry: {
        vendor: [
            'lodash'
        ]
 }
 插件中加入
 new webpack.optimize.CommonsChunkPlugin({
             name: 'vendor'
 })

 特别注意: 引入顺序在这里很重要。CommonsChunkPlugin 的 'vendor' 实例，必须在 'manifest' 实例之前引入。


7,(1)app bundle 会随着自身的新增内容的修改，而发生变化。

  (2)vendor bundle 会随着自身的 module.id 的修改，而发生变化。
  module.id 会基于默认的解析顺序(resolve order)进行增量。
  也就是说，当解析顺序发生变化，ID 也会随之改变。

  (3)manifest bundle 会因为当前包含一个新模块的引用，而发生变化。


8,  vendor bundle 的 hash 发生变化是我们要修复的。
    可以使用两个插件来解决这个问题。第一个插件是 NamedModulesPlugin，将使用模块的路径，
    而不是数字标识符。虽然此插件有助于在开发过程中输出结果的可读性，然而执行时间会长一些。
    第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建：




特别注意:
(1)如果用hash 每次打包后的[hash]都会改变.
如果用[chunkhash]如果配置正确只有文件发生变化会面的chunkhash值才会变化.

(2)热更新(HMR)不能和[chunkhash]同时使用。
解决方法：如果是开发环境，将配置文件中的chunkhash 替换为hash.
此项目,如果你运行npm run develop 会报错,错误提示你,让你把chunkhash替换为hash,
但是运行npm run production则正常
同理,运行 npm run server 如果server.js引用的是webpack.dev.js也会报同样的错误.
如果引用的是webpack.prod.js则正常

