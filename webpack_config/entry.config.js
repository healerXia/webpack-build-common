var glob = require("glob");

var pageFiles = glob.sync("./"+baseDir+project.name+'/_src/_script/entry/*.js');
var pageEntrys = {};
pageFiles.forEach(function(file,i){
	var name = file.split('/').reverse()[0].replace('.js', '');
	pageEntrys[name] = "./"+baseDir+project.name+'/_src/_script/entry/'+name+'.js';
});

module.exports = pageEntrys;
// config.entry = Object.assign({},config.entry,pageEntrys);