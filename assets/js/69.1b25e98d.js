(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{169:function(s,t,e){"use strict";e.r(t);var a=e(20),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"crowi-plus-docker-compose-からの移行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crowi-plus-docker-compose-からの移行","aria-hidden":"true"}},[s._v("#")]),s._v(" crowi-plus-docker-compose からの移行")]),s._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[e("code",[s._v("docker-compose.yml")]),s._v("は編集せず、"),e("code",[s._v("Dockerfile")]),s._v(" のみ編集してください")])]),s._v(" "),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("FROM")]),s._v(" と"),e("code",[s._v("ENV APP_DIR")]),s._v(" 行を以下のように書き換えます\n"),e("ul",[e("li",[e("p",[e("strong",[s._v("Before")])]),s._v(" "),e("div",{staticClass:"language-docker extra-class"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" weseek/crowi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("2\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" APP_DIR /opt/crowi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plus\n")])])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("After")])]),s._v(" "),e("div",{staticClass:"language-docker extra-class"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" weseek/growi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" APP_DIR /opt/growi\n")])])])])])]),s._v(" "),e("li",[s._v("GROWI では、lsx プラグインと pukiwiki-like-linker プラグインはオフィシャルイメージに含まれるようになりました。そのため、以下の行をコメントアウトするか、削除してください。\n"),e("ul",[e("li",[e("p",[e("strong",[s._v("Before")])]),s._v(" "),e("div",{staticClass:"language-docker extra-class"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install plugins if necessary")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install plugins"')]),s._v(" \\\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  && npm install --save \\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      crowi-plugin-lsx \\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      crowi-plugin-pukiwiki-like-linker \\")]),s._v("\n    && echo "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"done."')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# you must rebuild if install plugin at least one")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RUN npm run build:prod")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("After")])]),s._v(" "),e("div",{staticClass:"language-docker extra-class"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install plugins if necessary")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;;")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;; NOTE: In GROWI v3 and later,")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;;       2 of official plugins (growi-plugin-lsx and growi-plugin-pukiwiki-like-linker)")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;;       are now included in the ")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'weseek/growi'")]),s._v(" image.\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;;       Therefore you will not need following lines except when you install third-party plugins.")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;;")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RUN echo ")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install plugins"')]),s._v(" \\\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  && yarn add \\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      growi-plugin-XXX \\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      growi-plugin-YYY \\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  && echo ")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"done."')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# you must rebuild if install plugin at least one")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RUN npm run build:prod")]),s._v("\n")])])])])])])]),s._v(" "),e("h2",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[s._v("#")]),s._v(" Start")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("docker-compose up")])])])])},[],!1,null,null,null);n.options.__file="from-crowi-plus-docker-compose.md";t.default=n.exports}}]);