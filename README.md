# Egg + Typescript

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
- Redis 3.x
- Mongoodb 3.x

## `Egg`内置中间件
`bodyParser` 对post请求的请求体进行解析  
`meta` 请求元数据  
`notfound` 404支持  
`koa-override` 支持Put/Delete等动词的请求  
`site_file` HTTP缓存  

## `Egg`内置插件
onerror 统一异常处理  
Session Session 实现  
i18n 多语言  
watcher 文件和文件夹监控  
multipart 文件流式上传  
security 安全  
development 开发环境配置  
logrotator 日志切分  
schedule 定时任务  
static 静态服务器  
jsonp jsonp 支持  
view 模板引擎  

## Egg与Typescript结合的问题
1. egg-socket.io  
  `io/middleware`不能识别ts文件.相关issue[https://github.com/eggjs/egg/issues/2398](https://github.com/eggjs/egg/issues/2398)  
  解决方法：  
  ```js
  /lib/loader.js
  new app.loader.FileLoader({
    directory: dirs,
    target: app.io.middleware,
    inject: app,
    typescript: true // add
  }).load();
  ```

2. 路由挂载中间件  
  使用TS开发，在路由加载中间件，提示`Property 'middlewareName' does not exist on type 'Middleware<Context>[]`
  见相关issue[https://github.com/eggjs/egg/issues/2358](https://github.com/eggjs/egg/issues/2358)


## TODO

- [x] 路由管理  koa-router
- [x] 鉴权 jwt?cookie-session?
- [ ] 权限管理  
- [x] 数据库  mongoose
- [x] 统一错误处理  onerror插件
- [x] 缓存管理  redis
- [x] 消息服务/网关  socket
- [x] 配置管理  config
- [x] 单元测试  
- [x] 安全  
- [x] 一键部署  

1. 完善socket.io
2. 鉴权选用JWT
3. 基于Mongoose的数据库CURD
4. 添加dockerfile
5. 测试实例编写
6. 编写egg-passport index.d.ts