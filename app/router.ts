import { Application, Context } from 'egg';

export default (app: Application) => {

  const middleware = app.middleware as any;
  const auth = middleware.auth();

  const { controller, router } = app;

  const { home, user } = controller;

  router.get('/', home.index);
  router.get('/test', home.test);
  router.get('/testSocket', home.testSocket);
  router.post('/create', home.create);

  router.get('/user', auth, user.index);

  // 鉴权成功后的回调页面
  // router.get('/authCallback', home.authCallback);

  // 渲染登录页面，用户输入账号密码
  router.get('/login', home.login);

  // 登录校验
  // router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }));

  router.get('/logout', home.logout);

  // socket.io
  app.io.of('/').route('home', app.io.controller.home.server);
  app.io.route('message', app.io.controller.message.index);

};
