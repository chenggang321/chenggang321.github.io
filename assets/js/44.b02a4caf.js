(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{324:function(t,a,s){t.exports=s.p+"assets/img/traefik-dashboard.e513fb19.png"},628:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"traefik-简易入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traefik-简易入门"}},[t._v("#")]),t._v(" Traefik 简易入门")]),t._v(" "),e("p",[e("code",[t._v("traefik")]),t._v(" 与 "),e("code",[t._v("nginx")]),t._v(" 一样，是一款优秀的反向代理工具，或者叫 "),e("code",[t._v("Edge Router")]),t._v("。至于使用它的原因则基于以下几点")]),t._v(" "),e("ul",[e("li",[t._v("无须重启即可更新配置")]),t._v(" "),e("li",[t._v("自动的服务发现与负载均衡")]),t._v(" "),e("li",[t._v("与 "),e("code",[t._v("docker")]),t._v(" 完美集成，基于 "),e("code",[t._v("container label")]),t._v(" 的配置")]),t._v(" "),e("li",[t._v("漂亮的 "),e("code",[t._v("dashboard")]),t._v(" 界面")]),t._v(" "),e("li",[e("code",[t._v("metrics")]),t._v(" 的支持，支持对 "),e("code",[t._v("prometheus")]),t._v(" 和 "),e("code",[t._v("k8s")]),t._v(" 集成")])]),t._v(" "),e("p",[t._v("接下来讲一下 "),e("code",[t._v("traefik")]),t._v(" 的安装，基本功能以及配置，以及如何基于 "),e("code",[t._v("Traefik")]),t._v(" 搭建一套 "),e("code",[t._v("CaaS")]),t._v(" 的架构。")]),t._v(" "),e("ul",[e("li",[t._v("原文链接: "),e("a",{attrs:{href:"https://github.com/shfshanyue/op-note/blob/master/traefik.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traefik: 更好用更简单的反向代理"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("系列文章: "),e("a",{attrs:{href:"https://github.com/shfshanyue/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人服务器运维指南"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://docs.traefik.io/assets/img/quickstart-diagram.png",alt:"traefik quickstart"}})]),t._v(" "),e("h2",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),e("blockquote",[e("p",[t._v("本篇文章基于版本号 "),e("code",[t._v("traefik:v2.2")]),t._v(" 进行讲解")])]),t._v(" "),e("p",[t._v("我们使用 "),e("code",[t._v("traefik:v2.2")]),t._v(" 作为镜像启动 "),e("code",[t._v("traefik")]),t._v(" 服务。"),e("code",[t._v("docker-compose.yaml")]),t._v(" 配置文件如下")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("traefik")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2.2\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api.insecure=true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("providers.docker\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:8080"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n")])])]),e("p",[t._v("此时我们使用命令 "),e("code",[t._v("docker-compose up -d")]),t._v(" 开启 "),e("code",[t._v("traefik")]),t._v(" 服务，此时一个反向代理器已经部署成功。")]),t._v(" "),e("p",[t._v("接下来我们使用 "),e("code",[t._v("docker-compose")]),t._v(" 借助 "),e("code",[t._v("whoami")]),t._v(" 镜像启动一个简单的 "),e("code",[t._v("http")]),t._v(" 服务，"),e("code",[t._v("docker-compose.yaml")]),t._v(" 配置文件如下")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改镜像会暴露出自身的 `header` 信息")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("whoami")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" containous/whoami\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置Host 为 whoami.docker.localhost 进行域名访问")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.whoami.rule=Host(`whoami.docker.localhost`)"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用已存在的 traefik 的 network")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik_default\n")])])]),e("p",[t._v("那 "),e("code",[t._v("whoami")]),t._v(" 这个 "),e("code",[t._v("http")]),t._v(" 服务做了什么事情呢")]),t._v(" "),e("ol",[e("li",[t._v("暴露了一个 "),e("code",[t._v("http")]),t._v(" 服务，主要提供一些 "),e("code",[t._v("header")]),t._v(" 以及 "),e("code",[t._v("ip")]),t._v(" 信息")]),t._v(" "),e("li",[t._v("配置了容器的 "),e("code",[t._v("labels")]),t._v("，设置该服务的 "),e("code",[t._v("Host")]),t._v(" 为 "),e("code",[t._v("whoami.docker.localhost")]),t._v("，给 "),e("code",[t._v("traefik")]),t._v(" 提供标记")])]),t._v(" "),e("p",[t._v("此时我们可以通过主机名 "),e("code",[t._v("whoami.docker.localhost")]),t._v(" 来访问 "),e("code",[t._v("whoami")]),t._v(" 服务，我们使用 "),e("code",[t._v("curl")]),t._v(" 做测试")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H Host:whoami.docker.localhost http://127.0.0.1\nHostname: bc3e8f1a5066\nIP: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\nIP: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.21")]),t._v(".0.2\nRemoteAddr: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.21")]),t._v(".0.1:37852\nGET / HTTP/1.1\nHost: whoami.docker.localhost\nUser-Agent: curl/7.29.0\nAccept: */*\nAccept-Encoding: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("\nX-Forwarded-For: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\nX-Forwarded-Host: whoami.docker.localhost\nX-Forwarded-Port: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nX-Forwarded-Proto: http\nX-Forwarded-Server: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.8")]),t._v(".8.8\nX-Real-Ip: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n")])])]),e("p",[t._v("服务正常访问。此时如果把 "),e("code",[t._v("Host")]),t._v(" 配置为自己的域名，则已经可以使用自己的域名来提供服务")]),t._v(" "),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://docs.traefik.io/assets/img/static-dynamic-configuration.png",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("traefik")]),t._v(" 一般需要一个配置文件来管理路由，服务，证书等。我们可以通过 "),e("code",[t._v("docker")]),t._v(" 启动 "),e("code",[t._v("traefik")]),t._v(" 时来挂载配置文件，"),e("code",[t._v("docker-compose.yaml")]),t._v(" 初始文件如下")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("traefik")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2.2\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:8080"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./traefik.toml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/traefik/traefik.toml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n")])])]),e("p",[t._v("其中 "),e("code",[t._v("traefik.toml")]),t._v(" 通过挂载文件的方式作为 "),e("code",[t._v("traefik")]),t._v(" 的基本配置文件，基本配置文件可以通过 "),e("a",{attrs:{href:"https://raw.githubusercontent.com/containous/traefik/master/traefik.sample.toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("traefik.sample.toml"),e("OutboundLink")],1),t._v(" 获取")]),t._v(" "),e("p",[t._v("一个简单的配置文件及释义如下")]),t._v(" "),e("h3",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("providers.docker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("endpoint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unix:///var/run/docker.sock"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("defaultRule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Host(`{{ normalize .Name }}.shanyue.local`)"')]),t._v("\n")])])]),e("p",[t._v("如果没有配置 "),e("code",[t._v("Rule")]),t._v("，将默认通过 "),e("code",[t._v("<Name>.shanyue.local")]),t._v(" 的形式发现路由")]),t._v(" "),e("h3",{attrs:{id:"日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[t._v("#")]),t._v(" 日志")]),t._v(" "),e("p",[t._v("日志极为重要，当某个路由配置不成功，或者 https 配置失败时，可以通过日志文件找到蛛丝马迹。")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Writing Logs to a File, in JSON")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("filePath")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/log-file.log"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("format")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v("\n")])])]),e("h3",{attrs:{id:"请求日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求日志"}},[t._v("#")]),t._v(" 请求日志")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("accessLog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("filePath")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./traefik-access.json"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("format")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v("\n")])])]),e("p",[t._v("请求日志文件配置为 "),e("code",[t._v("json")]),t._v(" 格式，结构化数据方便调试")]),t._v(" "),e("h3",{attrs:{id:"entrypoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[t._v("#")]),t._v(" entryPoint")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("address")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":80"')]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.web-secure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("address")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":443"')]),t._v("\n")])])]),e("p",[t._v("考虑到隐私以及安全，不对外公开的服务可以配置 "),e("code",[t._v("Basic Auth")]),t._v("，"),e("code",[t._v("Digest Auth")]),t._v(" 或者 "),e("code",[t._v("WhiteList")]),t._v("，或者直接搭建 VPN，在内网内进行访问。至于 "),e("code",[t._v("Basic Auth")]),t._v(" 等，可以参考 "),e("a",{attrs:{href:"https://docs.traefik.io/middlewares/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("traefik middlewares"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"prometheus-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-metrics"}},[t._v("#")]),t._v(" prometheus metrics")]),t._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("metrics.prometheus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("buckets")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key property"}},[t._v("entryPoint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metrics"')]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus"),e("OutboundLink")],1),t._v(" 作为时序数据库，可以用来监控 traefik 的日志，支持更加灵活的查询，报警以及可视化。traefik 默认设置 prometheus 作为日志收集工具。另外可以使用 "),e("code",[t._v("grafana")]),t._v(" 做为 "),e("code",[t._v("prometheus")]),t._v(" 的可视化工具。")]),t._v(" "),e("h2",{attrs:{id:"docker-provider-router-and-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-provider-router-and-service"}},[t._v("#")]),t._v(" Docker Provider，Router and Service")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://docs.traefik.io/assets/img/architecture-overview.png",alt:"traefik architecture"}})]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Providers")]),t._v(" 服务提供者，如 docker，如一个 http service")]),t._v(" "),e("li",[e("code",[t._v("Routers")]),t._v(" 分析请求的 "),e("code",[t._v("Host")]),t._v("，"),e("code",[t._v("Header")]),t._v(" 或者 "),e("code",[t._v("Path")])]),t._v(" "),e("li",[e("code",[t._v("Services")]),t._v(" 选择合适的 "),e("code",[t._v("Provider")]),t._v(" (负载均衡等)")])]),t._v(" "),e("p",[t._v("我们使用 "),e("code",[t._v("Docker")]),t._v(" 作为 "),e("code",[t._v("Provider")]),t._v("，而 "),e("code",[t._v("Router")]),t._v(" 与 "),e("code",[t._v("Service")]),t._v(" 可以通过 "),e("code",[t._v("container labels")]),t._v(" 来进行配置，我们一般使用 "),e("code",[t._v("docker-compose.yaml")]),t._v(" 中的 "),e("code",[t._v("labels")]),t._v(" 来配置")]),t._v(" "),e("p",[t._v("我们可以通过 "),e("code",[t._v("traefik.http.routers.<container-name>.rule")]),t._v(" 来配置路由规则，类似与 "),e("code",[t._v("nginx")]),t._v(" 中的 "),e("code",[t._v("location")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.blog.rule=Host(`traefik.io`) || (Host(`containo.us`) && Path(`/traefik`))"')]),t._v("\n")])])]),e("h3",{attrs:{id:"负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),e("p",[t._v("如果要为 "),e("code",[t._v("docker provider")]),t._v(" 进行负载均衡怎么办?")]),t._v(" "),e("p",[t._v("只需要使用 "),e("code",[t._v("docker-compose up --scale")]),t._v(" 对容器横向扩容即可完成")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker-compose up --scale "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("whoami")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nWARNING: The scale "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" is deprecated. Use the up "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" with the --scale flag instead.\nStarting whoami_whoami_1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating whoami_whoami_2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating whoami_whoami_3 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),e("p",[t._v("在 "),e("code",[t._v("traefik dashboard")]),t._v(" 中查看该 "),e("code",[t._v("service")]),t._v("时，已负载到三个容器")]),t._v(" "),e("h2",{attrs:{id:"traefik-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traefik-dashboard"}},[t._v("#")]),t._v(" Traefik Dashboard")]),t._v(" "),e("p",[e("img",{attrs:{src:s(324),alt:"traefik dashboard"}})]),t._v(" "),e("p",[e("code",[t._v("traefik")]),t._v(" 默认有一个 "),e("code",[t._v("dashboard")]),t._v("，通过 "),e("code",[t._v(":8080")]),t._v(" 端口暴露出去。我们可以在浏览器中直接通过 "),e("code",[t._v("<IP>:8080")]),t._v(" 访问，但是")]),t._v(" "),e("ol",[e("li",[t._v("使用 "),e("code",[t._v("IP")]),t._v(" 地址肯定不是特别方便，此时我们可以配置 "),e("code",[t._v("Host")])]),t._v(" "),e("li",[t._v("在公网环境下访问有安全性问题，此时可以配置 "),e("code",[t._v("basicAuth")]),t._v("，"),e("code",[t._v("digestAuth")]),t._v("，"),e("code",[t._v("IpWhiteList")]),t._v(" 或者 "),e("code",[t._v("openVPN")]),t._v(" 等中间件")])]),t._v(" "),e("p",[t._v("再次更改 "),e("code",[t._v("traefik")]),t._v(" 的 "),e("code",[t._v("docker-compose.yaml")]),t._v(" 文件如下：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reverse-proxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2.2\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:8080"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./traefik.toml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/traefik/traefik.toml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.api.rule=Host(`traefik.shanyue.local`)"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.api.service=api@internal"')]),t._v("\n")])])]),e("p",[t._v("此时可以通过 "),e("code",[t._v("traefik.shanyue.local")]),t._v(" 来访问 "),e("code",[t._v("dashboard")])]),t._v(" "),e("blockquote",[e("p",[t._v("Q: 我们如何配置 DNS 服务器来使得 "),e("code",[t._v("traefik.shanyue.local")]),t._v(" 可供集群内部使用")])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("docker-compose.yaml")]),t._v(" 部署 "),e("code",[t._v("traefik")]),t._v("，部署文件文件如下")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reverse-proxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2.2\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:8080"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./traefik.toml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/traefik/traefik.toml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.api.rule=Host(`traefik.shanyue.local`)"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.api.service=api@internal"')]),t._v("\n")])])]),e("p",[e("code",[t._v("traefik")]),t._v(" 的配置文件可以通过 "),e("a",{attrs:{href:"https://raw.githubusercontent.com/containous/traefik/master/traefik.sample.toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("traefik.sample.toml"),e("OutboundLink")],1),t._v(" 获取")]),t._v(" "),e("p",[t._v("当使用 "),e("code",[t._v("docker")]),t._v(" 部署完成 "),e("code",[t._v("traefik")]),t._v(" 并且配置好配置文件后。如果想要使用 "),e("code",[t._v("docker-compose")]),t._v(" 部署一个新的应用时只需要")]),t._v(" "),e("ol",[e("li",[t._v("添加几行 "),e("code",[t._v("container labels")])]),t._v(" "),e("li",[t._v("添加 "),e("code",[t._v("traefik")]),t._v(" 容器所使用的网络")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该镜像会暴露出自身的 `header` 信息")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("whoami")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" containous/whoami\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置Host 为 whoami.docker.localhost 进行域名访问")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.whoami.rule=Host(`whoami.docker.localhost`)"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用已存在的 traefik 的 network")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik_default\n")])])]),e("h2",{attrs:{id:"下一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[t._v("#")]),t._v(" 下一步")]),t._v(" "),e("p",[t._v("当我们访问集群内部服务，如数据库，缓存，"),e("code",[t._v("traefik Dashboard")]),t._v("，"),e("code",[t._v("gitlab")]),t._v(" 时，如果直接暴露在公网中，则会造成很大安全隐患，此时我们应该如何处理呢？")])])}),[],!1,null,null,null);a.default=n.exports}}]);