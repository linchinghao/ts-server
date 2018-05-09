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
    passReqToCallback: true,
  };
  app.passport.use(new JwtStrategy(opts, (req: any, payload: any, done: any) => {
    const user = {
      provider: 'jwt',
      payload,
    };
    console.log('###', done);
    app.passport.doVerify(req, user, done);
  }));

  /**
   * 用户校验
   * @param {Object} req
   * @param {Object} user
   */
  app.passport.verify(async (req: any, user: any) => {
    console.log('#auth', req.throw, user);
    if (user.payload.username === 'allin') {
      console.log('用户验证成功');
      return user;
    } else {
      console.log('用户验证失败');
    }
  });
  /* passport-jwt end */
};
