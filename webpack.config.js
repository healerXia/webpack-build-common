var path = require("path");

var baseConfig = require("./webpack_config/base.config.js");
var loaderConfig = require("./webpack_config/loader.config.js");
var pluginConfig = require("./webpack_config/plugin.config.js");
var aliasConfig = require("./webpack_config/alias.config.js");
var serverConfig = require("./webpack_config/server.config.js");


var {projectName,port,node_env} = require("./webpack_config/project.info.js");

var selected_libs = require("./apps/"+projectName+"/src/view.js").libs;

//已有的库
var libs = {
	"https":path.join(__dirname,"base/jquery/jquery.js"),
	"vue":["vue","vue-router"],
	"view":path.join(__dirname,"base/iview_custom/iview.js"),
}

var entry = {
	main:baseConfig.entryPath
};

selected_libs.forEach(function(item,i){
	entry[item] = libs[item];
});

var config={
	devtool:baseConfig.devtool, 
	watch:baseConfig.watch,
	devServer:serverConfig,
	entry:entry,
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

console.log(__dirname);

module.exports = config;