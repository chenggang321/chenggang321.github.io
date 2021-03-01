(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{596:function(t,s,a){"use strict";a.r(s);var e=a(40),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ansible-简易入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-简易入门"}},[t._v("#")]),t._v(" ansible 简易入门")]),t._v(" "),a("p",[t._v("使用 ansible 可以进行批量配置服务器，批量安装软件，省了一大部分繁琐的重复工作，提高了管理服务器的效率。")]),t._v(" "),a("p",[t._v("简单点说，使用 ansible 可以一键配置好你所有服务器的一切配置及软件安装，如 "),a("code",[t._v("vim")]),t._v("，"),a("code",[t._v("git")]),t._v(", "),a("code",[t._v("tmux")]),t._v("，"),a("code",[t._v("python")]),t._v("，"),a("code",[t._v("c++")]),t._v("，"),a("code",[t._v("nginx")]),t._v("，"),a("code",[t._v("docker")]),t._v(" 等。如果你对它情有所钟，你还可以使用它自动部署应用至多台服务器。(目前建议通过 k8s 及 CI 做自动部署)")]),t._v(" "),a("p",[t._v("本章介绍如何使用 "),a("code",[t._v("ansible")]),t._v(" 的安装以及关于 "),a("code",[t._v("ansible")]),t._v(" 的基本功能，建议拥有云服务器的同学都可以尝试一下 "),a("code",[t._v("ansible")]),t._v("，你会发现宝藏的。")]),t._v(" "),a("ul",[a("li",[t._v("原文链接: "),a("a",{attrs:{href:"https://github.com/shfshanyue/op-note/blob/master/ansible-guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 ansible 做自动化运维"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("系列文章: "),a("a",{attrs:{href:"https://github.com/shfshanyue/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器运维笔记"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"自动化运维的必要性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化运维的必要性"}},[t._v("#")]),t._v(" 自动化运维的必要性")]),t._v(" "),a("p",[t._v("我现在有两个云服务器用来瞎折腾，装的都是 centos 系统。而我在两个服务器上都会装上 "),a("code",[t._v("tmux")]),t._v("，用作多窗口管理工具。")]),t._v(" "),a("p",[t._v("但在有了服务器的早期有可能各种乱折腾，又需要多次重装系统，而每次重装系统，又需要重装一遍 "),a("code",[t._v("tmux")]),t._v("。")]),t._v(" "),a("p",[t._v("这就会造成一件重复度极高的事情: 安装 "),a("code",[t._v("tmux")]),t._v("。")]),t._v(" "),a("p",[t._v("如果在 centos 中安装 "),a("code",[t._v("tmux")]),t._v(" 能够直接使用 "),a("code",[t._v("yum install tmux")]),t._v(" 也就罢了，但是安装 tmux 也是一件极为琐碎的事情。")]),t._v(" "),a("p",[t._v("根据我在本系列文章 "),a("a",{attrs:{href:"https://shanyue.tech/op/tmux-setting",target:"_blank",rel:"noopener noreferrer"}},[t._v("窗口复用与 tmux"),a("OutboundLink")],1),t._v(" 中提到一个 "),a("code",[t._v("tmux")]),t._v(" 的安装步骤")]),t._v(" "),a("ol",[a("li",[t._v("安装依赖 package")]),t._v(" "),a("li",[t._v("在 github 下载源代码，编译安装")]),t._v(" "),a("li",[t._v("在 github 下载配置文件")])]),t._v(" "),a("p",[a("strong",[t._v("而且，在多个服务器和多次重装过程中，有可能重复以上安装步骤 N 次。")])]),t._v(" "),a("p",[t._v("于是自动化运维存在的意义就体现了出来，它可以直接使用一条命令便完成所有服务器的安装过程")]),t._v(" "),a("h2",{attrs:{id:"ansible-安装及配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-安装及配置"}},[t._v("#")]),t._v(" ansible 安装及配置")]),t._v(" "),a("p",[t._v("ansible 是使用 python 写的一个做自动化运维的工具。在使用 ansible 之前需要明白以下两个概念")]),t._v(" "),a("ul",[a("li",[t._v("本地环境: 即你的 PC，mac 或者是跳板机，在本地环境需要安装 ansible")]),t._v(" "),a("li",[t._v("远程服务器: 在远程服务器会部署自己的服务，跑应用，也是需要被管理的服务器。在远程服务器中不需要装任何应用")])]),t._v(" "),a("p",[t._v("ansible 工作在 ssh 协议上，它只需要满足两个条件")]),t._v(" "),a("h3",{attrs:{id:"_1-在本地环境安装-ansible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在本地环境安装-ansible"}},[t._v("#")]),t._v(" 1. 在本地环境安装 ansible")]),t._v(" "),a("p",[t._v("在 mac 上，直接通过 "),a("code",[t._v("brew install ansible")]),t._v(" 就可以完成安装。")]),t._v(" "),a("p",[t._v("如果不是 mac，可以参考 "),a("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#intro-installation-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方安装指南"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("不过本地环境大多都是 "),a("code",[t._v("mac")]),t._v(" 或者 "),a("code",[t._v("windows")])]),t._v(" "),a("h3",{attrs:{id:"_2-在本地能够-ssh-到远程服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在本地能够-ssh-到远程服务器"}},[t._v("#")]),t._v(" 2. 在本地能够 ssh 到远程服务器")]),t._v(" "),a("p",[t._v("通过配置 "),a("code",[t._v("~/.ssh/config")]),t._v(" 与 "),a("code",[t._v("ssh key")]),t._v(" 可以达到直连免密的效果，具体参考本系列的第一篇文章 "),a("a",{attrs:{href:"https://shanyue.tech/op/init",target:"_blank",rel:"noopener noreferrer"}},[t._v("云服务器初始登录配置"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("~/.ssh/config")]),t._v(" 文件如下")]),t._v(" "),a("div",{staticClass:"language-config extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Host shanyue\n    HostName 172.17.68.39\n    User root\nHost shuifeng\n    HostName 172.17.68.40\n    User root\n")])])]),a("h2",{attrs:{id:"ansible-inventory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-inventory"}},[t._v("#")]),t._v(" ansible inventory")]),t._v(" "),a("p",[t._v("通过配置 "),a("code",[t._v("~/.ssh/config")]),t._v(" 后，我们为远程服务器起了别名。此时可以通过 "),a("code",[t._v("inventory")]),t._v(" 进行分组管理。")]),t._v(" "),a("p",[a("code",[t._v("ansible")]),t._v(" 默认的 "),a("code",[t._v("inventory")]),t._v(" 配置文件为 "),a("code",[t._v("/etc/ansible/hosts")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[prod]")]),t._v("\nshanyue\nshuifeng\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[dev]")]),t._v("\nproxy\njumper ansible_port"),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("5555 ansible_host=192.0.2.50")]),t._v("\n")])])]),a("p",[t._v("配置释义如下")]),t._v(" "),a("ol",[a("li",[t._v("总共有四台服务器，shanyue，shuifeng，proxy，jumper，所有的服务器都在分组 "),a("code",[t._v("all")]),t._v(" 下")]),t._v(" "),a("li",[t._v("shanyue 与 shuifeng 在分组 "),a("code",[t._v("prod")]),t._v(" 下，而 proxy 与 jumper 在分组 "),a("code",[t._v("dev")]),t._v(" 下")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("inventory")]),t._v(" 中同样可以设置 "),a("code",[t._v("hostname")]),t._v(", "),a("code",[t._v("port")]),t._v(" 与别名，但是建议在 ssh-config 中进行设置")])]),t._v(" "),a("h2",{attrs:{id:"一个简单的-ad-hoc-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的-ad-hoc-命令"}},[t._v("#")]),t._v(" 一个简单的 ad-hoc 命令")]),t._v(" "),a("p",[a("code",[t._v("ad-hoc")]),t._v(" 命令指去特定一组服务器上执行一个命令。而一个命令实际上指的是 "),a("code",[t._v("module")]),t._v("，而最常用的 "),a("code",[t._v("module")]),t._v(" 是 "),a("code",[t._v("ping")]),t._v("，用以查看服务器是否正常连通")]),t._v(" "),a("p",[t._v("所有的module可以参考 "),a("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/list_of_all_modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ansible modules"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有服务器是否能够正常连通")]),t._v("\n$ ansible all -m "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v("\nshuifeng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"changed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ping"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pong"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nshanyue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"changed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ping"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pong"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"ansible-playbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-playbook"}},[t._v("#")]),t._v(" Ansible playbook")]),t._v(" "),a("p",[a("code",[t._v("ansible ad-hoc")]),t._v(" 执行的命令过于简单，一般用于服务器的测试工作以及一些简单的小操作。而一些复杂的事情，如上述所说的 "),a("code",[t._v("tmux")]),t._v(" 的安装则需要一系列脚本来完成。")]),t._v(" "),a("p",[a("code",[t._v("ad-hoc")]),t._v(" 是指定服务器执行指定命令， "),a("strong",[t._v("而 "),a("code",[t._v("playbook")]),t._v(" 是指定服务器执行一系列命令。")])]),t._v(" "),a("ul",[a("li",[t._v("hosts，用以指定服务器分组。如 prod")]),t._v(" "),a("li",[t._v("role, 用以指定一系列命令的集合。如 tmux，方便复用")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prod\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("roles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tmux\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ansible playbook 最佳实践"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[t._v("#")]),t._v(" Role")]),t._v(" "),a("p",[t._v("role 指定了一系列命令，或者称做 "),a("code",[t._v("tasks")]),t._v("。每个 "),a("code",[t._v("task")]),t._v(" 都可以看做一个 "),a("code",[t._v("ad-hoc")]),t._v("，由 "),a("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/modules/modules_by_category.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ansible module"),a("OutboundLink")],1),t._v(" 组成")]),t._v(" "),a("p",[t._v("但是在 "),a("code",[t._v("task")]),t._v(" 执行的过程中，一定会有一些变量，配置文件的设置，这就是 role 的其它组成部分。如 "),a("code",[t._v("defaults")]),t._v("，"),a("code",[t._v("vars")]),t._v("，"),a("code",[t._v("files")]),t._v(" 和 "),a("code",[t._v("templates")]),t._v("。"),a("code",[t._v("role")]),t._v(" 的文件结构组织如下")]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("site.yml\nroles/\n   tmux/\n     tasks/\n     handlers/\n     files/\n     templates/\n     vars/\n     defaults/\n     meta/\n")])])]),a("p",[t._v("比如一个 tmux 的 role 做了以下 "),a("code",[t._v("tasks")])]),t._v(" "),a("ol",[a("li",[t._v("安装依赖 package")]),t._v(" "),a("li",[t._v("在 github 下载源代码，编译安装")]),t._v(" "),a("li",[t._v("在 github 下载配置文件")])]),t._v(" "),a("p",[t._v("配置文件参考我的 ansible 配置: "),a("a",{attrs:{href:"https://github.com/shfshanyue/ansible-op/blob/master/roles/tmux/tasks/main.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("shfshanyue/ansible-op"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prepare\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{item}}"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with_items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gcc\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" automake\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" libevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("devel\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ncurses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("devel\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" glibc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("static\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install tmux\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/tmux/tmux.git\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" make tmux\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sh autogen.sh "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" ./configure "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" make\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chdir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux/\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" copy tmux\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux/tmux\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/bin/tmux\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("remote_src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yes\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0755")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" clone config file\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" USE_ME\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/shfshanyue/tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config.git \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" clone config file (from .tmux)\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/gpakosz/.tmux.git\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not USE_ME\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" copy config file (from .tmux)\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config/.tmux.conf.local\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.tmux.conf.local\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("remote_src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yes\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not USE_ME\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" copy config file\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config/.tmux.conf\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.tmux.conf\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("remote_src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yes\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" delete tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/Documents/tmux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absent\n")])])]),a("h2",{attrs:{id:"ansible-galaxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-galaxy"}},[t._v("#")]),t._v(" Ansible galaxy")]),t._v(" "),a("p",[t._v("即 "),a("code",[t._v("Role")]),t._v(" 的仓库。")]),t._v(" "),a("p",[t._v("有一些高频的可复用的服务组件的部署，如 "),a("code",[t._v("docker")]),t._v("，"),a("code",[t._v("redis")]),t._v(" 之类，可以在 "),a("a",{attrs:{href:"https://galaxy.ansible.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("ansible-galaxy"),a("OutboundLink")],1),t._v(" 找到，而免了自己写 "),a("code",[t._v("role")]),t._v(" 的麻烦。")]),t._v(" "),a("p",[t._v("如 "),a("a",{attrs:{href:"https://github.com/DavidWittman/ansible-redis",target:"_blank",rel:"noopener noreferrer"}},[t._v("ansible-redis"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找关于 redis 的所有 Role")]),t._v("\n$ ansible-galaxy search redis\nFound "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("387")]),t._v(" roles matching your search:\n\n Name                                                    Description\n ----                                                    -----------\n 0x5a17ed.ansible_role_netbox                            Installs and configures NetBox, a DCIM suite, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a production setting.\n 1it.sudo                                                Ansible role "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" managing sudoers\n 75629fce.ufw                                            High-level, service-based interface "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" configuring UFW\n aalaesar.install_nextcloud                              Add a new Nextcloud instance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" your infrastructure. The rol\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n$ ansible-galaxy "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" davidwittman.redis\n")])])]),a("h3",{attrs:{id:"列出本地安装的所有-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出本地安装的所有-role"}},[t._v("#")]),t._v(" 列出本地安装的所有 Role")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ansible-galaxy list\n")])])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[a("code",[t._v("ansible")]),t._v(" 以批量配置以及软件管理见长，如果你有一台自己的服务器的话，非常建议学习 "),a("code",[t._v("ansible")]),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);