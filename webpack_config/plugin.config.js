var path = require("path");

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
var HtmlWebpackPlugin = require('html-webpack-plugin');

var {projectName,port,node_env} = require("./project.info.js");

var page = require("../apps/"+projectName+"/src/view.js").page;
var selected_libs = require("../apps/"+projectName+"/src/view.js").libs

if(node_env==="production"){
    page.hash = true;
}

var plugin = [
    //提取相同js文件中相同的部分
    new webpack.optimize.CommonsChunkPlugin({
        name:selected_libs,
        filename:"js/[name].bundle.js",
        minChunks: 3,
    }),

    //复制文件
    // new CopyWebpackPlugin([
    //     {from:"./apps/"+projectName+"/src/_images",to:"images"},
    //     {from:"./apps/"+projectName+"/src/_fonts",to:"fonts"}
    // ],{
    //     copyUnmodified: true,
    // }),

    //压缩图片
    new ImageminWebpackPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i ,
        pngquant: {
            quality: '95-100',
        }
    }),

    //生成HTML页面
    new HtmlWebpackPlugin(page)
];

if(node_env==="production"){
	plugin.push(
        //混淆js
        new webpack.optimize.UglifyJsPlugin({
      		compress:{
      			warnings:false,
      			drop_console:true,
      		}
      	})
    );
    plugin.push(
        //将css单独倒出到文件
        new ExtractTextPlugin({
            filename:'css/[name].css',
            allChunks:true,
        })
    );
}else{
    plugin.push(
        //热替换
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = plugin;