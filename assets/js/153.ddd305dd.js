(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{586:function(e,a,n){"use strict";n.r(a);var o=n(40),_=Object(o.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"生产环境中使用-npm-ci-代替-npm-i"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生产环境中使用-npm-ci-代替-npm-i"}},[e._v("#")]),e._v(" 生产环境中使用 npm ci 代替 npm i")]),e._v(" "),n("p",[e._v("乍一眼看 "),n("code",[e._v("npm ci")]),e._v("，CI，恩，看这名字就很适合放在持续集成中。事实也是如此，它更快，更严格，也更适合于放在 CI 中，至于为什么这么说，将会在以下分别做介绍。")]),e._v(" "),n("p",[n("code",[e._v("npm ci")]),e._v(" 基于一个独立的库 "),n("a",{attrs:{href:"https://github.com/npm/libcipm",target:"_blank",rel:"noopener noreferrer"}},[e._v("libcipm"),n("OutboundLink")],1),e._v(" 安装依赖，而它拥有和 "),n("code",[e._v("npm install")]),e._v(" 兼容的 API。当它安装依赖时，默认是缓存优先的，它会充分利用缓存，从而加速装包。")]),e._v(" "),n("p",[e._v("直接从官方文档看 "),n("code",[e._v("npm ci")]),e._v(" 与 "),n("code",[e._v("npm i")]),e._v(" 的不同之处吧")]),e._v(" "),n("blockquote",[n("p",[e._v("In short, the main differences between using npm install and npm ci are:")]),e._v(" "),n("ul",[n("li",[e._v("The project must have an existing package-lock.json or npm-shrinkwrap.json.")]),e._v(" "),n("li",[e._v("If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.")]),e._v(" "),n("li",[e._v("npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.")]),e._v(" "),n("li",[e._v("If a node_modules is already present, it will be automatically removed before npm ci begins its install.")]),e._v(" "),n("li",[e._v("It will never write to package.json or any of the package-locks: installs are essentially frozen.")])])]),e._v(" "),n("p",[e._v("我将基于官方文档做适当扩展")]),e._v(" "),n("h2",{attrs:{id:"package-lock-json-必须存在"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json-必须存在"}},[e._v("#")]),e._v(" package-lock.json 必须存在")]),e._v(" "),n("p",[n("code",[e._v("package-lock.json")]),e._v(" 在 "),n("code",[e._v("npm ci")]),e._v(" 时是必须存在的，否则将会报错，阻塞住 CI pipeline 的进一步执行。")]),e._v(" "),n("p",[n("code",[e._v("package-lock.json")]),e._v(" 用于锁住 package 的版本号，避免在生产环境中因版本导致的构建错误或者运行时错误，对于前端工程化也意义非凡。"),n("code",[e._v("npm ci")]),e._v(" 时 "),n("code",[e._v("package-lock.json")]),e._v(" 必须存在也避免了此类问题的产生，它对项目的安全性有所提高。")]),e._v(" "),n("h2",{attrs:{id:"package-json-与-package-lock-json-不匹配问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json-与-package-lock-json-不匹配问题"}},[e._v("#")]),e._v(" package.json 与 package-lock.json 不匹配问题")]),e._v(" "),n("p",[e._v("有可能您会有疑惑了，它们怎么会不匹配呢？在正常情况下肯定不会出现这种问题。")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("手动改动")]),e._v(" "),n("code",[e._v("package.json")]),e._v(" 中某个 package 的版本号")]),e._v(" "),n("li",[n("strong",[e._v("没有")]),e._v(" 再次 "),n("code",[e._v("npm install")])]),e._v(" "),n("li",[n("code",[e._v("git push")]),e._v(" 触发了 CI")])]),e._v(" "),n("p",[e._v("在我工作经历中，遇到过手动改写 "),n("code",[e._v("package.json")]),e._v(" 中版本号，却未同步到 "),n("code",[e._v("package-lock.json")]),e._v(" 的事件。")]),e._v(" "),n("p",[e._v("而使用 "),n("code",[e._v("npm ci")]),e._v(" 将会保证其安全性，但两者不匹配时，直接抛出异常。这给我们两个教训")]),e._v(" "),n("ol",[n("li",[e._v("不要手动改写版本号")]),e._v(" "),n("li",[e._v("在 CI 中使用 "),n("code",[e._v("npm ci")]),e._v(" 保证安全性")])]),e._v(" "),n("h2",{attrs:{id:"自动删除-node-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动删除-node-modules"}},[e._v("#")]),e._v(" 自动删除 node_modules")]),e._v(" "),n("p",[e._v("当 "),n("code",[e._v("npm ci")]),e._v(" 时，如果 node_modules 存在，则自动删除它，这是为了保证一个干净的 node_modules 环境，避免遗留旧版本库的副作用。")]),e._v(" "),n("p",[e._v("但由于在 CI 中往往是无状态的：触发构建时，将会在一个临时目录中拉取代码，此时node_modules 也不会存在。")]),e._v(" "),n("h2",{attrs:{id:"不能单独装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不能单独装包"}},[e._v("#")]),e._v(" 不能单独装包")]),e._v(" "),n("p",[e._v("这一条很容易解释，它适用于持续集成环境中，无法单独装包，例如无法仅仅安装 "),n("code",[e._v("lodash")]),e._v("。")])])}),[],!1,null,null,null);a.default=_.exports}}]);