# npm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 上传npm

"name": "vue-image-container",  // 组件名
"version": "0.1.4",  // 版本号
"description": "img-container",  // 组件描述
"main": "lib/vue-img-container.umd.min",  // 打包结果文件
"private": false,   // 是否为私有项目
"author": "carter_liu",
"license": "MIT",
"style": "lib/vue-img-container.css",  // 打包后的样式文件
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint",
  "lib": "vue-cli-service build --target lib --name vue-img-container --dest lib packages/index.js"  // 打包命令
},

.npmignore 文件包含不需要上传的模块
