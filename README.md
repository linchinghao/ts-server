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


## TODO

- [x] 路由管理  koa-router
- [ ] 鉴权 jwt token  
- [ ] 权限管理  
- [ ] 数据库  mongoose
- [ ] 统一错误处理  onerror插件
- [ ] 缓存管理  redis
- [ ] 消息服务/网关  socket
- [ ] 配置管理  config
- [ ] 单元测试  
- [ ] 安全 
- [ ] 小程序管理  
- [ ] 一键部署  

## 默认中间件
`bodyParser` 对post请求的请求体进行解析
`meta` support Keep-Alive Header
`notfound` 404支持
`koa-override` 支持Put/Delete等动词的请求
`site_file` 首页缓存？

## 默认开启中间件
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
view 模板引