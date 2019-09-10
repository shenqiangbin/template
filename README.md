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

## 回车登录

给 box 添加上一个 @keyup.enter="login" 
如果是封装好的，需要使用 @keyup.enter.native="login"

为什么给 box 加上呢，因为这是响应的页面的 回车 事件。

## 登录后跳转


其他页面获取 router 的方式 this.$router

## 如果没有登录，则跳转到登录页

修改 main.js ，增加是否登录的判断。
后台  
server.servlet.session.cookie.http-only=false
server.servlet.session.cookie.secure=false
使其可以操作 cookie 。通过读取 cookie 判断是否登录。
但是，js 可以操作 cookie，会可能有 xss 攻击的问题。
（后面这个方案又作废了）

## 退出

logout 后，JSESSIONID 还是会存在。但是资源已经获取不到了。使用 JSESSIONID 来判断登录还是有问题。
拦截 logout 这个 post 请求的源代码在哪里呢？处理逻辑又是怎样的呢？
前台如何记录这个登录成功的操作？
答：前台不记录了。
前台每次跳转的时候，都通过后台接口判断是否已经登录。而不是在使用 Cookie 来判断。
所以之前设定的 cookie 可读，还可以改回去，修改为不可读。

## 登录后显示登录帐号

帐号信息的获取还是和登录一个接口，都是获取的用户信息

## 后台项目从数据库中检索用户，而不在是从内存中读取

1、连接数据库

数据库的连接使用的是  HikariCP，而不是 MyBatis
封装了一个 MySQLHelper 类。

Q1：连接 MySQL 数据库失败
原因：使用的是 MySQL 8.0 之后的版本，此时，Pom.xml 中使用的 MySQL Jar 包版本要升级。
且 连接字符串的配置也要 更改。

JdbcUrl: jdbc:mysql://127.0.0.1:3306/template?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=UTC
DriverClassName: com.mysql.cj.jdbc.Driver

如果是 MySQL 的版本比较低，同样 Pom.xml 依赖的 Jar 包版本也要降低。
且 连接字符串的配置也要 更改。

JdbcUrl: jdbc:mysql://127.0.0.1:3306/javablog?useUnicode=true&characterEncoding=utf8&useSSL=false
DriverClassName: com.mysql.jdbc.Driver
   
2、 分层

在 Service 层直接调用 MySQLHelper 类来检索的。
正常应该还有一个 Repository 层（或称 DAO 层），也就是 数据访问层
目前没有这个层，是感觉没有必要，Service 层还没有任何用处。

Q1: 某个类下的 @Autowired 的 Bean 始终是 null
原因：所在的类也要是一个 Bean，否则不可以。

