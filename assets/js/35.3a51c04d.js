(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{229:function(a,r,t){"use strict";t.r(r);var s=t(20),e=Object(s.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"bakudankun-crowi-からの移行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bakudankun-crowi-からの移行","aria-hidden":"true"}},[a._v("#")]),a._v(" bakudankun/crowi からの移行")]),a._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),t("ul",[t("li",[a._v("Crowi の docker image、"),t("a",{attrs:{href:"https://github.com/crowi/docker-crowi",target:"_blank",rel:"noopener noreferrer"}},[a._v("bakudankun/crowi"),t("OutboundLink")],1),a._v(" を利用している環境から、"),t("br"),a._v("\nGROWI 公式の docker-compose を用いたディプロイ方法である "),t("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[a._v("weseek/growi-docker-compose"),t("OutboundLink")],1),a._v(" への切り替えを想定")]),a._v(" "),t("li",[a._v("その際、以下のデータ移行を伴うことになる\n"),t("ul",[t("li",[a._v("MongoDB コンテナのデータボリュームからデータを吸い出し、リストアする")]),a._v(" "),t("li",[a._v("アプリケーションコンテナのデータボリュームからアップロードファイルデータを吸い出し、リストアする")])])])]),a._v(" "),t("h2",{attrs:{id:"前準備"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前準備","aria-hidden":"true"}},[a._v("#")]),a._v(" 前準備")]),a._v(" "),t("ol",[t("li",[a._v("Crowi と GROWI のコンテナを起動しておく\n"),t("ul",[t("li",[t("p",[a._v("仮に、それぞれで利用しているコンテナ名、データボリューム名を以下とする(必要に応じて置き換える)")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("項目")]),a._v(" "),t("th",[a._v("Crowi")]),a._v(" "),t("th",[a._v("GROWI")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("アプリケーションコンテナ")]),a._v(" "),t("td",[a._v("crowi_crowi_1")]),a._v(" "),t("td",[a._v("growi_app_1")])]),a._v(" "),t("tr",[t("td",[a._v("アプリケーションコンテナ用データボリューム")]),a._v(" "),t("td",[a._v("crowi_crowi_data")]),a._v(" "),t("td",[a._v("growi_growi_data")])]),a._v(" "),t("tr",[t("td",[a._v("MongoDB コンテナ")]),a._v(" "),t("td",[a._v("crowi_mongo_1")]),a._v(" "),t("td",[a._v("growi_mongo_1")])])])])])])])]),a._v(" "),t("h2",{attrs:{id:"password-seed-の抽出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password-seed-の抽出","aria-hidden":"true"}},[a._v("#")]),a._v(" PASSWORD_SEED の抽出")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("bakudankun/crowi 利用時に、環境変数で PASSWORD_SEED を明示的に指定していた場合は、 GROWI でもそれを引き続き利用する")])]),a._v(" "),t("li",[t("p",[a._v("明示的に指定していなかった場合、自動生成された値がデータボリュームに保存されているので、それを抽出する")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TBD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"db-のデータ移行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-のデータ移行","aria-hidden":"true"}},[a._v("#")]),a._v(" DB のデータ移行")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Crowi から mongodump を使い DB のデータのバックアップを取る")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -it --rm --link crowi_mongo_1 --network crowi_default --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup mongo "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nmongodump --host crowi_mongo_1 --db crowi --out /backup\n")])])])]),a._v(" "),t("li",[t("p",[a._v("crowi-plus へバックアップデータをリストアする")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -it --rm --link growi_mongo_1 --network growi_default  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup mongo "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nmongorestore -v --host growi_mongo_1 --db growi backup/crowi\n")])])]),t("p",[a._v("[要調査] ユニーク制約に引っかかるかもしれない")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("PASSWORD_SEED")]),a._v(" のセット")]),a._v(" "),t("ul",[t("li",[a._v("抽出した"),t("code",[a._v("PASSWORD_SEED")]),a._v("を GROWI 側の起動時の環境変数("),t("code",[a._v("docker-compose.yml")]),a._v(" で指定)に設定する")])])]),a._v(" "),t("li",[t("p",[a._v("GROWI を再起動")])])]),a._v(" "),t("h2",{attrs:{id:"アップロードファイルのデータ移行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#アップロードファイルのデータ移行","aria-hidden":"true"}},[a._v("#")]),a._v(" アップロードファイルのデータ移行")]),a._v(" "),t("p",[t("strong",[a._v("アップロードファイルの保存先に AWS S3 を使う場合は、以下の作業は不要")])]),a._v(" "),t("ul",[t("li",[a._v("bakudankun/crowi はデフォルトでアップロードファイルをファイルシステムに保存する設定("),t("code",[a._v("FILE_UPLOAD=local")]),a._v(")になっている")]),a._v(" "),t("li",[a._v("同様の環境で動かすには、データを移した上で GROWI 側の起動時の環境変数("),t("code",[a._v("docker-compose.yml")]),a._v(" で指定)に "),t("code",[a._v("FILE_UPLOAD=local")]),a._v(" を入れる")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Crowi から uploads のバックアップを取る")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run --rm -v crowi_crowi_data:/data -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup bakudankun/crowi "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -rp /data /backup\n")])])])]),a._v(" "),t("li",[t("p",[a._v("GROWI へバックアップデータをリストアする")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run --rm -v crowiplus_crowi_data:/data -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup growi_app_1 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -rp /backup/uploads /data/\n")])])])])])])},[],!1,null,null,null);e.options.__file="from-bakudankun-crowi.md";r.default=e.exports}}]);