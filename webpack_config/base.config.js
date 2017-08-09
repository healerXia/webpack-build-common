var path = require("path");

var {projectName,port,node_env} = require("./project.info.js");

var config = {
    dev:{
        devtool:'cheap-module-eval-source-map', 
        watch:false,
        outputPath:path.join(__dirname,"../apps/"+projectName+"/dev"),
        entryPath:path.join(__dirname,"../apps/"+projectName+"/src/main.js"),
    },
    pro:{
        devtool:false,
        watch:false,
        outputPath:path.join(__dirname,"../apps/"+projectName+"/online"),
        entryPath:path.join(__dirname,"../apps/"+projectName+"/src/main.js"),
    }
}

var exportConfig = config.dev;
if(node_env==="production"){
    exportConfig = config.pro;
}


module.exports = exportConfig;