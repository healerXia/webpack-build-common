const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require("path");
const serveIndex = require('serve-index');
const app = express();

//环境变量读取配置
const { PORT = '3000' } = process.env;

//设置端口
app.set('port', PORT);

//设置静态资源路径
app.use(express.static(path.join(__dirname, '/apps')));


var options = {
    target: 'http://192.168.56.70:80', // 代理的目标服务器
    cookieDomainRewrite:{
        "yiche.com": "yiche.com",
    },
    proxyTimeout:10000,
};

// 创建proxy
var proxyServer = proxy(options);
app.use('/ssp-manager', proxyServer);

//显示目录结构
app.use(serveIndex(path.join(__dirname, '/apps')));

//监听端口
app.listen(app.get('port'), () => {
    console.log(`server running @${app.get('port')}`)
});