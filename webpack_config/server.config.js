var path = require("path");

var projectName = process.env.MY_APP;

var devServer = {
    allowedHosts: [
        '.yiche.com',
    ],
    port:3000,
    compress: true,
    clientLogLevel: "info",
    contentBase: [path.join(__dirname, "../apps/"+projectName+"/dev")],
    hot:true,
    watchContentBase: true,
    proxy: {
        "/ssp-manager": {
            target: "http://192.168.56.70:80",
        },
        cookieDomainRewrite:{
            "yiche.com": "yiche.com",
        },
        proxyTimeout:10000,
    }
}

module.exports = devServer;