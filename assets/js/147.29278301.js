(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{577:function(e,t,a){"use strict";a.r(t);var r=a(40),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"esm-大势所趋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esm-大势所趋"}},[e._v("#")]),e._v(" ESM 大势所趋")]),e._v(" "),a("p",[a("strong",[e._v("由 "),a("code",[e._v("ESM")]),e._v(" 的普及，而带来的打包工具的革命以及适用于 ESM 下一代 CDN 的发展，业务项目在生产环境开始使用原生的 ESM 代替以前的 Bundle 方案，从而导致开发体验及网站速度的大幅提升。")])]),e._v(" "),a("p",[e._v("核心代码就是下边这一行: 使用 "),a("code",[e._v("HTTP Import")]),e._v(" 的方式代替以前的 "),a("code",[e._v("Bare Import")]),e._v(" + "),a("code",[e._v("Bundle")])]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" lodash "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://cdn.skypack.dev/lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("而 "),a("code",[e._v("ESM")]),e._v(" 的发展，从基建到应用的各个开发者都会参与其中:")]),e._v(" "),a("ol",[a("li",[e._v("面向业务的开发者: 更改为 "),a("code",[e._v("Native ESM")]),e._v(" 的最终打包方式，而非以前单一复杂的大 Bundle。网站速度变得更快 90%")]),e._v(" "),a("li",[e._v("面向工程化的开发者: 专注于 ESM 的打包，如 Vite、ESBuild、Snowpack 等及相关插件的开发(如集成CDN)，以及 CJS 向 ES 的过渡工作等。这使得构建效率可以提升10倍")]),e._v(" "),a("li",[e._v("面向组件、库的开发者: 更多地支持 "),a("code",[e._v("ES")]),e._v(" 作为前后通通用的打包方式，代替了以前的 "),a("code",[e._v("UMD")])]),e._v(" "),a("li",[e._v("面向云服务的开发者: 开发新的 CDN 服务，支持最通用的 cjs-esm 及一些新特性如私有库的支持，子域名、http2/http3、审计日志做更好的收费等")]),e._v(" "),a("li",[e._v("面向企业: 更快的网络访问速度，更便宜的 CDN (大部分资源会有公共 CDN)")])]),e._v(" "),a("h2",{attrs:{id:"面向业务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向业务"}},[e._v("#")]),e._v(" 面向业务")]),e._v(" "),a("p",[e._v("以前打包主要是两部分: "),a("code",[e._v("common")]),e._v(" 打所有第三方包，"),a("code",[e._v("app.js")]),e._v(" 打应用代码的包，路径带上 Hash 值，加一个永久缓存。")]),e._v(" "),a("ul",[a("li",[e._v("common.xxxxxx.js")]),e._v(" "),a("li",[e._v("app.xxxxxx.js")])]),e._v(" "),a("p",[a("strong",[e._v("但是有可能产生一个问题: 一行代码造成整个应用的长久缓存失效。")])]),e._v(" "),a("p",[e._v("为了对缓存进行更加细致的控制，也会小心细致的分包。如一些大包 "),a("code",[e._v("echarts")]),e._v("、"),a("code",[e._v("mathjax")]),e._v(" 分出去。一些不在视觉内需要点点点才能看到的包也通过 "),a("code",[e._v("React.lazy")]),e._v("，"),a("code",[e._v("lodable-component")]),e._v(" 等也给分出去。但也需要繁琐的手动配置。")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/bundle.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("分包"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/http-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP 缓存控制"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("当 "),a("code",[e._v("ESM")]),e._v(" 加入后:")]),e._v(" "),a("ol",[a("li",[e._v("所有第三方模块都从 CDN 中获取，且模块都会被永久缓存，而根据调查，第三方模块的体积占整个应用的 90%。为啥子可以永久缓存，因为对于 npm 的每一个 package 都会有版本号控制，版本号不变内容就不会变。现在一些支持 ESM 的 CDN 已经实现了这个功能。")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --head -vvv https://jspm.dev/ms@2.1.3\ncache-control: public, max-age"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("31536000")]),e._v(", s-maxage"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("604800")]),e._v(", immutable\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("CDN 使网络速度更快。以前没有 CDN 吗？以前也有，但是频率就不是一个量级了，当使用了 ESM 的 React CDN 后，React 会被各地各网站都跨网站缓存，更能充分利用到 CDN 的优势。而以前一个大的 Bundle，更有可能未命中缓存及回源")])]),e._v(" "),a("h2",{attrs:{id:"面向-package-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向-package-开发"}},[e._v("#")]),e._v(" 面向 Package 开发")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("p",[e._v("(看的人多的话补充)")]),e._v(" "),a("h2",{attrs:{id:"关于-esm-的学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-esm-的学习"}},[e._v("#")]),e._v(" 关于 ESM 的学习")]),e._v(" "),a("p",[e._v("以下两篇文章可以更好地理解 ESM")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/WICG/import-maps",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to control the behavior of JavaScript imports"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES modules: A cartoon deep-dive"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("另外我做了一个网站，用以"),a("strong",[e._v("找到更合适的轮子以及直接在控制台访问模块")]),e._v(": <npm.devtool.tech>。其中就使用了 "),a("code",[e._v("ESM")]),e._v(" 去加载这些第三方库。")]),e._v(" "),a("p",[e._v("比如，当我查看 "),a("code",[e._v("lodash")]),e._v("、"),a("code",[e._v("date-fns")]),e._v(" 的文档时，需要去实验这些函数时，"),a("code",[e._v("npm.runkit")]),e._v(" 显得不如控制台那么方便。")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://npm.devtoo.tech",target:"_blank",rel:"noopener noreferrer"}},[e._v("lodash"),a("OutboundLink")],1),e._v("，打开控制台可以直接全局访问 "),a("code",[e._v("lodash")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);