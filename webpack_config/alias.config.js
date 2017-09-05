var path = require("path");

var alias = {
    jquery:path.join(__dirname,"../base/jquery/jquery.js"),
    widgets:path.join(__dirname,"../apps/widgets/"),
    vue$:"vue/dist/vue.js",
    vuerouter$:"vue-router/dist/vue-router.js",
    ui:path.join(__dirname,"../base/iview_custom/iview.js"),
    // 引入模块别名
}

module.exports = alias;