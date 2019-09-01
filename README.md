# template

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 常用地址
https://vue.ant.design/

component list
https://github.com/vueComponent/ant-design-vue/blob/master/site/components.js

### login 页面的请求规范到 LoginService 中
## 消息提示
login 页面涉及到了请求，请求的成功与失败都需要有所提示。所以打算使用 ant-design-vue 中的消息提示。

## 关于表单验证
登录页面使用的只是 antDesign 的 input 和 button。并没有使用其 Form 组件。
所以验证之类的功能，还需要自己写在 js 中。（当然，简单起见的话，也可以不写）
