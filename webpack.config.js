var path = require("path");

var baseConfig = require("./webpack_config/base.config.js");
var loaderConfig = require("./webpack_config/loader.config.js");
var pluginConfig = require("./webpack_config/plugin.config.js");
var aliasConfig = require("./webpack_config/alias.config.js");
var serverConfig = require("./webpack_config/server.config.js");

//显示警告的详细内容
// process.traceDeprecation = true;

var config={
	devtool:baseConfig.devtool, 
	watch:baseConfig.watch,
	devServer:serverConfig,
	entry:{
		"lib":[path.join(__dirname,"base/jquery/jquery.js"),"vue","vue-router"],
		"ui":path.join(__dirname,"base/iview_custom/iview.js"),
		"main":baseConfig.entryPath,
	},
	output:{
		path:baseConfig.outputPath,
		filename:'js/[name].bundle.js',
		// publicPath:"./",
	},
	module:{
		rules:loaderConfig,
	},
	resolve:{
		alias:aliasConfig,
	},
	plugins: pluginConfig,
};

module.exports = config;