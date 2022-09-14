## 前端项目手把手搭建

前文档将会手把手带同学们搭建广州华商学院前端项目，**请耐心阅读！！！**

### 1. 安装 Node 环境

在搭建项目之前，请先确保你的 Node.js 已经安装，如果未安装，请前往官网下载安装：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

安装之后，请进入 D 盘，鼠标鼠标单击，选择 git bash 打开，在终端输入命令

```bash
node -v
npm -v
```

这两个命令应输出了 Node.js 和 npm 的版本信息。 如果这两个命令都执行成功，那就接着往下走。

如果不成功，说明安装不正确，请自行查询资料或请教同学/讲师

### 2. 创建空文件夹，命名为 courseProject，并进入 courseProject 文件夹

在刚才的 git bash 下，继续输入下面的命令

```js
mkdir courseProject
cd courseProject
```

这时候我们已经进入到了 courseProject 文件夹

### 3. 我们新增 package.json ，这是一份配置文件

```json
{
  "name": "courseProject",
  "version": "0.0.1",
  "author": "彭道宽",
  "description": "广州华商学院前端项目",
  "main": "dist/index.js"
}
```

### 4. 安装 React，并且安装它相应的兄弟姐妹

还是在当前的 git bash 下，我们输入下面命令

```bash
npm install react@17.0.2
npm install react-router@5.2.0 react-router-dom@5.2.0 react-dom@17.0.2
```

### 5. 接着安装一下 Babel

它是 JS 编译器，能将 ES6 代码转成 ES5，让我们使用最近的语言特性，而不需要担心兼容性的问题。

还是在当前的 git bash 下，我们输入下面命令

```bash
npm install @babel/polyfill@7.12.1 --save
npm install @babel/core@7.14.3 @babel/cli@7.14.3 --save-dev
npm install @babel/preset-env@7.14.2 @babel/preset-react@7.13.13 @babel/preset-typescript@7.13.0 --save-dev

npm install @babel/plugin-transform-runtime@7.14.3 --save-dev
npm install @babel/plugin-transform-modules-commonjs@7.14.0 --save-dev
```

### 6. 安装 Babel 完成之后，配置文件

根据 Babel 官网的教程，我们创建 babel.config.js，配置一下我们常用的插件 plugins 和 预设值 presets

```js
module.exports = {
  presets: [
    '@babel/preset-env', // 👉 根据配置的目标浏览器或者运行环境，选择对应的语法包，从而将代码进行转换
    '@babel/preset-react', // 👉 react 语法包，让我们可以使用 React ES6 Class Component 的写法，支持JSX、TSX语法格式
    '@babel/preset-typescript', // 👉 https://github.com/babel/babel/issues/10570
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 👉 官方提供的插件，作用是减少冗余的代码
    [
      '@babel/plugin-transform-modules-commonjs', // 👉 将 ECMAScript modules 转成 CommonJS.
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
  ],
};
```

### 7. 创建 src 目录，新增 app.jsx 、app.css 和 html 文件

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" />
    <title>广州华商学院前端项目</title>
    <style>
      * {
        margin: 0px;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```css
.container {
  color: red;
  margin: 12px;
  font-size: 24px;
}
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="container">广州华商学院前端项目搭建起来了！!!</div>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### 8. 安装 css 样式相关依赖

因为我们需要引入了 css 文件，我们需要通过一些 loader 进行解析该文件

还是在当前的 git bash 下，我们输入下面命令

```bash
npm install postcss-loader@3.0.0 --save-dev
npm install css-loader@3.0.0 --save-dev
npm install style-loader@2.0.0 --save-dev
npm install autoprefixer@9.0.0 --save-dev
```

### 9. 添加 postcss.config.js

```js
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['> 0.5%', 'last 5 versions'],
    },
  },
};
```

### 10. 安装一下 Webpack

还是在当前的 git bash 下，我们输入下面命令

```bash
npm install webpack@4.44.1 --save-dev
npm install webpack-cli@3.3.12 --save-dev

npm install webpack-dev-server@3.11.2 --save-dev
npm install webpack-merge --save-dev
npm install html-webpack-plugin@4.3.0 --save-dev
npm install clean-webpack-plugin --save-dev
npm install babel-loader --save-dev
```

### 11. 创建 Webpack 打包配置文件夹，区分环境

新增 webpack 文件夹，分别创建：

- webpack.base.js: 基础公共配置
- webpack.dev.js: 开发环境配置
- webpack.prod.js: 生产环境配置

下面是 webpack.base.js 配置内容

```js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
```

下面是 webpack.dev.js 配置内容

```js
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/app.jsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip
    port: 7001, // 启动端口为 6666 的服务
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../src/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
```

下面是 webpack.prod.js 配置内容

```js
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/app.jsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../src/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
};

module.exports = webpackMerge.merge(prodConfig, baseConfig);
```

### 13. 在 package.json 文件里添加 script 脚本

进入 package.json 文件，添加 script 脚本

```json
{
  "name": "courseProject",
  "version": "0.0.1",
  "author": "彭道宽",
  "description": "广州华商学院前端项目",
  "main": "dist/index.js",

  // 这是新加的
  "scripts": {
    "dev": "webpack-dev-server --config ./webpack/webpack.dev.js",
    "build": "webpack --config ./webpack/webpack.prod.js"
  }
}
```

### 14. 跑起来

在刚才的 git bash 下，我们将项目跑起来

```bash
npm run dev
```

然后会弹出浏览器页面，通过 `http://127.0.0.1:7001/#/` 能够访问页面！
