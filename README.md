# webpack-build
基于webpack+nodejs的打包系统



#### 目录结构

- _tpl —— 存放生成html的模板文件
- apps —— 工作目录，存放已有的项目
- base —— 存放公共的库文件
- node_modules —— node模块
- webpack_config —— webpack各模块配置
  - alias.config.js —— 配置库文件的别名（可自行添加）
  - base.config.js —— webpack基础配置
  - entry.config.js —— 入口文件配置（动态添加入口，目前为单页面，暂时没有用到）
  - loader.config.js —— 配置webpack用到的loader
  - plugin.config.js —— 配置webpack用到的插件
  - server.config.js —— 配置dev-server
- package.json —— npm的配置文件
- proxy.js —— 代理服务器配置（开发时可直接用dev-server，本服务可用来查看打包代码效果）
- webpack.config.js ——webpack打包的配置文件


#### apps目录结构

- _src —— 存放源文件
  - _fonts —— 存放字体文件（非必须）
  - _images —— 存放图片（非必须）
  - _sass —— 存放样式文件（非必须，取决于引用路径）
  - _script —— 存放js、vue等文件
    - main.js —— 入口文件，必须
- online —— 存放生产环境打包的代码
- package.json —— 项目的配置文件

#### 配置

将本项目克隆到本地，执行`npm install`安装依赖的模块

安装全局webpack`npm install -g webpack@xxx`项目中用的是2.6.1版本

#### 使用

——开发——

在本项目根目录执行`app=项目名 npm run dev`进入开发模式，例如apps目录下有名称为project的项目：`app=project npm run dev` ，在浏览器中访问localhost:port

——线上打包——

执行`app=项目名 npm run build` 进行生产环境打包，打包代码存放在online目录中