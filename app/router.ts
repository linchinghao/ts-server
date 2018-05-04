import { Application, Context } from 'egg';
import { Strategy as LocalStrategy } from 'passport-local';

// TODO: 身份登录状态维持
export default (app: Application) => {

  const middleware = app.middleware as any;
  const auth = middleware.auth();
  // 使用passport-local策略
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {

    const user = {
      provider: 'local',
      username,
      password,
    };

    app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx: Context, user: any) => {
    // 验证
    if (user.username === 'allin') {
      return user;
    } else {
      this.ctx.throw(401, '授权失败!');
    }
  });

  // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  app.passport.serializeUser(async (ctx: Context, user: any) => {
    return user;
  });

  // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  app.passport.deserializeUser(async (ctx: Context, user: any) => {
    return user;
  });

  const { controller, router } = app;

  const { home, user } = controller;

  router.get('/', home.index);
  router.get('/test', home.test);
  router.get('/testSocket', home.testSocket);
  router.post('/create', home.create);

  router.get('/user', auth, user.index);

  // 鉴权成功后的回调页面
  router.get('/authCallback', home.authCallback);

  // 渲染登录页面，用户输入账号密码
  router.get('/login', home.login);

  // 登录校验
  router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }));

  router.get('/logout', home.logout);

  // socket.io
  app.io.of('/').route('home', app.io.controller.home.server);
  app.io.route('message', app.io.controller.message.index);

};
