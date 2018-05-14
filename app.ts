import { Application, Context } from 'egg';
import * as jsonwebtoken from 'jsonwebtoken';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

export default function(app: Application) {

  app.beforeStart(async () => {
    // 启动自定义
    console.log('#app before start');
  });

  /* passport-local start */
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req: any, username: string, password: string, done: any) => {
    const user = {
      provider: 'local',
      username,
      password,
    };
    app.passport.doVerify(req, user, done);
  }));
  /* passport-local end */

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
    app.passport.doVerify(req, user, done);
  }));
  /* passport-jwt end */

  /**
   * 用户校验
   * @param {Object} req
   * @param {Object} user
   */
  app.passport.verify(async (ctx: Context, user: any) => {

    if (user.provider === 'local') {
      if (user.username === 'allin') {
        const signToken = jsonwebtoken.sign({ username: user.username }, app.config.keys);
        ctx.cookies.set('token', signToken, {
          signed: true,
        });
        return user;
      } else {
        ctx.throw(401, 'Unthorization');
      }
    }

    if (user.provider === 'jwt') {
      return user;
    }

  });
};
