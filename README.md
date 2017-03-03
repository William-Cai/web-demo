#Web 项目工程 Demo
> 使用React & Webpack

## 准备工作
- 安装[node.js](https://nodejs.org/).  
  环境需要安装。
---

- 安装Webpack  
用npm安装webpack
```sh
    npm install webpack -g
```
参数`-g`表示全局(global)安装 webpack，这样就可以直接使用`webpack`命令了。

webpack有一个web服务器，基于node.js创建一个本地服务器，默认3000端口。
```sh
    npm install webpack-dev-server -g
```

- webpack 配置文件  
首先我们需要确定web项目结构，`app/`目录为存放我们的入口脚本文件 - `app.js`，webpack打包它到`build/`目录下的`bundle.js`，配置文件放在项目的根目录下，
`webpack.config.js`配置如下：  
```js
// webpack.config.js
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/app.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    }
  }
```
在`app/`目录下创建js文件`app.js`，内容如下：
```js
document.writeln('It works!');
````

在`build/`目录下创建一个HTML文件`index.html`，内容如下：  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>搭建Web工程Demo</title>
</head>
<body>
<script src="./bundle.js"></script>
</body>
</html>
```
基本步骤完成到这边完成，使用命令`webpack`进行打包，会在`build/`下生成`bundle.js`，使用命令`webpack-dev-server`启动服务，
浏览器访问<http://localhost:8080/build/index.html>，成功后可以看到输出`It works!`。


- 配置package.json  
这个是node.js的配置文件，我们可以使用以下命令进行项目的初始化  
```sh
    npm init
```
修改script的键值如下：
```json
"script":{
  "build": "webpack",
  "start": "webpack-dev-server"
}
```
使用命令`npm run build`（相当于使用了`webpack`）命令，使用`npm run start`（相当于使用了`webpack-dev-server`）命令。

- 安装React：
```sh
    npm install react react-dom -save-dev
```

- 安装jQuery来做AJAX的请求
```sh
    npm install jquery -save-dev
```

-安装[Babel](https://babeljs.io)的loader来支持ES6的语法：
```sh
    npm install babel-core babel-loader babel-preset-2015 babel-preset-react --save-dev
```
<pre>以前Facebook有个jsx的语法，现在已经给Babel来解析了</pre>

安装完成后修改`webconfig.config.js`，使用babel。
```js
// webpack.config.js

var path = require('path');

module.exports = {
entry: path.resolve(__dirname, 'app/app.js'),
output: {
  path: path.resolve(__dirname, 'build'),
  filename: 'bundle.js'
},
module: {
  loaders: [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015','react']
    }
  },
  ]
}
};
```

测试webpack&react开发环境
修改`app/app.js`，修改如下：
```js
// app.js

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
      return (
          <div>Hello World</div>
          );
    }
}

ReactDOM(<HelloWorld />, $('#content')[0]);
```
该js将html中元素（id为content）进行React的渲染，因此我们还需要在`build/index.html`加入元素，并且元素id为
content，修改如下
```html
...
<body>
<div id="content"></div>
<script src="./bundle.js"></script>  
</body>
...
```
重新打包，刷新页面<http://localhost:8080/build/index.html>，可以看到我们的页面输出了`Hello World`。

以上完结了初始化的构建

- 后话  
我们可以使用安装`create-react-app`来构建，启动服务器`react-scripts`，具体我们可以进入
登录[NPM网站](https://www.npmjs.com/)，搜索`create-react-app`。或者可以[链接](https://www.npmjs.com/package/create-react-app)。

```sh
    npm install create-react-app --save-dev
```


## 进阶-1

## 进阶-2