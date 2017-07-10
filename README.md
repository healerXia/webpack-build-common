# webpack-build
基于webpack+nodejs的打包系统



#### 目录结构

- apps  —— 项目目录，开发时的工作目录
- _tpl —— 存放生成html的模板文件


- base  —— 公共资源目录


- log     —— 存放打包或推送时的日志


- node_modules —— node模块


- route —— 打包系统的API，以及逻辑

  - api.js —— 接口


- project_info.json —— 存放已经添加的项目


- push.sh —— 推送代码的shell脚本
  - push_info.json —— 存放要推送的目标服务器信息，以及推送脚本的
  - tar.sh —— 压缩需要推送代码的shell脚本
  - tools.js —— 接口中用到的逻辑


- source_build —— 打包推送系统的UI页面


- tmp —— 打包或推送时，临时存放在git上拉取的代码


- config.json —— 打包过程中临时保存当前正在打包的项目名


- log.txt —— 服务器启动时的日志文件


- package.json —— npm的配置文件


- server.js —— 服务器配置文件


- start.sh —— 启动服务器的shell脚本


- webpack.config.js ——webpack打包的配置文件



#### 配置

首先需要在机器上安装nodejs，安装好以后：

1、将本项目克隆到本地（git clone git@xxx）,进入项目目录执行 npm install 安装node依赖的模块

2、执行 npm install -g webpack@2.3.3，安装全局的webpack

3、将机器的ssh-key绑定到线上git账号

4、在项目根目录创建apps和base文件夹

5、在项目根目录执行 sh start.sh 启动node服务



#### 使用

——打包推送——

在浏览器中访问hostname:3000/source_build/index.html项目，进入打包推送的UI页面，按照页面中进行相应的操作



——开发——

开发时在项目根目录运行 app=apps目录中的某个项目名 npm run dev，即打开webpack的开发模式，并开始监测项目的变化，项目的结构参考[project-demo](http://gitlab.ctags.cn/fed/project-demo.git)项目