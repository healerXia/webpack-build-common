var path = require("path");

var projectName = process.env.MY_APP;

var config = {
    dev:{
        devtool:'cheap-module-eval-source-map', 
        watch:false,
        outputPath:path.join(__dirname,"../apps/"+projectName+"/dev"),
        entryPath:path.join(__dirname,"../apps/"+projectName+"/_src/_script/main.js"),
    },
    pro:{
        devtool:false,
        watch:false,
        outputPath:path.join(__dirname,"../apps/"+projectName+"/online"),
        entryPath:path.join(__dirname,"../apps/"+projectName+"/_src/_script/main.js"),
    }
}

var exportConfig = config.dev;
if(process.env.NODE_ENV==="production"){
    exportConfig = config.pro;
}


module.exports = exportConfig;