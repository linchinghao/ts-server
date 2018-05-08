import { Application, Context } from 'egg';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
// import { Strategy as LocalStrategy } from 'passport-local';

export default function(app: Application) {

  app.beforeStart(async () => {
    // 启动自定义
    console.log('#app before start');
  });

  /* passport-jwt start */
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: app.config.keys,
  };
  app.passport.use(new JwtStrategy(opts, (req: any, payload: any, done: any) => {
    const user = {
      provider: 'jwt',
      payload,
    };
    app.passport.doVerify(req, user, done);
  }));

  app.passport.verify(async (ctx: Context, user: any) => {
    // 验证
    console.log('#auth', user);
    if (user.username === 'allin') {
      return user;
    } else {
      this.ctx.throw(401, '授权失败!');
    }
  });

  /* passport-local start */
  // 使用passport-local策略
  // app.passport.use(new LocalStrategy({
  //   passReqToCallback: true,
  // }, (req, username, password, done) => {

  //   const user = {
  //     provider: 'local',
  //     username,
  //     password,
  //   };

  //   app.passport.doVerify(req, user, done);
  // }));

  // // 处理用户信息
  // app.passport.verify(async (ctx: Context, user: any) => {
  //   // 验证
  //   if (user.username === 'allin') {
  //     return user;
  //   } else {
  //     this.ctx.throw(401, '授权失败!');
  //   }
  // });

  // // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  // app.passport.serializeUser(async (ctx: Context, user: any) => {
  //   return user;
  // });

  // // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  // app.passport.deserializeUser(async (ctx: Context, user: any) => {
  //   return user;
  // });
  /* passport-local end */
};
