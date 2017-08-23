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


#### apps中项目目录结构

- src —— 存放源文件
  - main.js —— 入口文件，必须
  - view.js —— 配置页面信息及需引入的库，必须
- online —— 存放生产环境打包的代码
- package.json —— 项目的配置文件

#### 配置

1. 将本项目克隆到本地，执行`npm install`安装依赖的模块
2. 在webpack-build-common目录下新建apps目录

#### 使用

——开发——

1. 在apps目录下新建项目，项目结构如上

2. 配置view.js，如下所示，libs为需要打包的库（能引入哪些库，需要在webpack中进行配置），page为页面信息（chunks的值始终是比libs多一个"main"）

   ```javascript
   module.exports = {
     libs:['https',"vue",'view'],
     page:{
         title:'index',
         hash:false,
         chunks:['https',"vue",'view','main'],
         filename:'index.html',
         template:'_tpl/tpl.html',
         inject:'body'
     }
   }
   ```

3. 配置main.js，该文件为入口文件，一般是初始化vue的根实例，引入一些必须的依赖等

4. 在Linux或Mac下，在本项目根目录执行`name=项目名 port=xxxx npm run dev`进入开发模式，port默认为3000端口（可不写）；在windows下，需要在webpack-build-common下的package.json中的scripts中添加项目运行的配置（参照已有的dev-demo写法）

5. 例如apps目录下有名称为project的项目：`name=project port=3001 npm run dev` ，在浏览器中访问localhost:3001

——线上打包——

执行`name=项目名 npm run build` 进行生产环境打包，打包代码存放在项目中的online目录