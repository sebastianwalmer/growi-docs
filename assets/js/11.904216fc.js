(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"開発環境の構築"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開発環境の構築","aria-hidden":"true"}},[t._v("#")]),t._v(" 開発環境の構築")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以下は WESEEK, Inc. での統一開発環境の紹介です。\nそのため、開発にあたって必須ではない設定やツールの指定が含まれています。")])]),t._v(" "),a("h2",{attrs:{id:"マージツールの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#マージツールの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" マージツールの準備")]),t._v(" "),a("ol",[a("li",[t._v("P4Merge (Helix Visual Client (P4V)) インストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.perforce.com/downloads/helix-visual-client-p4v",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.perforce.com/downloads/helix-visual-client-p4v"),a("OutboundLink")],1),t._v(" からDLしてインストールする")]),t._v(" "),a("li",[t._v("ユーザ登録は適宜実施する")])])]),t._v(" "),a("li",[t._v("P4Merge 設定\n"),a("ul",[a("li",[t._v("Diff タブで適当にファイルを2つ選択して OK")]),t._v(" "),a("li",[t._v("Edit -> Preferences...\n"),a("ul",[a("li",[t._v("「Character encoding」で「Unicode (UTF-8, no BOM)」または BOM 表記のない「Unicode(UTF-8)」を選択")]),t._v(" "),a("li",[t._v("「Line ending type」で「UNIX (LF)」を選択")])])])])])]),t._v(" "),a("h2",{attrs:{id:"gitクライアントの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitクライアントの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" Gitクライアントの準備")]),t._v(" "),a("ol",[a("li",[t._v("SourceTreeインストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://ja.atlassian.com/software/sourcetree",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ja.atlassian.com/software/sourcetree"),a("OutboundLink")],1),t._v(" からDLしてインストールする")]),t._v(" "),a("li",[t._v("「Git が見つかりませんでした」というダイアログが表示された場合は、「システム全体でなく、SourceTree 単独で使うためだけの内蔵用の Git をダウンロードする。」を選択")])])]),t._v(" "),a("li",[t._v("SourceTree設定\n"),a("ol",[a("li",[t._v("SourceTree からターミナルを開く")]),t._v(" "),a("li",[t._v("autoCRLF を無効化する\n"),a("ul",[a("li",[t._v("以下をコピペして実行 "),a("code",[t._v("git config --global core.autoCRLF false")])])])]),t._v(" "),a("li",[t._v("自身のアカウント情報を設定\n"),a("ul",[a("li",[t._v("「オプション > 全般」...")]),t._v(" "),a("li",[t._v("「デフォルトのユーザ情報」を適宜設定")])])]),t._v(" "),a("li",[t._v("P4Merge を設定\n"),a("ul",[a("li",[t._v("「オプション > Diff」...")]),t._v(" "),a("li",[t._v("「外部Diffツール」「マージツール」で「P4Merge」を選択")])])]),t._v(" "),a("li",[t._v("デフォルトの文字コード設定\n"),a("ul",[a("li",[t._v("「オプション > 全般」...")]),t._v(" "),a("li",[t._v("「デフォルトの文字コード」で「utf-8」を選択")])])])])])]),t._v(" "),a("h2",{attrs:{id:"node-js-実行環境のインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-実行環境のインストール","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js 実行環境のインストール")]),t._v(" "),a("p",[t._v("Node.js, npm, Yarn 共に、CI 環境で利用する "),a("code",[t._v("node:8")]),t._v(" のバージョンに合わせる")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Windows"}},[a("ol",[a("li",[a("p",[t._v("Node.js, npm のバージョン管理ツール「nodist」 をインストール")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/marcelklehr/nodist/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/marcelklehr/nodist/releases"),a("OutboundLink")],1),t._v(" から NodistSetup-vX.X.X.exe をダウンロードして実行")])])]),t._v(" "),a("li",[a("p",[t._v("Node.js, npm インストール")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nodist global 8\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Yarn インストール")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://yarnpkg.com/ja/docs/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yarnpkg.com/ja/docs/install"),a("OutboundLink")],1),t._v(" から DL してインストール")])])])])]),t._v(" "),a("tab",{attrs:{name:"Mac"}},[a("ol",[a("li",[t._v("homebrew インストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://brew.sh/index_ja",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://brew.sh/index_ja"),a("OutboundLink")],1),t._v(" の記載に従ってインストールする")])])]),t._v(" "),a("li",[t._v("Node.js, npm のバージョン管理ツール「nodebrew」をインストール"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nodebrew\nnodebrew setup\n")])])])]),t._v(" "),a("li",[t._v("Node.js, npm インストール"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nodebrew install-binary v8.x\n")])])])])]),t._v(" "),a("ul",[a("li",[t._v("Yarn インストール"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" yarn\n")])])])])])])],1),t._v(" "),a("h3",{attrs:{id:"versions-confirmed-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions-confirmed-to-work","aria-hidden":"true"}},[t._v("#")]),t._v(" Versions confirmed to work")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ node -v\nv10.15.1\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n6.4.1\n$ yarn -v\n1.13.0\n")])])]),a("h2",{attrs:{id:"エディタの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#エディタの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" エディタの準備")]),t._v(" "),a("ol",[a("li",[t._v("Visual Studio Code インストール")]),t._v(" "),a("li",[t._v("拡張機能をインストール\n"),a("ul",[a("li",[t._v("インストール方法\n"),a("ul",[a("li",[a("code",[t._v("Ctrl + Shift + P")]),t._v(" -> 「Extensions: Show Recommended Extensions」を選択して全てインストール")])])])])])]),t._v(" "),a("h2",{attrs:{id:"開発環境の依存インフラの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開発環境の依存インフラの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" 開発環境の依存インフラの準備")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Docker 環境をネイティブで準備できない場合のみ、以下の手順が必要")])]),t._v(" "),a("ol",[a("li",[t._v("VirtualBox インストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.virtualbox.org/wiki/Downloads"),a("OutboundLink")],1),t._v(" から DL してインストールする\n"),a("ul",[a("li",[t._v("バージョンは "),a("code",[t._v("5.1.30")]),t._v(" とする。")])])]),t._v(" "),a("li",[t._v("Extension Pack の中で利用する機能はないのでインストール不要")])])]),t._v(" "),a("li",[t._v("Vagrant インストール\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.vagrantup.com/downloads.html"),a("OutboundLink")],1),t._v(" からDLしてインストールする")]),t._v(" "),a("li",[t._v("Vagrantfile を作成"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Vagrant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"envimation/ubuntu-xenial-docker"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### provision")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### change mirror")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    sed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bak "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### install packages")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":inline")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apt-get update && apt-get install -q -y tmux git nano less"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### clone growi-docker-compose for development")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" privileged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    git clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("weseek"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("growi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git growi\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## port forwarding")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HackMD")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"empty"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MongoDB")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redis")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ElasticSearch")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# elasticsearch-head")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MariaDB")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# phpMyAdmin")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provider Options")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provider "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"virtualbox"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("vb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    vb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modifyvm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--memory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4096"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])])])])])],1)},[],!1,null,null,null);e.options.__file="dev-env.md";s.default=e.exports}}]);