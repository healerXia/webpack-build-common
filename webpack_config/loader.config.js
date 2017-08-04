var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var loader = [
    {   
        //.vue文件编译
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                js: 'babel-loader?presets[]=es2015'
            }
        }
    },
    {   //babel，编译es6,jsx
        test:/\.js?$/,
        loader:'babel-loader',
        include: [
            path.resolve(__dirname, '../apps'),
            path.resolve(__dirname, '../base'),
            path.resolve(__dirname, '../node_modules/iview'),
        ],
        query:{
            presets:['es2015'],
            plugins:["transform-vue-jsx"],
        }
    },
    {   //图片处理
        test:/\.(png|jpg|gif|jpeg)$/,
        loader:'url-loader',
        options:{
            limit:10000,
            name:"images/[name].[ext]",
            // publicPath:'../'
        }
    },
    {   //字体文件处理
        test:/\.(svg|woff|ttf|eot)$/,
        loader:'url-loader',
        options:{
            limit:10000,
            name:"fonts/[name].[ext]",
            publicPath:'../'
        }
    },
];

if(process.env.NODE_ENV==="production"){
	loader.push({   //将scss,css编译导出到单独的文件
		test:/\.(scss|css)$/,
		loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader!csso-loader!autoprefixer-loader?{browsers:["last 3 versions","> 5%"]}!sass-loader'}),
	});
    loader.push({   //将less编译导出到单独的文件
		test:/\.less$/,
		loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader!csso-loader!autoprefixer-loader?{browsers:["last 3 versions","> 5%"]}!less-loader'}),
	})
}else{
    loader.push({
		test:/\.(scss|css)$/,
		loader:'style-loader!css-loader?sourceMap!autoprefixer-loader?{browsers:["last 3 versions","> 5%"]}!sass-loader?sourceMap',
	});
    loader.push({
		test:/\.less$/,
		loader:'style-loader!css-loader?sourceMap!autoprefixer-loader?{browsers:["last 3 versions","> 5%"]}!less-loader?sourceMap',
	});
}


module.exports = loader;