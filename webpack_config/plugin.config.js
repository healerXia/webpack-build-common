var path = require("path");

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
var HtmlWebpackPlugin = require('html-webpack-plugin');

var projectName = process.env.MY_APP;

var plugin = [
    //提取相同js文件中相同的部分
    new webpack.optimize.CommonsChunkPlugin({
        name:["lib","ui"],
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
    new HtmlWebpackPlugin({
        title:'index page',
        hash:process.env.NODE_ENV==="production",
        chunks:['lib',"ui",'main'],
        filename:'index.html',
        template:'_tpl/tpl.html',
        inject:'body'
    })
];

if(process.env.NODE_ENV==="production"){
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