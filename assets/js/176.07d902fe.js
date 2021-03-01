(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{620:function(t,v,_){"use strict";_.r(v);var e=_(40),p=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tcpdump-命令详解及示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump-命令详解及示例"}},[t._v("#")]),t._v(" tcpdump 命令详解及示例")]),t._v(" "),_("p",[t._v("Q: "),_("code",[t._v("tcpdump")]),t._v(" 是干吗的"),_("br"),t._v("\nA: 抓包的"),_("br"),t._v("\nQ: 除了 "),_("code",[t._v("tcpdump")]),t._v(" 还有啥能抓包"),_("br"),t._v("\nA: "),_("code",[t._v("wireshark")]),_("br"),t._v("\nQ: 为啥不讲 "),_("code",[t._v("wireshark")]),t._v(" 抓包"),_("br"),t._v("\nA: "),_("code",[t._v("wireshark")]),t._v(" 在 linux 命令行上不能用")]),t._v(" "),_("ul",[_("li",[t._v("原文链接: "),_("a",{attrs:{href:"https://github.com/shfshanyue/op-note/blob/master/linux-tcpdump.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("tcpdump 命令详解及示例"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("系列文章: "),_("a",{attrs:{href:"https://github.com/shfshanyue/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("当我有台服务器时我做了什么"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"tcpdump-命令详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump-命令详解"}},[t._v("#")]),t._v(" tcpdump 命令详解")]),t._v(" "),_("h3",{attrs:{id:"关键选项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关键选项"}},[t._v("#")]),t._v(" 关键选项")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("-c count")]),t._v(": 指定打印条数")]),t._v(" "),_("li",[_("code",[t._v("-i interface")]),t._v(": 指定网络接口，如常见的 "),_("code",[t._v("eth0")]),t._v("，"),_("code",[t._v("lo")]),t._v("，可以通过 "),_("code",[t._v("ifconfig")]),t._v(" 打印所有网络接口")]),t._v(" "),_("li",[_("code",[t._v("-vv")]),t._v(": 尽可能多地打印信息")])]),t._v(" "),_("h3",{attrs:{id:"过滤器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[t._v("#")]),t._v(" 过滤器")]),t._v(" "),_("p",[t._v("过滤器，顾名思义，过滤一部分数据包，"),_("strong",[t._v("而过滤器使用 "),_("code",[t._v("pcap-filter")]),t._v(" 的语法")])]),t._v(" "),_("p",[t._v("所以你可以查看 "),_("code",[t._v("pcap-filter")]),t._v(" 手册")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有过滤器")]),t._v("\n$ "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("man")]),t._v(" pcap-fliter\n")])])]),_("p",[t._v("过滤器可以简单分为三类")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("type")]),t._v(": 有四种类型 "),_("code",[t._v("host")]),t._v("，"),_("code",[t._v("net")]),t._v("，"),_("code",[t._v("port")]),t._v("，"),_("code",[t._v("portrange")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("tcpdump port 22")])]),t._v(" "),_("li",[_("code",[t._v("tcpdump port ssh")])])])]),t._v(" "),_("li",[_("code",[t._v("dir")]),t._v(": 源地址和目标地址，主要有 "),_("code",[t._v("src")]),t._v(" 和 "),_("code",[t._v("dst")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("tcpdump src port ssh")])])])]),t._v(" "),_("li",[_("code",[t._v("proto")]),t._v(": 协议，有 "),_("code",[t._v("ip")]),t._v("，"),_("code",[t._v("arp")]),t._v("，"),_("code",[t._v("rarp")]),t._v("，"),_("code",[t._v("tcp")]),t._v("，"),_("code",[t._v("udp")]),t._v("，"),_("code",[t._v("icmp")]),t._v(" 等\n"),_("ul",[_("li",[_("code",[t._v("tcpdump icmp")])])])])]),t._v(" "),_("h2",{attrs:{id:"tcpdump-examples"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump-examples"}},[t._v("#")]),t._v(" tcpdump examples")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("命令: "),_("code",[t._v("netstat -i")]),_("br"),t._v("\n解释: 打印所有网络接口")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump -i eth0")]),_("br"),t._v("\n解释: 监视网络接口 "),_("code",[t._v("eth0")]),t._v(" 的数据包")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump host 172.18.0.10")]),_("br"),t._v("\n解释: 监视主机地址 "),_("code",[t._v("172.18.0.10")]),t._v(" 的数据包")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump net 172.18.0.1/24")]),_("br"),t._v("\n解释: 监视网络 "),_("code",[t._v("172.10.0.1/24")]),t._v(" 的所有数据包")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump tcp port 443")]),_("br"),t._v("\n解释: 监听 https 请求")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump tcp port 443 and host 172.18.0.10")]),_("br"),t._v("\n解释: 监听目标地址或源地址是 172.18.0.10 的 https 请求")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump icmp")]),_("br"),t._v("\n解释: 监听 ICMP 协议 (比如典型的 PING 命令)")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump arp")]),_("br"),t._v("\n解释: 监听 ARP 协议")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump 'tcp[tcpflags] == tcp-syn'")]),_("br"),t._v("\n解释: 监听 TCP 协议中 "),_("code",[t._v("flag")]),t._v(" 带 "),_("code",[t._v("SYN")]),t._v(" 的，可以用来监听三次握手")])]),t._v(" "),_("li",[_("p",[t._v("命令: "),_("code",[t._v("tcpdump -vv tcp port 80 | grep 'Host:'")]),_("br"),t._v("\n解释: 找到 http 中所有的 Host")])])]),t._v(" "),_("h2",{attrs:{id:"相关文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://danielmiessler.com/study/tcpdump/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A tcpdump Tutorial with Examples — 50 Ways to Isolate Traffic"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=p.exports}}]);